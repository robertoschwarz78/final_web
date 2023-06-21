
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../Home/Home.js';
import Admin from '../Admin/Admin.js';
import Edit from '../Admin/Edit.js';
import Delete from '../Admin/Delete.js';

// import Contact from '../components/Contact/Contact.js';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                {/* <Route path='/contact' element={<Contact/>}/> */}
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/edit' element={<Edit/>}/>
                <Route path='/del' element={<Delete/>}/>
            </Routes>
        </BrowserRouter>
    )
}
