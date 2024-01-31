import { useRouteError } from "react-router-dom";

const Error = ()=> {

    const error = useRouteError(); //This hook will capture the possible routing errors and return the info through an object
    console.log(error);

    return(
        <>
        <h1>ayyeyyeyeye</h1>
        {error.data} Code {error.status} : {error.statusText}
        
        </>

    )
}

export default Error;