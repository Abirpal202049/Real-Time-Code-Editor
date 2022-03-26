import './App.css';
import Home from './Pages/Home'
import Editorpage from './Pages/Editorpage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/editor/:roomId" element={<Editorpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
