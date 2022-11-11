import "./App.css";

import Home from "./components/pages/Home";

import Skills from "./components/pages/Skills";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="main">
        <Home />
        <Skills />
      </main>
    </>
  );
}

export default App;
