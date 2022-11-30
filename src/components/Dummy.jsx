import React,{Component} from "react";
class Dummy extends Component{
    componentWillUnmount(){
     alert("component removed");
    }
    render(){
        return(
            <div>
                <h2>Dummy component for componentWillUnmount</h2>
            </div>
        )
    }
}
export default Dummy;