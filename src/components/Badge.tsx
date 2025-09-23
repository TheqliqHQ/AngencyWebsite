export default function Badge({children}:{children:React.ReactNode}){
  return <span className="pill inline-block bg-paper/90 backdrop-blur border shadow">{children}</span>
}
