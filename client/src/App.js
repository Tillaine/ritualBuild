import { useState } from 'react'
import GlobalThemeOverride from './theme/GlobalThemeOverride';
import Landing from './features/Landing/Landing.js';
import RitualSearch from './features/RitualSearch/RitualSearch.js';
import './App.css';

function App() {
  const [page, setPage] = useState('landing');

  const handlePageUpdate = (page) => setPage(page)

  return (
    <div className="App">
      <GlobalThemeOverride>
      <header className="App-header">
        {page === 'landing' && <Landing handlePageUpdate={handlePageUpdate}/>}
        {page === 'search' && <RitualSearch/>}
      </header>
      </GlobalThemeOverride>
    </div>
  );
}

export default App;
