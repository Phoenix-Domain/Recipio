import './App.css';
import './icons/fontawesome';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Features from './sections/Features';
import RecipeInspiration from './sections/RecipeInspiration';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <RecipeInspiration />
    </>
  );
}

export default App;
