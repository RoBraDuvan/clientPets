import { Routes, Route } from 'react-router-dom'
import { AllPets, CreatePet, DetailPet, UpdatePet } from './pages/index.page.js'
import { useState } from 'react'


function App() {

  const [ petEdit, setPetEdit ] = useState({});

  return (
    <Routes>
      <Route path='/'/>
      <Route path='/allpets' element={<AllPets/>}/>
      <Route path='/createpet' element={<CreatePet/>}/>
      <Route 
        path='/:_id/detailpet' 
        element={<DetailPet setPetEdit={setPetEdit}/>}/>
      <Route 
        path='/:_id/edit' 
        element={<UpdatePet petEdit={petEdit}/>}/>
    </Routes>
  )
}

export default App
