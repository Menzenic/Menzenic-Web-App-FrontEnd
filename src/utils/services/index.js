export function IS_DEVELOPMENT() {
    return process.env.NODE_ENV !== 'production';
}