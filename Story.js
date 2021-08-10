import React from 'react'
import './story.css'
import {Avatar} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import { useStateValue } from './Stateprovider';


function Story({image, profileSrc, title}) {
    
    return (
        <div className="story" style={{backgroundImage: `url(${image})`}}>
            <Avatar src={profileSrc} className="story__avatar" />
            <h4>{title}</h4>
        </div>
    )
}

export function AddStory({image, icon, text}) {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="addStory" style={{backgroundImage: `url(${user.photoURL})`}}>
        <div className="icon-text">
            <div className="icon">
        <Add className="icon-style" />
        </div>
        <div className="text">
       <h4>{text}</h4>
       </div>
       </div>
        </div>
    )
}

export default Story;

