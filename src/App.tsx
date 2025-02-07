import { Hero } from "./components/Hero";
import SkillSection from "./components/SkillSection";
import TimelineComponent from "./components/TimelineComponent";

function App() {
  return (
    <div className="grid gap-20">
      <Hero />
      <TimelineComponent />
      <SkillSection />
    </div>
  );
}

export default App;
