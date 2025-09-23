'use client'
import { useEffect, useState } from 'react'
export default function RotatingWord({words=['cool','real','structured','impactful'], interval=1800}:{words?:string[], interval?:number}){
  const [i,setI] = useState(0)
  useEffect(()=>{
    const id = setInterval(()=> setI(v=> (v+1)%words.length ), interval)
    return ()=> clearInterval(id)
  },[words, interval])
  return <span className="text-ink/40 font-extrabold">{words[i]}</span>
}
