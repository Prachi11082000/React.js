import React, {Component} from "react";
class Show extends Component{
    constructor(){
        super();
        this.state={
            showme:true
        }
    }
     opration=()=>{
        this.setstate(
            {
                showme:this.state.showme
            }
        )
    }
    render(){
        return(
            <div>
                <h1>hide and show react js</h1>
                {
                    this.state.showme?
                    <div>
                        please hide me 
                        </div>
                        :null
                }
                <button onClick={this.opration}>click here</button>
            </div>

        )
    }
}
export default Show