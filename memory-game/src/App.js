import './App.css';
import MemoryCard from './components/MemoryCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> Memory Game</h1>
       <h2> Match Cards To Win</h2>
       
        
      </header>
      <div className='flex'>
        <div className='Cards'>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
      </div>
    </div>
  );
}

export default App;
