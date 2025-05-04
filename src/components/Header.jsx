import { Search, Moon, Sun } from 'lucide-react';

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className={`header ${darkMode ? 'header-dark' : 'header-light'}`}>
      <div className="max-w-6xl mx-auto flex flex-col flex-sm-row justify-between items-center space-y-4 space-y-sm-0">
        <div className="flex items-center">
          <h1 className={darkMode ? 'brand-dark' : 'brand-light'}>
            <span className="text-3xl">A</span>nime<span className="text-3xl">A</span>pp
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className={`relative flex items-center ${darkMode ? 'search-container-dark' : 'search-container-light'} w-64`}>
            <Search className={darkMode ? 'search-icon-dark h-5 w-5' : 'search-icon-light h-5 w-5'} />
            <input
              type="text"
              placeholder="Buscar animes..."
              className={darkMode ? 'search-input-dark' : 'search-input-light'}
            />
          </div>
          <button 
            onClick={toggleDarkMode} 
            className={darkMode ? 'theme-toggle-dark' : 'theme-toggle-light'}
            aria-label="Alternar modo escuro"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}