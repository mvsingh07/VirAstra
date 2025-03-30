import {Component} from 'react';
import {Outlet } from 'react-router-dom';

class Auth extends Component {

    constructor(){
        super();

        this.state={
            parentClass:"sb-nav-fixed"
        }
    }

    onclickHandler=()=>{

        if(this.state.parentClass==="sb-nav-fixed"){
            this.setState({parentClass:"sb-nav-fixed sb-sidenav-toggled"});
        }

        else{
            this.setState({parentClass:"sb-nav-fixed"});
        }

    }
    render() {
        return (
            <div className={this.state.parentClass}>
           
                
                <div id="layoutSidenav">
                  
                    <Outlet/>
               
                  
                </div> 

            </div>
        );
    }
}

export default Auth;

