import Home from './Components/Home';
import { useRoutes } from "react-router-dom";

function App() {

  const route = useRoutes([
    {path: '/', element: <Home />},
  ])

  return (
    <div>
      {route}
    </div>
  );
}

export default App;
