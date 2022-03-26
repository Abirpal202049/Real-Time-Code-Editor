import './App.css';
import Home from './Pages/Home'
import Editorpage from './Pages/Editorpage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/editor/:roomId" element={<Editorpage/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
