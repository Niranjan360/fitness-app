let user = null;

let Reducer=(state=user , action)=>
{
    switch(action.type)
    {
        case "add_user" : return action.payload;
        case "logout" : return action.payload;
        default : return state;
    }

}


export default Reducer;