import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Rodape from './components/rodape/Rodape';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App 
    nome = {"kaua"}
    />
    <App 
    nome = {"carlos"}
    /> */}
  <Navbar 
    item0 = {"nome"}
    item1 = {"contato"}
    item2 = {"sobre mim"}
    item3 = {"lalala"}
    item4 = {"fnuanf"}
    />
  <Rodape
  titulo1 = {"Meu site"}
  item1 = {"insta"}
  item2 = {"fece"}
  item3 = {"site teste 3"}
  
  titulo2={"contato"}
  item4={"celular"}
  item5={"telefone"}
  
  />
  <Rodape
  titulo1 = {"tiktok"}
  item1 = {"item1"}
  item2 = {"item2"}
  titulo2={"titulo4"}
  item4={"item4"}

  
  />
  
  
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
