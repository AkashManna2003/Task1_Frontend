import React from 'react'

const Shop = (props) => {
    const [nodes, setNodes] = React.useState(null);
    const getdata = async() =>{
        try {
            
            const options ={
                method: 'GET',
                url: 'http://localhost:8080/api/findf',
                params: {Seller: props.name},
             };
             axios.request(options).then((response) => {
                console.log(response.data)
                
               setNodes(response.data)
    
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
  return (

    <div>Shop</div>
  )
}

export default Shop