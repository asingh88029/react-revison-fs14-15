import React, {useEffect} from 'react'

const ShowEmail = ({email}) => {
    
    useEffect(()=>{
        console.log("Email is updated")
    }, [email])  
    
      return (
        <div>
            <h1>Email = {email}</h1>
        </div>
      )
}

export default ShowEmail