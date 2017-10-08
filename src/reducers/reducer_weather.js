import { FETCH_WEATHER } from '../actions/index'; 

export default function(state = [], action){
    switch (action.type) {
        case FETCH_WEATHER:
        //return state.concat([ action.payload.data ]); //bad approach, but works
        return [action.payload.data, ...state];  //much better approach 
    }
  return state;
}