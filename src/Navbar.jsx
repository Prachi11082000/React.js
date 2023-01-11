
import { MenuItems } from './MenuItems';
import './NavbarItems.css'
import { Component } from 'react';
import{Link} from'react-router-dom';
 class  Navbar extends Component {
  state={clicked:false};
  handleclicked=()=>{
    this.setState({clicked:this.state.clicked})
  }
  render(){
  return (
    <div>
<nav className='NavbarItems'>
  <h1 className='navbar-logo'>Trippy</h1>
  <div className='menu-icons'onClick={this.handleclicked}>
    <i className={this.state.clicked?"fas fa-times":""}></i>
  </div>
  <ul className='nav-menu'>
    {MenuItems.map((item,index)=>{
      return (
         <li key={index}>
          <Link className={item.cName} to={item.url}>
 <i className={item.icon}></i>{item.title}
 </Link>
</li>
      )

    })}
   <button>Sign up</button>
  </ul>
</nav>
    </div>
  )
}
 }
export default Navbar;