import { Description } from "@radix-ui/react-toast"
import { ArrowRight, ExternalLink } from "lucide-react"
import Image2 from "../assets/img/image-2.png"



const webProjects = [
    {
        id: 1, 
        title: "Wedding website",
        description: "A website where people can pick premade wedding websites",
        image: Image2,
        tags: ["React", "TailwindCSS"], 
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2, 
        title: "Wedding website",
        description: "A website where people can pick premade wedding websites",
        image: Image2,
        tags: ["React", "TailwindCSS"], 
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3, 
        title: "Wedding website",
        description: "A website where people can pick premade wedding websites",
        image: Image2,
        tags: ["React", "TailwindCSS"], 
        demoUrl: "#",
        githubUrl: "#"
    },
]

export const WebProjectsSection =()=>{
    return (
        <section id="webprojects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Web <span className="text-primary"> Projects</span>
                   
                </h2>

                 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ut officiis fugiat facilis, quo totam voluptas illo cupiditate molestiae aliquid laboriosam omnis voluptate magnam fugit consequuntur facere et. Molestias, officiis?</p>
            </div>
        </section>
    )
}