import { Area } from 'react-easy-crop';

export const getCondensedNumber = (amount: number): string => {
    // 1K - 9.9K range
    if (amount >= 1000 && amount < 10000) {
        const roundedValue = Math.round(amount / 100) / 10;
        return `${roundedValue}K`;
        // 10K - 99K range
    } else if (amount >= 10000 && amount < 100000) {
        const roundedValue = Math.floor(amount / 100) / 10;
        return `${roundedValue}K`;
        // 100K - 999K range
    } else if (amount >= 100000 && amount < 1000000) {
        const roundedValue = Math.floor(amount / 100) / 10;
        return `${roundedValue}K`;
        // 1M and above
    } else if (amount >= 1000000) {
        const roundedValue = Math.round(amount / 100000) / 10;
        return `${roundedValue}M`;
    } else {
        if (amount === 0) {
            return '';
        } else {
            return amount.toString();
        }
    }
};

export const getCroppedImage = (imageSrc: string, croppedAreaPixels: Area): Promise<File> => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imageSrc;

        image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                reject('Failed to get canvas context');
                return;
            }

            // Set canvas size to the cropped area size
            canvas.width = croppedAreaPixels.width;
            canvas.height = croppedAreaPixels.height;

            // Draw the image on the canvas based on the cropped pixels
            ctx.drawImage(
                image,
                croppedAreaPixels.x, // X position of the crop in pixels
                croppedAreaPixels.y, // Y position of the crop in pixels
                croppedAreaPixels.width, // Width of the cropped area
                croppedAreaPixels.height, // Height of the cropped area
                0, // X position on the canvas (start from top-left corner)
                0, // Y position on the canvas (start from top-left corner)
                croppedAreaPixels.width, // Width on the canvas
                croppedAreaPixels.height // Height on the canvas
            );

            // Convert the canvas to a blob and resolve it as a file
            canvas.toBlob((blob) => {
                if (!blob) {
                    reject('Failed to create cropped image blob');
                    return;
                }
                const file = new File([blob], 'cropped-image.png', { type: 'image/png' });
                resolve(file);
            });
        };

        image.onerror = () => {
            reject('Failed to load image');
        };
    });
};
