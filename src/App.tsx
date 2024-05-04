import { useEffect } from "react";
import Calculator from "./components/Calculator/Calculator";

function App() {
  // set "theme" from localStorage if esixts
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", storedTheme || "blue");
  }, []);

  return (
    <main className="flex h-dvh flex-col items-center md:h-screen md:justify-center">
      <Calculator />
    </main>
  );
}

export default App;
