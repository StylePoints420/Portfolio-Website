import { Hero } from "./components/Hero";
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
    </div>
  );
}

export default App;
