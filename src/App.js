import Header from './components/Header'
import Left from './components/Left';
import Center from './components/Center';
import Right from './components/Right';
import Poster from './components/Poster';
import Signin from './components/Signin';
import pfp from './components/pfp.png'
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Editprofile from './components/Editprofile';

function App() {
const [showedit,setshowdedit] = useState(false);
const [showposter,setshowposter]= useState(false)
const [posts , setposts]= useState([])
const [postlist, setpostlist]=  useState([])
const [magnify, setmagnify] = useState(false)
const [likedposts, setlikedposts]=useState([])
const [access,setaccess]= useState(false);
const [user, setuser]=useState({})
  




const zooming =()=>{
  setmagnify(!magnify)
  console.log(magnify)
}



//adds a new post 
const addpost=(post) =>{
   const id= Math.floor(Math.random()*100000)+1;
   const likes=0
   const newpost={id,likes,email:user.email,Name:user.name,...post};
   setposts([newpost,...posts]);
   setpostlist([newpost,...posts])
   pop()
}



const trending=()=>{
  setposts(posts.sort(function(post1,post2){
   const x=post1.likes
   const y=post2.likes
    if(x<y) {return -1}
    if(x>y) {return 1}
    return 0
  })
  )
  console.log("trend")
}



const delet=(id)=>{
  setposts(posts.filter((post)=> post.id !== id))
  setpostlist(postlist.filter((post)=> post.id !== id))
}

const search=(word)=>{
  setposts(posts.filter((post)=> post.body.includes(word)))
}


const like=(id)=>{
    const x=[]
  if(likedposts.includes(id)){
    
    posts.forEach(function (post) {
      if(post.id===id){
        post.likes--
      }
      x.push(post)
  
  })
    setlikedposts(likedposts.filter((likedpost)=> likedpost !== id))
    setposts(x)
    setpostlist(posts)

  }else{

  posts.forEach(function (post) {
    if(post.id===id){
      post.likes++
    }
    x.push(post)
})
  setposts(x)
  setlikedposts([...likedposts, id])}
  setpostlist(posts)
}

const edit=()=>{
  setshowdedit(!showedit)
}


const pop=() =>{
  setshowposter(!showposter)

}

const refresh=()=>{
  setposts(postlist)
  console.log("refed")
}




  return (
    <>
      {showposter && <Poster onadd={addpost} pop={pop}/>}
      {showedit && <Editprofile user={user} setuser={setuser} edit={edit}/>}
      <Header/>
      {!access &&<Signin setuser={setuser} setaccess={setaccess} />}
     {access && <div className="container" >
        <Left user={user} />
        <Center   zooming={zooming} magnify={magnify} refre={refresh} like={like} delet={delet} pop={pop} user={user}  posts={posts}/>
        <Right trending={trending} search={search} edit={edit}/>
      </div> }
      </>
  );
}

export default App;
