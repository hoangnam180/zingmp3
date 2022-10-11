export const setIsPlay = (isPlay) => {
    return {
        type: 'IS_PLAY',
        payload: isPlay,
    };
};

export const setCurrentIndex = (isPlay) => {
    return {
        type: 'SET_INDEX',
        payload: isPlay,
    };
};
export const setIsRepeat = (isRepeat) => {
    return {
        type: 'IS_REPEAT',
        payload: isRepeat,
    };
};
export const setIsRandom = (isRandom) => {
    return {
        type: 'SET_RANDOM',
        payload: isRandom,
    };
};
export const setData = (data) => {
    return {
        type: 'SET_DATA',
        payload: data,
    };
};
