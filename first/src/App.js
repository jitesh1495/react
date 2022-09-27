import './css/App.css';

import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Navbar />
      <Card name='Soham' ph='9543434453' />
      <Card name='Jitesh' ph='slfjajflsd' />
    </div>
  );
}

export default App;