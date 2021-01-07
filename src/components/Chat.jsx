import React from 'react'
import AddText from './AddText'
import {ChatContext} from '../context/ChatProvider'

const Chat = () => {

    const {message, user} = React.useContext(ChatContext)
    const refZonachat = React.useRef(null)

    React.useEffect(() => {
        refZonachat.current.scrollTop = refZonachat.current.scrollHeight
    }, [message])

    return (
        <div className='mt-3 px-2 container'
        style={{height: '75vh', overflowY: 'scroll'}}
        ref={refZonachat}
        >

            {
                message.map((item, index) => (
                    user.uid === item.uid ? (
                        <div className="d-flex justify-content-end mb-2" key={index}>
                            <span className='badge rounded-pill bg-danger'>
                                {item.email}
                            </span>
                            <span>---</span>
                            <span className='badge rounded-pill bg-primary'>
                                {item.texto}
                            </span>
                        </div>

                    ) : (
                        <div className="d-flex justify-content-start mb-2" key={index}>
                            <span className='badge rounded-pill bg-danger'>
                                {item.email} 
                            </span>
                            <span>---</span>
                            <span className='badge rounded-pill bg-secondary'>
                                {item.texto}
                            </span>
                        </div>

                    )

                ))
            }



            
            
            <AddText />
        </div>
    )
}

export default Chat
