import Navbar from './components/Navbar/Navbar'
import Form from './components/Form/Form'
import InvoiceList from './components/InvoiceList/InvoiceList'
import MainForm from './modules/Form/MainForm.module.css'
import { useState } from 'react'

function App() {
  return (
    <>
      <Navbar/>
      <Form 
        styles={MainForm}
        title={'Add a New Invoice'}
        inputs={[
            {key:0, name:'Name', active:''},
            {key:1, name:'Description', active:''}
        ]}
      />
      <InvoiceList/>
    </>
  );
}

export default App;
