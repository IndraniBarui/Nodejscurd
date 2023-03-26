import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


// import AddCoins from './components/AddCoins';
import AddUsers from './components/AddUsers';
import ViewUsers from './components/ViewUsers';
import EditUsers from './components/EditUsers';
function App() {
  return (
   <>
   <BrowserRouter>
<Menu/>

<Routes>
  <Route  path='/' element={<ViewUsers/>}/>
  <Route  path='/addUsers' element={<AddUsers/>}/>z
  <Route  path='/editUsers/:id' element={<EditUsers/>}/>
</Routes>
</BrowserRouter>

   </>
  );
}

export default App;
