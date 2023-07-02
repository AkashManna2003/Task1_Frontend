import React, { useState } from 'react'

const Ownerform = () => {
    const [File, setFile]=useState(null);
    const [url,setUrl]=useState("");
    const [File2, setFile2]=useState(null);
    const [url2,setUrl2]=useState("");
    const [done,setDone]=useState(false);
    const [note, setNote] = useState({
        name: "",
        location: "",
        num: 0
    })
    function handleChange(event) {
        const { name, value } = event.target;
    
        setNote((prevNote) => {
          return {
            ...prevNote,
            [name]: value
          };
        });
      }
      
    const submitNote =async ()=> {
    
        const data = new FormData()
        data.append("file",File)
        data.append("upload_preset","notepad")
        data.append("cloud_name","dcyfkgtgv")
        const res= await fetch("https://api.cloudinary.com/v1_1/dcyfkgtgv/image/upload",{
            method:"post",
            body:data
        })
        const fil=await res.json();
        console.log(fil);
        setUrl(fil);

        const data2 = new FormData()
        data.append("file",File2)
        data.append("upload_preset","notepad")
        data.append("cloud_name","dcyfkgtgv")
        const res2= await fetch("https://api.cloudinary.com/v1_1/dcyfkgtgv/image/upload",{
            method:"post",
            body:data2
        })
        const fil2=await res.json();
        console.log(fil2);
        setUrl(fil2);
        setDone(true);
        //event.preventDefault();
    }

    const submit =async (event)=> {
        event.preventDefault();
        if(done===true)
        {
    const newNote = {
      Name: note.name,
      Address: note.location,
      Phone: note.num,
      Image: url.secure_url,
      Menu: url2.secure_url
    };
  
    
    console.log(newNote);
    
    
    setDone(false);
  }
  else{
    alert("Add image first");
  }
    }

  return (
    <div className='Formo'>
        <div className='Headert'>
            <h1>Enter the following details</h1>
        </div>
        <div className='formo'>
            <form>
                <label >Restaurant Name</label>
                <input type="text" id="name" name='name' onChange={handleChange}></input>

                <label >Restaurant Loaction</label>
                <input type="text" id="location" name='location' onChange={handleChange}></input>

                <label >Restaurant Contact Number</label>
                <input type="number" id="num" name='num' onChange={handleChange}></input>

                <div className="file-field input-field">
                    <div className="btn #64b5f6 blue darken-1">
                    <span>Upload Shop </span>
                    <input 
                    type="file" 
                    required
                    onChange={(e)=>setFile(e.target.files[0])} />
                    </div>
                    <p id="uidnote" className="instructions">
                            Must Insert Image. in jpg format preferably.
                    </p>
                </div>
                <div className="file-field input-field">
                    <div className="btn #64b5f6 blue darken-1">
                    <span>Upload Menu Image</span>
                    <input 
                    type="file" 
                    required
                    onChange={(e)=>setFile2(e.target.files[0])} />
                    </div>
                    <p id="uidnote" className="instructions">
                            Must Insert Image. in jpg format preferably.
                    </p>
                    
                </div>
                <h1 onClick={submitNote}>Add</h1>
                    
                    <div className='Submito'>
                        <button onClick={submit}>Submit</button>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default Ownerform