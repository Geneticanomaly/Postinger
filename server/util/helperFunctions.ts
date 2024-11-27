import File from '../database/models/file';

export const convertToBase64 = (file: File | null) => {
    if (file && file.buffer) {
        return {
            mimetype: file.mimetype,
            buffer: file.buffer.toString('base64'),
        };
    }
    return null;
};
