import React, { Component } from 'react';
import CustomeDropDowns from './CustomeDropDowns';


class InputField extends Component {
    constructor(){
        super();
        this.state={
            inputValue:0,
            arrayVal:[]
        };
    }

    onButtonClick(){
        console.log(this.state.arrayVal);
    }
    render() {
        let ListDrp=[];
        for(let i=0;i<this.state.inputValue;i++){
            ListDrp.push(
                <CustomeDropDowns key={i} arrayVal={this.state.arrayVal}/>
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