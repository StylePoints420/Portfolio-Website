import FooterComponent from "./components/FooterComponent";
import { Hero } from "./components/Hero";
import ProjectComponent from "./components/ProjectComponent";
import SkillSection from "./components/SkillSection";
import TimelineComponent from "./components/TimelineComponent";

function App() {
  return (
    <div className="grid gap-20">
      <Hero />
      <div id="education">
        <TimelineComponent />
      </div>
      <div id="skills">
        <SkillSection />
      </div>
      <div id="projects">
        <ProjectComponent />
      </div>
      <div id="footer">
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
