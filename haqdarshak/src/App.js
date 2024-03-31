import logo from './logo.svg';
import './App.css';
import AppRouter from './Router/AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    
    <div> 
      {/* <Flyerone/> */}
      <BrowserRouter>
      <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
