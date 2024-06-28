import React,{useEffect} from "react";
function Registration()
{
    useEffect(() => {
        const timeout = setTimeout(() => {
          // 👇️ redirects to an external URL
          window.location.replace('https://noteforms.com/forms/phoenix-drone-workshop-xk4tjo');
        }, 0);
    
        return () => clearTimeout(timeout);
      }, []);
    return(
        <div style={{height:"100vh",width:"100%"}}>
        Redirecting...
        </div>
       
    )
}

export default Registration;