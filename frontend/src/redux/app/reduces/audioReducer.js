const initialState = {
     data : [
        {title : "bai2",url :"https://mp3-s1-m-zmp3.zmdcdn.me/e52f8e0a954a7c14255b/8754884329565953675?authen=exp=1665366482~acl=/e52f8e0a954a7c14255b/*~hmac=af3bd18a96a85d92294369330fa79503"},
        {title : "bai3",url : "https://mp3-s1-m-zmp3.zmdcdn.me/3325a3bab9fa50a409eb/8865964172758646421?authen=exp=1665373123~acl=/3325a3bab9fa50a409eb/*~hmac=cf169cae0d701c96375b11e5f65eb07b"}
        ],
    isPlaying : false,
    isRepeat : false,
    isRandom : false,
    currentIndex : 0
}
const todoReducer = (state = initialState,action)=>{
    switch (action.type){
        case 'IS_PLAY' : {
            return {
                ...state,
                isPlaying : action.payload
            }
        }
        case 'IS_REPEAT' : {
            return {
                ...state,
                isRepeat : action.payload
            }
        }
        case 'SET_INDEX' : {
            return {
                ...state,
                currentIndex : action.payload
            }
        }
        case 'SET_RANDOM' : {
            return {
                ...state,
                isRandom : action.payload
            }
        }
            default:{
               return state;
            }
    }
}

export default todoReducer;