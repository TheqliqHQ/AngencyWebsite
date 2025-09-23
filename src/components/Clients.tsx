'use client'
import { useEffect, useState } from 'react'
import Container from './Container'

const logos = [
  { name:'Leafe' },{ name:'Recharge' },{ name:'Sitemark' },{ name:'Waveless' },
  { name:'Kiteme' },{ name:'Northwind' },{ name:'Fabrico' },{ name:'Swiftly' },
]

function LogoCard({name}:{name:string}){
  return <div className="rounded-3xl bg-paper border border-black/5 shadow-sm p-8 grid place-items-center text-xl font-medium">{name}</div>
}

export default function Clients(){
  const [page, setPage] = useState(0)
  useEffect(()=>{
    const id = setInterval(()=> setPage(p => (p+1)%2), 3000)
    return ()=> clearInterval(id)
  },[])
  const slice = page===0 ? logos.slice(0,4) : logos.slice(4,8)
  return (
    <section aria-labelledby="clients" className="py-24 bg-cloud">
      <Container>
        <div className="text-center mb-10"><span id="clients" className="pill">WHO WE WORK WITH</span></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {slice.map(l => <LogoCard key={l.name} name={l.name} />)}
        </div>
      </Container>
    </section>
  )
}
