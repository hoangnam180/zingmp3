const initialState = {
    data: JSON.parse(localStorage.getItem('listSong')) || [],
    isPlaying: false,
    isRepeat: false,
    isRandom: false,
    currentIndex:
        (localStorage.getItem('current_index') !== null && JSON.parse(localStorage.getItem('current_index'))) || 0,
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
            if (action.payload === 0) {
                localStorage.setItem('current_index', JSON.stringify(''));
            } else {
                localStorage.setItem('current_index', JSON.stringify(action.payload));
            }
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
