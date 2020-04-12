import React, { useState,useReducer, useEffect } from 'react';

function CustomeDropDowns(props) {

    let[drpVal,setDrpVal]=useState([]);
    let [count,setCount]=useState();
    let[name,setName]=useState('');
    let[type,setType]=useState('');
    let[error,setErrorVal]=useState(props.validateHandler);
    let dropDownChange=(e)=>{
        let k=e.target.value;
        let name=e.target.name;

        switch(name){
            case 'Count'+props.value:
                setCount(k);
                break;
            case 'Name'+props.value:
                setName(k);
                break;
            case 'Display'+props.value:
                setType(k);
                break;
            default:
                break;
        }
        
      
        setDrpVal(prev=>({...prev,[name]:k}));
        //props.valueHandle();
        
    };
   useEffect(()=>{
       //if(props.validateHandler){
          // console.log(props.validateHandler);
       //}
    if(drpVal&&drpVal.length!==0){
        props.valueHandle(drpVal);
    }
   
    // setDrpVal(prev=>({...prev,['Count'+props.value]:2}));
    // drpVal['Count'+props.value]=2

   },[count,name,type,props]);
    return (
        <div>
           
            <select className='Count' name={'Count'+props.value} value={count} onChange={dropDownChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>

            <select className='Name' name={'Name'+props.value} value={name} onChange={dropDownChange}>
                <option>Test1</option>
                <option>Test2</option>
                <option>Test3</option>
            </select>

            <select className='Display' name={'Display'+props.value} value={type} onChange={dropDownChange}>
                <option>Test11</option>
                <option>Test22</option>
                <option>Test33</option>
            </select>
        </div>
    );
    
}

export default CustomeDropDowns;