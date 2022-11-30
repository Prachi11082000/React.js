import React,{Component} from "react";
import Dummy from "./Dummy";
class Lifecycle extends Component{
    constructor(){
        super();
        this.state={
            count:0,
            count:0,
            show:true
        }
    }
   // componentDidMount(){
      //  for(let index=0;index<10;index++)
      //  {
           // console.log(index)
      //  }
  //  }
    componentDidUpdate(prevProps,prevState){
        console.log(prevState);
        if(prevState.count==3)
        {
            this.setState(
                {
                    count:10
                }
            )
        }
    }
    render(){
        return(
            <div>
                <center>
                <h1 className={this.state.count ==3? "bg-danger": "bg-secondary"}>{this.state.count}</h1>
                {this.state.show? <Dummy/>: <h2>component removed</h2>}
                <button onClick={()=>this.setState({show:!this.state.show})}>remove componenet</button><hr></hr>
                <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
                <h1>hello this is lifecycle method implementation</h1>
                </center>
            </div>
        )
    
    }
}
export default Lifecycle;