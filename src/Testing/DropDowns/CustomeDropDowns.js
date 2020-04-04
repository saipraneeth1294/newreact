import React, { useState,useReducer, useEffect } from 'react';

function CustomeDropDowns(props) {

    let[drpVal,setDrpVal]=useState([]);
    let dropDownChange=(e)=>{
        let k=e.target.value;
        let name=e.target.name;
       // let val=[...drpVal];
        //val[e.target.className]=e.target.value;
        // setDrpVal([...drpVal,
        //     [e.target.className]=e.target.value
        // ]);
        setDrpVal(prev=>({...prev,[name]:k}));
        //props.valueHandle();
        
    };
   useEffect(()=>{
    if(drpVal&&drpVal.length!=0){
        props.valueHandle(drpVal);
        //console.log(drpVal);
    }
   },[drpVal])
    return (
        <div>
           
            <select className='Count' name={'Count'+props.value} val={1} onChange={dropDownChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>

            <select className='Name' name={'Name'+props.value} val={2} onChange={dropDownChange}>
                <option>Test1</option>
                <option>Test2</option>
                <option>Test3</option>
            </select>

            <select className='Display' name={'Display'+props.value} val={3} onChange={dropDownChange}>
                <option>Test11</option>
                <option>Test22</option>
                <option>Test33</option>
            </select>
        </div>
    );
    
}

export default CustomeDropDowns;