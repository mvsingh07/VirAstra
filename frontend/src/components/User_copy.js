import { Component } from "react";

class User extends Component{

    constructor(){
        super();
    }
    render(){
        return (
            <table >
                
             <tbody>
                    {
                        this.props.data.map((user, index)=>{
                            return (
                                <tr key={index}>

                               <pre>
                                    <td> Hii {user.name} you just have made a life changing decision, Congratulation  </td>  </pre> 
                                    <td>
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default User;