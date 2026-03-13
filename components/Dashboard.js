"use client"

import {useEffect,useState} from "react"
import axios from "axios"

export default function Dashboard(){

const [crypto,setCrypto] = useState([])

useEffect(()=>{

axios.get(
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
)
.then(res=>{
setCrypto(res.data.slice(0,6))
})

},[])

return(

<div className="grid md:grid-cols-3 gap-6">

{crypto.map(c=>(
<div
key={c.id}
className="glass p-6"
>

<h2 className="text-xl font-semibold">
{c.name}
</h2>

<p className="text-3xl">
${c.current_price}
</p>

<p
className={
c.price_change_percentage_24h>0
?"text-green-400":"text-red-400"
}
>

{c.price_change_percentage_24h.toFixed(2)}%

</p>

</div>
))}

</div>

)

}
