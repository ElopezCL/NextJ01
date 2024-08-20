import { Metadata } from "next"

export const metadata: Metadata = {
    title: "SEO TITLE",
    description: "SEO DESCRIPTION",
    keywords: ['About Page', "Emilio", "Informacion"]
}


export default function AboutPage() {
    return (
        <>
                <span className="text-7xl">About Page</span>

        </>
    )
}