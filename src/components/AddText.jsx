import React from 'react'
import {ChatContext} from '../context/ChatProvider'

const AddText = () => {

    const {addMessage, user} = React.useContext(ChatContext)
    const [message, setMessage] = React.useState('')


    const add = (e) => {
        e.preventDefault()
        if(!message.trim()){
            console.log('it comes empty');
            return
        }
        addMessage(user.uid, message, user.mail)
        setMessage('')
    }

    return (
        <form 
            onSubmit={add}
            className='fixed-bottom input-group p-3 bg-dark container'>
            <input 
                value={message}
                onChange={e => setMessage(e.target.value)}
                type="text" 
                className='form-control'
                />
            <div className='input-group-append'>
                <button className='btn btn-primary' type='submit'>Send</button>
            </div>
        </form>
    )
}

export default AddText
