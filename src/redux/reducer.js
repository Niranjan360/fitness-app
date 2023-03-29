let initialState =  { user : null } ;

let Reducer=(state=initialState , action)=>
{
    switch(action.type)
    {
        case "add_user" : return { ...state , user : action.payload   };
        case "logout" : return {...state , user : action.payload };
        case "updateHealth" : return { ...state , user : {...state.user , bmi : action.payload.bmi , health : action.payload.health}  }
        default : return state;
    }
}

export default Reducer;