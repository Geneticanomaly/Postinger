export const getCondensedNumber = (amount: number): string => {
    // 1K - 9.9K range
    if (amount >= 1000 && amount < 10000) {
        const roundedValue = Math.round(amount / 100) / 10;
        return `${roundedValue}K`;
        // 10K - 99K range
    } else if (amount >= 10000 && amount < 100000) {
        const roundedValue = Math.floor(amount / 1000);
        return `${roundedValue}K`;
        // 100K - 999K range
    } else if (amount >= 100000 && amount < 1000000) {
        const roundedValue = Math.floor(amount / 1000);
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
