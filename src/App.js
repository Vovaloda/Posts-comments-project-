import React, { useEffect, useState } from 'react'
import { BrowserRouter} from 'react-router-dom';
import AppRouter from './components/UI/AppRouter';
import NavBar from './components/UI/navbars/NavBar';
import { AuthContext } from './context';
import './styles/app.css'

function App() {

  const [isAuth, setIsAuth] = useState(false); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []); 

  return(
    <AuthContext.Provider 
      value={{
        isAuth, 
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        {isAuth && <NavBar />} 
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
