import Features from './components/features';
import Hero from './components/hero';
import Highlights from './components/highlights';
import HowItWorks from './components/howitworks';
import Model from './components/model';
import Navbar from './components/navbar';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  );
};

export default App;
