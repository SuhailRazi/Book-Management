import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import AddBooks from './pages/add';
import UpdateBooks from './pages/update';
import DeleteBooks from './pages/delete';
import HomePage from './pages/home';
import "./style.css" ;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element = {<HomePage/>}/>
          <Route path='/books' element={<Books/>} />
          <Route path='/add' element={<AddBooks/>} />
          <Route path='/update/:id' element= {<UpdateBooks/>}/>
          <Route path='/delete' element={<DeleteBooks/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
