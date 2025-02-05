import { Hero } from "./components/Hero";
import TimelineComponent from "./components/TimelineComponent";
import useScreenSize from "./hooks/useScreenSize";

function App() {
  const isMobile = useScreenSize();

  return (
    <>
      <Hero />
      <TimelineComponent />
    </>
  );
}

export default App;
