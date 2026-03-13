"use client"

import {useState} from "react"

export default function AIChat(){

const [question,setQuestion] = useState("")
const [answer,setAnswer] = useState("")

async function askAI(){

const res = await fetch("/api/ai",{
method:"POST",
body:JSON.stringify({question})
})

const data = await res.json()

setAnswer(data.reply)

}

return(

<div className="glass p-6 mt-10">

<h2 className="text-xl mb-4">
AI Investment Assistant
</h2>

<input
className="w-full p-3 text-black"
placeholder="Ask about stocks or crypto..."
value={question}
onChange={e=>setQuestion(e.target.value)}
/>

<button
onClick={askAI}
className="mt-4 px-6 py-2 bg-blue-500 rounded"
>

Ask AI

</button>

<p className="mt-4 opacity-80">
{answer}
</p>

</div>

)

}
