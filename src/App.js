import "./App.css";

import Home from "./components/pages/Home";
import Qualification from "./components/pages/Qualification";
import Skills from "./components/pages/Skills";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="main">
        <Home />
        <Skills />
        <Qualification />
      </main>
    </>
  );
}

export default App;
