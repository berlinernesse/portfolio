import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { WebProjectsSection } from "../components/WebProjectsSections"
import { UIProjectSection } from "../components/UIProjectSection"
import { ContactSection } from "../components/ContactSection"


export const Home =()=> {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme toggle*/}
        <ThemeToggle />

        {/*background effects*/}
        <StarBackground />

        {/*navbar*/}
        <NavBar />


        {/*main content*/}

        <main>
            <HeroSection />
            <AboutSection />
            <WebProjectsSection />
            <UIProjectSection />
            <ContactSection />
    

        </main>

        {/*footer*/}
    </div>
}