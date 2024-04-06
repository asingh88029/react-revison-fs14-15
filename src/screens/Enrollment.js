import React, { Fragment, useEffect, useReducer, useState, useRef } from 'react';
import Form from './../components/Form';
import ShowName from '../components/ShowName';
import ShowEmail from '../components/ShowEmail';
import ShowBatch from '../components/ShowBatch';

const studentReducer = (state, action)=>{
    switch(action.type){
        case "UPDATE_NAME":
            return {...state, name : action.payload}
        case "UPDATE_EMAIL":
            return {...state, email : action.payload}
        case "UPDATE_BATCH":
            return {...state, batch : action.payload}
        case "RESET":
            return {name: "", email: "", batch: ""}
        default:
            return state
    }
}

const Enrollment = () => {

//   const [name , setName] = useState("");
//   const [email , setEmail] = useState("");
//   const [batch , setBatch] = useState("");

  const initialStudentData = {
    name : "",
    email : "",
    batch : ""
  }
  
  const [studentData, studentDispatch] = useReducer(studentReducer, initialStudentData)

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const batchRef = useRef(null)

  useEffect(()=>{
    console.log("studentData Changed")
  }, [studentData])

  return (
    <div>
        <h1>Enrollment Screen</h1>

        <div>
            <ShowName name={studentData.name}/>
            <ShowEmail email={studentData.email}/>
            <ShowBatch batch={studentData.batch}/>
        </div>

        <Form nameRef={nameRef} emailRef={emailRef} batchRef={batchRef}/>
        {/* <Form studentData={studentData} studentDispatch={studentDispatch}/> */}
        {/* <Form name={name} setName={setName} email={email} setEmail={setEmail} batch={batch} setBatch={setBatch}/> */}
        <button onClick={()=>{
            // console.log("Text1", {
            //     name,
            //     email,
            //     batch
            // })
            // setName("")
            // setEmail("")
            // setBatch("")
            // console.log("STUDENT_DATA", studentData)
            console.log("STUDENT DATA",{
                name : nameRef.current.value,
                email : emailRef.current.value,
                batch : batchRef.current.value
            })
            nameRef.current.value = "";
            emailRef.current.value = "";
            batchRef.current.value = "";
            // studentDispatch({type: "RESET"})
        }}>Submit</button>
    </div>
  )
}

export default Enrollment