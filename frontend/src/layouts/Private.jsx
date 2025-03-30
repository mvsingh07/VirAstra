import {Component} from 'react';

import Navbar2 from '../components/Navbar2';
import { Outlet } from 'react-router-dom';

class Public extends Component {

    constructor(){
        super();

        this.state={
            parentClass:"sb-nav-fixed"
        }
    }

    
    render() {
        return (
            <div className={this.state.parentClass}>  
                    
                   
                    <Navbar2/>
                    <Outlet/>
     


            </div>
        );
    }
}

export default Public;

