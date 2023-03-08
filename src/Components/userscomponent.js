import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Student() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[foodName,setFoodName]=useState('')
    const[restuarantName,setRestuarantName]=useState('')
    const[location,setLocation]=useState('')
    const[rating,setRating]=useState('')
    const[Details,setDetails]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const RestuarantDetails={restuarantName,foodName,rating,location}
    console.log(RestuarantDetails)
    fetch("http://localhost:8083/api/restuarantdetails",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(RestuarantDetails)

  }).then(()=>{
    console.log("New Restuarant added")
    fun();
  })
  
}
function fun() {  
    alert ("Thanks For Adding Your Favorate Restuarant");  
 }  

useEffect(()=>{
  fetch("http://localhost:8083/api/restuarant")
  .then(res=>res.json())
  .then((result)=>{
    setDetails(result);
  }
)
},[])

  return (

    <Container className="cont">
        <Paper className='pap' elevation={5} style={paperStyle}>
            <h1 className='one'>ADD YOUR FAVOURATE RESTUARANT</h1>
            <br></br>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Restuarant Name" variant="outlined" fullWidth 
      value={restuarantName}
      onChange={(e)=>setRestuarantName(e.target.value)}
      />
      <TextField id="outlined-basic" label="FoodName" variant="outlined" fullWidth
      value={foodName}
      onChange={(e)=>setFoodName(e.target.value)}
      />
      
      <TextField id="outlined-basic" label="Location" variant="outlined" fullWidth
      value={location}
      onChange={(e)=>setLocation(e.target.value)}
      />
      <TextField id="outlined-basic" label="Rating" variant="outlined" fullWidth
      value={rating}
      onChange={(e)=>setRating(e.target.value)}
      />
      <Button className="newthree" variant="contained" color="secondary" type="submit" onClick={handleClick} >
  Submit
</Button>
    </form>
   
    </Paper>
    {/* <h1 className='newone'>Details</h1>

    <Paper elevation={3} style={paperStyle}>

      {Details.map(RestuarantDetails=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={RestuarantDetails.restuarantname}>
         RestuarantName:{RestuarantDetails.restuarantName}<br/>
         FoodName:{RestuarantDetails.foodName}<br/>
         Location:{RestuarantDetails.location}<br/>
         Rating:{RestuarantDetails.rating}
        </Paper>
      ))
}


    </Paper> */}



    </Container>
  );
}