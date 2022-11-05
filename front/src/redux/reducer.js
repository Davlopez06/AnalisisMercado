import { GET_ALL_DATA } from "./action";

const initialState = {
    allData: [],
    auxData:[],
    datas:[],
    data:{},
    pages: 0
  };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DATA:
            //Obtiene todos los personajes que vienen del action
            console.log(action.payload)
            let paginate=0;
            let dataIni=[];
            if(action.payload.length % 10===0){
                paginate=action.payload.length/10
            }else{
                paginate=Math.floor(action.payload.length/10)+1
            }
            for (let i = 0; i < 10; i++) {
                if(action.payload[i]){
                    dataIni.push(action.payload[i])
                }
            }
            return{
                ...state,
                allData: action.payload,
                auxData: action.payload,
                datas:dataIni,
                pages: paginate
            }
        default: return state
    }
};
  
export default rootReducer;