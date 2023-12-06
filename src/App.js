import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Content/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the width when the window is resized
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {
        width > 800
          ?
          <div>
            <Sidebar />
            <Navbar />
            <Home />
          </div>
          :
          <div data-gs
            data-productidentifier="10"
            data-apikey="GS_f5d91c51-48eb-4d3c-8654-0a61a03e4a58"
            data-layout="small"
            data-lang="en">
          </div>
      }
    </>
  );
}

export default App;
