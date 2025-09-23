import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type Props = { href?: string; children: React.ReactNode; variant?: 'solid'|'outline'; className?: string }
export default function Button({href='#', children, variant='solid', className=''}:Props){
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm transition shadow-pill'
  const solid = 'bg-ink text-white hover:translate-y-[-1px] active:translate-y-0'
  const outline = 'bg-white text-ink border border-black/10 hover:bg-black/5'
  const Comp:any = href ? Link : 'button'
  return <Comp href={href} className={`${base} ${variant==='solid'?solid:outline} ${className}`} aria-label={(typeof children==='string')?children.toString():undefined}>
    {children} <ArrowUpRight className="size-4" />
  </Comp>
}
