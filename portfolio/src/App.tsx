import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <main className="min-h-screen bg-bg selection:bg-accent/30 selection:text-white">
            <Navbar />
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
