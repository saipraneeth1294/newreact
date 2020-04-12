import React, { Component } from 'react';
import CustomeDropDowns from './CustomeDropDowns';


class InputField extends Component {
    constructor(props){
        super(props);
        this.state={
            inputValue:0,
            arrayVal:[],
            validate:false
        };
    }
     valueHandle=(index,input)=>{
        // console.log("value handle");
         let value=Object.assign({},this.state.arrayVal[index]);
        
        value=input;
        let values= Object.assign({},this.state.arrayVal);
        values[index]=value;
        
        this.setState({arrayVal:values},()=>{});
        
        
    };
    onButtonClick(){
        this.setState({validate:true});
        //console.log(this.state.arrayVal);
    }
    render() {
        let ListDrp=[];
        for(let i=0;i<this.state.inputValue;i++){
            ListDrp.push(
                <CustomeDropDowns key={i} value={i} validateHandler={this.state.validate}  valueHandle={this.valueHandle.bind(this,i)}/>
            );
        }
        return (
            <div>
                <div>
                <input type='Text' 
                placeholder='Enter number' value={this.state.inputValue}
                 onChange={(e)=>{this.setState({inputValue:e.target.value})}}
                />
                <button onClick={()=>this.onButtonClick()}>Get the List</button>
                </div>
                <div>
                    {
                        
                        ListDrp
                    }
                
                </div>

            </div>
        );
    }
}

export default InputField;