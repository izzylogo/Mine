import './App.css';
import Faq from './components/faq/Faq';
import Forcast from './components/forcast/Forcast';
import Hero from './components/hero/Hero';
import Invite from './components/invite/Invite';
import Term from './components/terms/Term';
import Tier from './components/tier/Tier';

function App() {
  return (
    <div className="App">
      <div className='App-contain'>
        <Hero/>
        <Invite/>
        <Tier/>
        <Forcast/>
        <Faq/>
        <Term/>
      </div>
    </div>
  );
}

export default App;
