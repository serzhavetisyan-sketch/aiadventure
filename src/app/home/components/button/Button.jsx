"use client"
import {useState} from "react"


const Button=()=>{

    const[clicked,setClicked]=useState(false)
    const [text, setText]=useState("click me")
    const handleClick=()=>{
        setClicked(true)
        if( clicked){
            setClicked(false)
            setText("stop click")
        }
        else{
            setClicked(fakse)
            setText("Click me")
        }
        console.log(clicked)
    }
   return(
      <button onClick=>
   )
}

export default Button