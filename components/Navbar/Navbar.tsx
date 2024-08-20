import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from './../activelink/ActiveLink';


const navItems = [
    {path: '/about', text: "About"},
    {path: '/pricing', text: "Pricing"},
    {path: '/contact', text: "Contact"},
]


export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 rounded">
    <Link className="flex items-center" href="/">
    <HomeIcon className="mr-2"/>
    <span >Home</span>
 
    </Link>
        
    <div className="flex flex-1">
    {
    navItems.map(navItems => (
        // <Link key={navItems.path} className="mr-2" href={navItems.path}>{navItems.text}</Link>  
        <ActiveLink key={navItems.path} {...navItems}/>
    ))
}
    </div>
    {/* <Link className="mr-2" href="/about">About</Link>  
    <Link className="mr-2" href="/pricing">Pricing</Link>  
    <Link className="mr-2" href="/contact">Contact</Link>   */}
    </nav>
  )
}
