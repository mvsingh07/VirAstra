import {Component} from 'react';

import Navbar from '../components/Navbar';
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
                    
                   
                    <Navbar/>
                    <Outlet/>
     


            </div>
        );
    }
}

export default Public;

