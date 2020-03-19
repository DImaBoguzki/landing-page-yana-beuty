export const setDelay = (mls) => {
    return new Promise(resolve => setTimeout(resolve, mls));
}