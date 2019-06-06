/**
 * @param {Number} milli 
 * Converting ms to desired output (00:00:00.00)
 */
export function millisecondsToString(milli) {
    if(!milli && milli !== 0){
        return null;
    }
    const milliseconds = parseInt((milli % 1000) / 10);
    const seconds = parseInt((milli / 1000) % 60);
    const minutes = parseInt((milli / (1000 * 60)) % 60);
    const hours = parseInt((milli / (1000 * 60 * 60)) % 24);
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${milliseconds}`;
}
/**
 * @param {Number} num 
 * Pad numbers smaller than 10
 */
export function pad(num) {
    if(!num && num !==0){
        return null;
    }
    return num >= 10 ? num : `0${num}`;
}