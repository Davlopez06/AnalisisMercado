import { DELETE, GET_ALL_DATA, GET_DATA, SET_PAGE} from "./action";

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
        case SET_PAGE:
            console.log(action.payload)
            //Cambia la pagina que viene del action 
            let inicio=0;
            let dataInitial=[];
            for (let i = ((action.payload-1)*10); i < (action.payload*10); i++) {
                if(state.allData[i]){
                    dataInitial.push(state.allData[i])
                }
            }
            return{
                ...state,
                datas:dataInitial
            }
        case GET_DATA:
            console.log(action.payload)
            //Se busca el personaje y toda su informacion con el nombre
            console.log(state.auxData)
            let getData=state.auxData.filter(e => {
                console.log(e.identification)
                console.log(action.payload)
                if(e.identification=== parseInt(action.payload)){
                    return e
                }
            })
            console.log(getData)
            return{
                ...state,
                data:getData[0],
    
            }
        case DELETE:
            console.log(action.payload)
            //Se busca el personaje y toda su informacion con el nombre
            console.log(state.auxData)
            let deleteData=state.auxData.filter(e => {
                console.log(e.identification)
                console.log(action.payload)
                if(e.identification !== parseInt(action.payload)){
                    return e
                }
            })
            console.log(deleteData)
            let paginatee=0;
            let dataInit=[];
            if(deleteData.length % 10===0){
                paginatee=deleteData.length/10
            }else{
                paginatee=Math.floor(deleteData.length/10)+1
            }
            for (let i = 0; i < 10; i++) {
                if(deleteData[i]){
                    dataInit.push(deleteData[i])
                }
            }
            return{
                ...state,
                allData: deleteData,
                auxData: deleteData,
                datas:dataInit,
                pages: paginatee
            }
        default: return state
    }
};
  
export default rootReducer;