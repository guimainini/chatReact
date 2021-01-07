import React from 'react'
import {ChatContext} from '../context/ChatProvider'

const Navbar = () => {

    const {user, userLogin, loginOut} = React.useContext(ChatContext)


    return (
        <nav className="navbar navbar-dark bg-dark container">
            <span className="navbar-brand">Chat</span>
            <div>
                {
                    user.state ? (
                        <button 
                        onClick={loginOut}
                        className="btn btn-outline-danger my-2">Sign off</button>
                    
                        ) : (
                        <button 
                        onClick={userLogin}
                        className="btn btn-outline-success my-2">Sign in</button>
                    )
                }
               
                

            </div>
            
        </nav>
    )
}

export default Navbar
