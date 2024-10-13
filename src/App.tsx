import { useEffect } from 'react'
import Router from './router'

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <Router />
  );
}

export default App;
