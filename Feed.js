import React, { useEffect, useState } from 'react'
import './feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import db from './firebase'

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data() })))
        })
    }, []);

    return (
        <div className="feed">
            <StoryReel/>
        {/* messeageSender */}
        <MessageSender/>

        {posts.map((post) => (
            <Post
            key={post.id}
            username={post.data.username}
            message={post.data.message}
            profilePic={post.data.profilePic}
            image={post.data.image}
            timestamp={post.data.timestamp}
            />
        ))}

    </div>
    )
}


export default Feed
