import React from 'react';
import './App.css';
import Header from "./components/Header";
import Products from "./components/Products";



const App: React.FC = () => {
  return (
      <>
          <Header />
          <Products />
      </>
  );
}

export default App;
