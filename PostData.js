import React,{useState, useEffect}from 'react'
import axios from '../axios'

function PostData() {
  const [store, setStore] = useState({})

  const [collect, setCollect] = useState([])

 const postForm = async ()=>{
   const result = axios.post('/', store )
   console.log(result)
 }


 const getData = async()=>{
   const res = await axios.get('/')
   if(res.data){
     return setCollect(res.data)
   }
 }


 useEffect (()=>{
   getData()
 }, [])
 



    const handle = (e)=>{
      setStore({...store,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <center>
      <form onSubmit = {postForm}>
        <input onChange={handle} name="name" type="text" placeholder="name"/>
        <input onChange={handle} name="email" type="text" placeholder="email"/>
        <input onChange={handle} name="comment" type="text"
        placeholder="comment"/>
        <button onClick={()=>{
        console.log(store)
      }}>Submit</button>
      </form>
      
      </center>
     {
       collect.map((post)=>(
        <center>
        <div key = {post.id} style = {{marginTop : '40px'}}>
          <div>
           {post.name}
          </div>
          <div>
          {post.email}
          </div>
          <div>
            {post.comment}
          </div>
 
        </div>
        </center>
       ))
     }
    </div>
  )
}

export default PostData
