"use client"

import { motion } from "framer-motion"
import Dashboard from "../components/Dashboard"
import AIChat from "../components/AIChat"

export default function Home(){

return(

<div className="p-10">

<h1 className="text-5xl font-bold mb-6">
Freedova
</h1>

<p className="mb-10 opacity-70">
Turn Skills → Freedom → Income → Assets → Wealth
</p>

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<Dashboard/>

</motion.div>

<AIChat/>

</div>

)

}
