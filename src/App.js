import { GlobalStyle } from "./global";
import { RouterProvider } from 'react-router';
import { routes } from './routes/routes';

function App() {
  return (
    <div id="main-app">
    <GlobalStyle/>
    <RouterProvider router={routes}/>
    
    </div>
  );
}

export default App;
