import React, { useState } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import List from './List';
import Carde from './Card';
const Ownerform = (props) => {
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
    const [nodes, setNodes] = React.useState(null);
    const getdata = async() =>{
        try {
            
            const options ={
                method: 'GET',
                url: 'http://localhost:8080/api/findf',
                params: {Seller: props.name},
             };
             axios.request(options).then((response) => {
                console.log(response.data.orders)
                
               setNodes(response.data.orders)
    
            }).catch((error) => {
                console.error(error)
            })
             
          } catch (err) {
            console.log(err);
          }
        // const data = await axios.get("http://localhost:8080/api/findf");
        // setNodes(data);
    }
    React.useEffect(() => {
        console.log(nodes);
    })
    React.useEffect(() => {
        
          getdata();
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

    const submitOne = async (event)=> {
        const f1 = event.target.files[0];
        const data = new FormData()
        data.append("file",f1)
        data.append("upload_preset","notepad")
        data.append("cloud_name","dcyfkgtgv")
        const res= await fetch("https://api.cloudinary.com/v1_1/dcyfkgtgv/image/upload",{
            method:"post",
            body:data
        })
        const fil=await res.json();
        console.log(fil);
        setUrl(fil);
    }
    const submitTwo = async (event)=> {
        const f1 = event.target.files[0];
        const data = new FormData()
        data.append("file",f1)
        data.append("upload_preset","notepad")
        data.append("cloud_name","dcyfkgtgv")
        const res= await fetch("https://api.cloudinary.com/v1_1/dcyfkgtgv/image/upload",{
            method:"post",
            body:data
        })
        const fil=await res.json();
        console.log(fil);
        setUrl2(fil);
    }
      
    
    const submit =async (event)=> {
        event.preventDefault();
        console.log(url);
        console.log(url2);
        if((url!=="") && (url2!==""))
        {
            const newNote = {
                Seller:props.name,
                Name: note.name,
                Address: note.location,
                Phone: note.num,
                Image: url.secure_url,
                Menu: url2.secure_url
            };
  
    console.log(newNote);
    await axios.post("http://localhost:8080/api/form", newNote);
    
    setDone(false);
  }
  else{
    alert("Add image first");
  }
    }
    function logout() {
        props.logout();
    }
  return (
    <>
    
    {((nodes===null)||(nodes===undefined))?
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">IIT Kharagpur Eateries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="http://localhost:3000/customer/login">Customer Login</Nav.Link>
            <Nav.Link href="http://localhost:3000/business/login">Seller Login</Nav.Link> */}
            <button onClick={logout}>Log Out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
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
                    onChange={submitOne} />
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
                    onChange={submitTwo} />
                    </div>
                    <p id="uidnote" className="instructions">
                            Must Insert Image. in jpg format preferably.
                    </p>
                    
                </div>
                {/* <h1 onClick={submitNote}>Add</h1> */}
                    
                    <div className='Submito'>
                        <button onClick={submit}>Submit</button>
                    </div>
            </form>
        </div>
    
    </div></>:<>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">IIT Kharagpur Eateries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="http://localhost:3000/customer/login">Customer Login</Nav.Link>
            <Nav.Link href="http://localhost:3000/business/login">Seller Login</Nav.Link> */}
            <button onClick={logout}>Log Out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    Shop entry already made
    <Carde Name={nodes.Name} Address={nodes.Address} Contact={nodes.Phone}  Image={nodes.Image} Menu = {nodes.Menu} />
    {/* <Shop name={props.name} /> */}
    </>}
    </>
  )
}

export default Ownerform