import React from 'react'

// const Form = ({name, setName, email, setEmail, batch, setBatch}) => {
//   return (
//     <div>
//         <h2>Enter Student Details</h2>
//         <input value={name} type='text' placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}}/>
//         <input value={email} type='email' placeholder='Enter Email'onChange={(e)=>{setEmail(e.target.value)}}/>
//         <input value={batch} type='text' placeholder='Enter Batch'onChange={(e)=>{setBatch(e.target.value)}}/>
//     </div>
//   )
// }

// using useReducer
// const Form = ({studentData, studentDispatch}) => {
//   return (
//     <div>
//         <h2>Enter Student Details</h2>
//         <input value={studentData.name} type='text' placeholder='Enter Name' onChange={(e)=>{studentDispatch({type:"UPDATE_NAME", payload:e.target.value})}}/>
//         <input value={studentData.email} type='email' placeholder='Enter Email'onChange={(e)=>{studentDispatch({type:"UPDATE_EMAIL", payload:e.target.value})}}/>
//         <input value={studentData.batch} type='text' placeholder='Enter Batch'onChange={(e)=>{studentDispatch({type:"UPDATE_BATCH", payload:e.target.value})}}/>
//     </div>
//   )
// }

// useRef
const Form = ({nameRef, emailRef, batchRef}) => {
    return (
      <div>
          <h2>Enter Student Details</h2>
          <input ref={nameRef} type='text' placeholder='Enter Name' />
          <input ref={emailRef} type='email' placeholder='Enter Email' />
          <input ref={batchRef} type='text' placeholder='Enter Batch' />
      </div>
    )
  }

export default Form
