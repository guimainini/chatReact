import React from 'react'
import {db, auth, provider} from '../firebase'

export const ChatContext = React.createContext()

const ChatProvider = (props) => {
    
    const dataUser = {uid:null, email:null, state: null}
    const [user,setUser] = React.useState(dataUser)
    const [message, setMessage] = React.useState([])

    React.useEffect(() => {
        detectUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const detectUser = () => {
        auth.onAuthStateChanged(user => {
            if(user){
                setUser({uid:user.uid, email:user.email, state:true})
                uploadMessage()
            }else{
                setUser({uid:null, email:null, state: false})
            }
        })
            
    }
    
    const userLogin = async() => {
        try {
            await auth.signInWithPopup(provider)
        } catch (error) {
            console.log(error)
        }
    }
    
    const loginOut = () => {
        auth.signOut();
    }

    const uploadMessage = () => {
        db.collection('chat').orderBy('fecha')
            .onSnapshot(query => {
                const arrayMessage = query.docs.map(item => item.data())
                setMessage(arrayMessage)
            })
    }

    const addMessage = async (uidChat, textoInput, userEmail) => {
        try {
            await db.collection('chat').add({
                fecha: Date.now(),
                texto: textoInput,
                uid: uidChat,
                email: userEmail
            })
        } catch (error) {
        console.log(error)
        }
    }



    return (
        <ChatContext.Provider value={{user, userLogin, loginOut, message, addMessage}}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider
