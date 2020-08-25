import React,{Fragment} from 'react';
import {PDFViewer} from '@react-pdf/renderer';
import Facture from './components/facture';
import './App.css';


function App() {
  return (
    <Fragment>
            <PDFViewer width="1000" height="600" className="app" >
               <Facture/>
            </PDFViewer>
        </Fragment>
  );
}

export default App;
