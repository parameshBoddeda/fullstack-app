import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/register/register';
import Chat from './components/home/chat';
import { createContext, useState } from 'react';
import AssetsList from './components/assets/assetsList';
import AssignAssets from './components/assets/assignAssets';
import DataTable from './components/dataTable/dataTable';

export const  MyContext = createContext();

function App() {
  const [data, setData] = useState({});
  const [users, setUsers] = useState([]);
  


  
  return (
    <BrowserRouter >
    <MyContext.Provider value={{data,setData}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<Chat users={users} setUsers={setUsers}/>} />
        <Route path='/assetslist' element={<AssetsList  users={users}/>} />
        <Route path='/assignassets' element={<AssignAssets users={users} />} />
        <Route path='/datatable' element={<DataTable />} />
      </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}


export default App;
