
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Pages/Navbar';
import Search from './Pages/Search';
import List from './Pages/List';
import Booking from './Pages/Booking';

function App() {
  return (
   <>

<Router>
        
        <Navbar />
        <Routes>

          <Route path='/' element={<Search />}></Route>
          <Route path='/booking' element={<Booking />}></Route>
          <Route path='/list' element={<List/>}></Route>
          

        </Routes>
        
      </Router>
 
 
   </>
   
    
  );
}

export default App;
