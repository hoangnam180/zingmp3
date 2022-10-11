const initialState = {
    data: [],
    isPlaying: false,
    isRepeat: false,
    isRandom: false,
    currentIndex: 0,
};
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_PLAY': {
            return {
                ...state,
                isPlaying: action.payload,
            };
        }
        case 'IS_REPEAT': {
            return {
                ...state,
                isRepeat: action.payload,
            };
        }
        case 'SET_INDEX': {
            return {
                ...state,
                currentIndex: action.payload,
            };
        }
        case 'SET_RANDOM': {
            return {
                ...state,
                isRandom: action.payload,
            };
        }
        case 'SET_DATA': {
            return {
                ...state,
                data: [...action.payload],
            };
        }
        default: {
            return state;
        }
    }
};

export default todoReducer;
