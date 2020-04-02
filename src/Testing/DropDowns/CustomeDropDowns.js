import React, { useState,useReducer } from 'react';

function CustomeDropDowns(props) {
    let[drpVal,setDrpVal]=useState([]);
    let dropDownChange=(e)=>{
        let k=e.target.value;
        let name=e.target.className;
       // let val=[...drpVal];
        //val[e.target.className]=e.target.value;
        // setDrpVal([...drpVal,
        //     [e.target.className]=e.target.value
        // ]);
        setDrpVal(prev=>({...prev,[name]:k}));
        //console.log(drpVal);
    };
   
    return (
        <div>
           
            <select className='Count' val={1} onChange={dropDownChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>

            <select className='Name' val={2} onChange={dropDownChange}>
                <option>Test1</option>
                <option>Test2</option>
                <option>Test3</option>
            </select>

            <select className='Display' val={3} onChange={dropDownChange}>
                <option>Test11</option>
                <option>Test22</option>
                <option>Test33</option>
            </select>
        </div>
    );
    
}

export default CustomeDropDowns;