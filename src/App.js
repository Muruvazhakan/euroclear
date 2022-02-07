import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ScreenRouting from './Component/ScreenRouting/ScreenRouting';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      
   <ScreenRouting />
   
     </BrowserRouter>
    
    </div>
  );
}

export default App;