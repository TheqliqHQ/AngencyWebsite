import { PropsWithChildren } from 'react'
export default function Container({children, className='' }: PropsWithChildren<{className?:string}>) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
}
