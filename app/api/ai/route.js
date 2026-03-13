import OpenAI from "openai"

export async function POST(req){

const {question} = await req.json()

const openai = new OpenAI({
apiKey:process.env.OPENAI_KEY
})

const completion = await openai.chat.completions.create({
model:"gpt-4o-mini",
messages:[
{role:"user",content:question}
]
})

return Response.json({
reply:completion.choices[0].message.content
})

}
