import React, { useEffect } from 'react'

const ShowBatch = ({batch}) => {

  useEffect(()=>{
    console.log("Batch is updated")
  }, [batch])  

  return (
    <div>
        <h1>Batch = {batch}</h1>
    </div>
  )
}

export default ShowBatch