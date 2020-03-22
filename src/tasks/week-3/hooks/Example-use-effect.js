import React, { useState, useEffect } from 'react';
import './style.css';
import { usePosts } from './Custom-hook';

export default function PostList () {
    const [ posts, isFetching ] = usePosts()

    const [ currentUserId, setCurrentUserId ] = useState(null);
    const [ displayAuthor, setDisplayAuthor ] = useState(true);

    return (
        <div className='h-posts'>
            { isFetching && <div>Loading...</div> }
            {posts.map(post => <div onClick={() => setCurrentUserId(post.userId)}>{post.title}</div>)}
            { displayAuthor && <AuthorInfo userId={currentUserId} /> }
            <button onClick={() => setDisplayAuthor(false) }>Remove Author</button>
        </div>
    )
}

function AuthorInfo(props) {
    const [ authorInfo, setAuthorInfo ] = useState(null);
    const [ isFetching, setFetching ] = useState(false);
    const { userId } = props;

    useEffect(() => {
        if (userId) {
            setFetching(true)
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => {
                setAuthorInfo(data);
                setFetching(false)
            })
        }
        return () => {
            console.log('componentWillUnmount')
         }
      }, [userId]);


    return authorInfo && !isFetching ? (
        <div className='author'>
            {authorInfo.email} {authorInfo.username}
            <br/>
            {authorInfo.phone}
        </div>
    ) : <div>No data</div>
}


