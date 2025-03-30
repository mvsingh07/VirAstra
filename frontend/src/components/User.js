import { Component } from "react";

class User extends Component{

    render(){
        return (
            <table >
                
             <tbody>
                    {
                        this.props.data.map((user, index)=>{
                            return (
                                <tr>

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