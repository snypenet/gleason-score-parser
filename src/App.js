import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gleason Score Parser</h1>
      </header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
