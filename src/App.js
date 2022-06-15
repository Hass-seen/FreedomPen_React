import Header from './components/Header'
import Left from './components/Left';
import Center from './components/Center';
import Right from './components/Right';
import Poster from './components/Poster';
import { useState } from 'react';

function App() {
const [showposter,setshowposter]= useState(false);
const [posts , setposts]= useState("")



//adds a new post 
const addpost=(post) =>{
   const id= Math.floor(Math.random()*100000)+1;
   const newpost={id,...post};
   setposts([...posts,newpost]);
}

const pop=() =>{
  setshowposter(!showposter)
  console.log("click")
}

  return (
    <>
      {showposter && <Poster onadd={addpost}/>}
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
