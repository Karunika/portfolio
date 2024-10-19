import { useEffect } from 'react'
import Router from './router'
import { BlogsContextProvider } from './context/blogs'

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <BlogsContextProvider>
      <Router />
    </BlogsContextProvider>
  );
}

export default App;
