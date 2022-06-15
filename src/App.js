import Header from './components/Header'
import Left from './components/Left';
import Center from './components/Center';
import Right from './components/Right';
import { useState } from 'react';

function App() {
  return (
    <>
      <Header/>
      <div className="container" >
        <Left />
        <Center/>
        <Right/>
      </div>
    </>
  );
}

export default App;
