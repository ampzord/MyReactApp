import './App.css';
import MyComponent from './Components/MyComponent';
import OtherComponent from './Components/OtherComponent';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState<'MyComponent' | 'OtherComponent' | null>('MyComponent');

  const handleNavigate = (page: 'MyComponent' | 'OtherComponent') => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
          { currentPage === 'OtherComponent' && (
            <li onClick={() => handleNavigate('MyComponent')}>MyComponent</li>
          )}
          { currentPage === 'MyComponent' && (
            <li onClick={() => handleNavigate('OtherComponent')}>OtherComponent</li>
          )}
          </ul>
        </nav>

        {currentPage === 'MyComponent' && <MyComponent />}
        {currentPage === 'OtherComponent' && <OtherComponent />}
      </header>
    </div>
  );
}

export default App;