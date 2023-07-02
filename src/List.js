import axios from 'axios'
import React from 'react'
import Carde from './Card';
const List = () => {
    const [notes, setNotes] = React.useState(null);
    const getdata = async() =>{
        const data = await axios.get("http://localhost:8080/api/find");
        setNotes(data.data.orders);
        console.log(data.data.orders);
    }
    React.useEffect(() => {
        console.log(notes);
    })
    React.useEffect(() => {
        getdata();
    })
  return (
    <div className='LL'>
      <h2>List of Restaurants in IIT KHARAGPUR :</h2>
    
    <div className='list'>
      {(notes==null || notes==undefined)?<>No Shops Available</>:<>{notes.map((nodes)=>(<>
        <Carde Name={nodes.Name} Address={nodes.Address} Contact={nodes.Phone}  Image={nodes.Image} Menu = {nodes.Menu} />
        <br /><br />
        <hr />
      </>))}</>}
    </div>
    </div>
  )
}

export default List