const initialState = {
    data: JSON.parse(localStorage.getItem('listSong')) || [],
    isPlaying: false,
    isRepeat: false,
    isRandom: false,
    currentIndex: JSON.parse(localStorage.getItem('currentIndex')) || 0,
    currentSong: {},
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
            localStorage.setItem('currentIndex', JSON.stringify(action.payload));
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
        case 'SET_CURRENT_SONG': {
            return {
                ...state,
                currentSong: action.payload,
            };
        }
        case 'SET_DATA': {
            if (action.payload) {
                localStorage.setItem('listSong', JSON.stringify(action.payload));
                return {
                    ...state,
                    data: [...action.payload],
                };
            }
            return state;
        }
        default: {
            return state;
        }
    }
};

export default todoReducer;
