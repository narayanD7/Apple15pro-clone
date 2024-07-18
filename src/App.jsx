import Hero from "./components/Hero";

import Highlites from "./components/Highlites";
import Navbar from "./components/Navigantion";


const App = () => {
  return (
    <>
      <main className="bg-black">
        <Navbar/>
        <Hero/>
        <Highlites/>
      
      </main>
    </>
  );
};

export default App;
