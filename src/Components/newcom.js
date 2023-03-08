import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import Update from './update';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function NewCom() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[foodName,setFoodName]=useState('')
    const[restuarantName,setRestuarantName]=useState('')
    const[location,setLocation]=useState('')
    const[rating,setRating]=useState('')
    const[Details,setDetails]=useState([])
     const classes = useStyles();

useEffect(()=>{
  fetch("http://localhost:8083/api/restuarant")
  .then(res=>res.json())
  .then((result)=>{
    setDetails(result);
  }
)
},[])
  return (
      <div>
      <Container className="backimg">
        <h1 className='newone'>DETAILS</h1>
        <table className='table'>
        <tr className='name'>
          <th>RESTUARANTNAME</th>
          <th>FOODNAME</th>
          <th>LOCATION</th>
          <th>RATING</th>
        </tr>
        {Details.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.restuarantName}</td>
              <td>{val.foodName}</td>
              <td>{val.location}</td>
              <td>{val.rating}</td>
            </tr>
          )
        })}
      </table>
<Update></Update>
    </Container>
    
    </div>
  );
}