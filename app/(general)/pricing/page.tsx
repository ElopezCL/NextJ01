import { Metadata } from "next";



export const metadata : Metadata = {
 title: 'Pricing',
 description: 'Description Pricing',
 keywords: ["Jugando con precios"]
};

export default function PrincingPage(){
    return(
        <>
            <span className="text-7xl">Princing Page</span>
        </>
    )
}

