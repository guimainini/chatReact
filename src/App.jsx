import React from 'react'
import Navbar from './components/Navbar'
import { ChatContext } from './context/ChatProvider'
import Chat from './components/Chat'
const App = () => {

    const {user} = React.useContext(ChatContext)

    return user !== null ?(
        <div>
            <Navbar />
            {
                user.state ? (
                    <Chat />
                ) : (
                    <div className='lead text-center mt-5'>Log In !!!!</div>
                )
            }
        </div>
    ) : (
        <div>Cargando...</div>
    )
}

export default App
