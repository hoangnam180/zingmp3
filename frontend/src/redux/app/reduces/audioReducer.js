const initialState = {
     data : [
        {title : "bai2",url :"https://mp3-s1-m-zmp3.zmdcdn.me/1acb0f41fc0615584c17/4532688980372037967?authen=exp=1665033878~acl=/1acb0f41fc0615584c17/*~hmac=a1bd3a4379747ca40e801e4eb8c410fe"},
        {title : "bai3",url : "https://mp3-s1-m-zmp3.zmdcdn.me/c16fd49ffade13804acf/305431239400740512?authen=exp=1665035080~acl=/c16fd49ffade13804acf/*~hmac=8af0dc41568461ace13152a0508009d3"}
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