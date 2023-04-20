import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headerbar from './components/Headerbar'
import Hero from './components/Hero';
import "@fontsource/poppins";
import Lessons from './components/Lessons';
import ProductParent from './components/ProductParent';

function App() {

  return (
    <div className="App">
      <Headerbar />
      <Hero />
      <Lessons />

      <ProductParent />
    </div>
  );
}

export default App;
