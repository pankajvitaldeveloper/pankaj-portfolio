import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorGlow from "./components/ui/CursorGlow";
import FloatingBackground from "./components/ui/FloatingBackground";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import JourneyTimeline from "./components/sections/JourneyTimeline";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import TechStack from "./components/sections/TechStack";
// import GitHubStats from "./components/sections/GitHubStats";
import Achievements from "./components/sections/Achievements";
import WhyHireMe from "./components/sections/WhyHireMe";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <CursorGlow />
      <FloatingBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <JourneyTimeline />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <TechStack />
        {/* <GitHubStats /> */}
        <Achievements />
        <WhyHireMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
