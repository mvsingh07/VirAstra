import {Component} from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

class Main extends Component {

    constructor(){
        super();

        this.state={
            parentClass:"sb-nav-fixed"
        }
    }

    // onclickHandler=()=>{

    //     if(this.state.parentClass==="sb-nav-fixed"){
    //         this.setState({parentClass:"sb-nav-fixed sb-sidenav-toggled"});
    //     }

    //     else{
    //         this.setState({parentClass:"sb-nav-fixed"});
    //     }

    // }
    render() {
        return (
            <div className={this.state.parentClass}>
           
                {/* <Navbar clickRef={this.onclickHandler}/> */}
                <div id="layoutSidenav">
                   
                  
                    <Outlet/>
                </div> 

            </div>
        );
    }
}

export default Main;

