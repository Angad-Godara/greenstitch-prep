import './App.css';
import Home from './components/Content/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
