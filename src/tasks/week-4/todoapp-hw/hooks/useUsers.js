import { useEffect, useState } from 'react'
import apiClient from '../api-client';

export default function useUsers() {
    const [ users, setUsers ] = useState([]);
    const [ isFetching, setFetching ] = useState(false);

    useEffect(() => {
        setFetching(true)
        apiClient.get('/users')
          .then(response => {
              setUsers(response.data) 
              setFetching(false)
          })
      }, []);

      return [ users, isFetching ];
}