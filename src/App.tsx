import { useState } from "react";
import { HeaderPage } from "./components/HeaderPage";
import { HeroSection } from "./components/HeroSection";
import { AnimalCatalog } from "./components/AnimalCatalog";

import { ANIMALES } from "./data/animales";

import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "min-h-screen bg-[#10231e] text-[#e5f2ed]" : "min-h-screen bg-[#f8fbf9] text-[#24483d]"}>
      <HeaderPage isDark={isDark} onToggleTheme={() => setIsDark((dark) => !dark)} />
      <main>
        <HeroSection isDark={isDark} />
        <AnimalCatalog animals={ANIMALES} isDark={isDark} />
      </main>
    </div>
  );
}

export default App;
