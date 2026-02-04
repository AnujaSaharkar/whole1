import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setnotes] = useState([
   ]);

   function fetchnotes(){
      axios.get("https://whole2.onrender.com/api/notes")
      .then(res => {
         // DEBUG
        setnotes(res.data.notes);
      })
   }

   function handlenote(dets){

    dets.preventDefault()
      const {title,description}=dets.target.elements

      console.log(title.value,description.value)

      axios.post('https://whole2.onrender.com/api/notes',{title:title.value,description:description.value})
      .then((res)=>{
        console.log(res.data)
         fetchnotes()
      })

     
   }


   function handleDelete(noteid){
    axios.delete('https://whole2.onrender.com/api/notes/'+noteid)
    .then((res=>{
      console.log(res.data)
      fetchnotes()
    }))
    
   }

  useEffect(() => {
    fetchnotes()
  }, []);

  return (

   <div className="main">

    <form onSubmit={handlenote}>
      <input name="title" type="text" placeholder="emter title"/>
      <input name="description" type="text" placeholder="enter description" />
      <button> Create Note</button>
    </form>

     <div className="notes">
      {notes.map(note => {
       return <div className="note" key={note._id}>
          <h2>{note.title}</h2>
          <p>{note.description}</p>
          <button onClick={()=>handleDelete(note._id)}>Delete</button>
        </div>
})}
    </div>
   </div>

   
  );
};

export default App;
