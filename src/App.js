import Header from './components/Header'
import Left from './components/Left';
import Center from './components/Center';
import Right from './components/Right';
import Poster from './components/Poster';
import { useState } from 'react';

function App() {
const [showposter,setshowposter]= useState(false);
const [posts , setposts]= useState([])
const [postlist, setpostlist]=  useState([])



//adds a new post 
const addpost=(post) =>{
   const id= Math.floor(Math.random()*100000)+1;
   const likes=0
   const newpost={id,likes,...post};
   setposts([newpost,...posts]);
   setpostlist([newpost,...posts])
   pop()
}

const trending=()=>{
    
}

const pop=() =>{
  setshowposter(!showposter)
  console.log("click")
}

  return (
    <>
      {showposter && <Poster onadd={addpost} pop={pop}/>}
      <Header/>
      <div className="container" >
        <Left />
        <Center pop={pop} posts={posts}/>
        <Right/>
      </div>
    </>
  );
}

export default App;
