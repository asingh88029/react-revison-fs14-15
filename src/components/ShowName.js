import React, {useEffect} from 'react'

const ShowName = ({name}) => {
    useEffect(()=>{
        console.log("Name is updated")
    }, [name])  
    
    return (
    <div>
        <h1>Name = {name}</h1>
    </div>
    )
}

export default ShowName