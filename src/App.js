import "./App.css";
import Boo from "./Pages/Boo";
import Loading from "./Components/Loading";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return <> {isLoading ? <Loading /> : <Boo />} </>;
}

export default App;
