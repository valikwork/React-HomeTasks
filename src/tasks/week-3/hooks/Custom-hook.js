import { useState, useEffect } from 'react';


export function usePosts() {
    const [ posts, setPosts ] = useState([]);
    const [ isFetching, setFetching ] = useState(false);

    useEffect(() => {
        setFetching(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => {
              setPosts(data) 
              setFetching(false)
          })
      }, []);

      return [ posts, isFetching ];
}