import { Metadata } from "next";



export const metadata : Metadata = {
 title: 'Contact',
 description: 'Description Contact',
 keywords: ["Jugando con Contact"]
};


export default function Contact(){
  return(
      <>
          <span className="text-7xl">Contact Page</span>
      </>
  )
}