import React, {useState} from 'react'
import './messeagesender.css'
import {Avatar} from '@material-ui/core';
import {Videocam, Photo, InsertEmoticon } from '@material-ui/icons';
import { useStateValue } from './Stateprovider';
import firebase from 'firebase';
import db from './firebase';

function MessageSender() {

    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImgUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if ((input || imageUrl) != '') {
            console.log('submitted')
            db.collection('posts').add({
                    message: input,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    profilePic: user.photoURL,
                    username: user.displayName,
                    image: imageUrl

                }
            )

            setInput('')
            setImgUrl('')
        }

        else {
            
        }

        

    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder={`what's on your mind ?`}
                    value={input}
                    onChange={(e) => setInput(e.currentTarget.value)}
                    />
                    <input type="text" placeholder="image URL"
                    value={imageUrl}
                    onChange={(e) => setImgUrl(e.currentTarget.value)}
                    />

                <button style={{display: 'none'}} onClick={handleSubmit} type="submit">Hidden submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                <Videocam style={{color: 'red'}} />
                <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                <Photo style={{color: 'green'}} />
                <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                <InsertEmoticon style={{color: 'yellow'}} />
                <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
