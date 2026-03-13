"use client"

import {useState,useEffect} from "react"

export default function ThemeToggle(){

const [dark,setDark] = useState(true)

useEffect(()=>{
document.body.className = dark ? "dark" : ""
},[dark])

return(

<button
onClick={()=>setDark(!dark)}
className="glass px-4 py-2"
>

{dark?"Light Mode":"Dark Mode"}

</button>

)

}
