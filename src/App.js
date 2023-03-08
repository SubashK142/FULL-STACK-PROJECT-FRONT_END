



import './App.css';
import ColorSchemesExample from './Components/navigationber';
import Student from './Components/userscomponent';
// import UserComponent from './Components/userscomponent';
import Details from './Components/details';
import { Route, Routes } from 'react-router-dom';
import FindRestuarant from './Components/findrestuarant';
import NewCom from './Components/newcom';
import Update from './Components/update';
import NameDel from './Components/Delete';
import FoodReviewDelete from './Components/Delete';
function App() {
  return (
    <div>
    {/* <ColorSchemesExample/>
    
    <Routes>
      <Route path="/findrestuarant" element={<FindRestuarant/>}/>
      <Route path="usercomponent" element={<Student/>}/>
      <Route path="newcom" element={<NewCom/>}/>
      <Route path="details" element={<Details/>}/>
    </Routes> */}
    <FoodReviewDelete/>
    
   
    </div>
  );
}

export default App;