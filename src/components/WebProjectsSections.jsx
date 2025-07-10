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

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {webProjects.map((webProjects, key) =>(
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={webProjects.image} alt={webProjects.title} 
                                className="w-full h-full object-cover transition-transform duration-500 gorup-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {webProjects.tags.map((tag)=>(
                                        <span className="px-2 py-1 text-xs font-medium border ronded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                                <h3 className="text-xl font-semibold mb-1">
                                    {webProjects.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {webProjects.description}
                                </p>

                                <div className="flex justify-center items-center">
                                    <div className="flex items-center">
                                        {/* <a href={webProjects.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a> 
                                        
                                        <a href={webProjects.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        */}

                                        <a
                                            href="#contact"
                                            className="cosmic-button">
                                                View Project
                                        </a>  

                                        
                                    </div>
                                </div>
                            </div> 
                        </div>
                    ))}
                 </div>
            </div>
            <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/berlinernesse">Check My GitHub <ArrowRight size={16} />
                    </a>
            </div>
        </section>
    )
}