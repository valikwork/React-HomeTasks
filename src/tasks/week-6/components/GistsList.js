import React, { useEffect } from 'react'
import { Container, List } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllGists, selectGist } from '../redux/actions';

export default function GistsList() {
    const gists = useSelector(state => state.gists);
    const state = useSelector(state => state)
    const { isLoading, items } = gists;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllGists())
    }, [])

    const files = items.map((item) => {
        return {
            filename: Object.values(item.files)[0]['filename'],
            language: Object.values(item.files)[0]['language'],
            raw_url: Object.values(item.files)[0]['raw_url'],
            ownerLogin: item.owner.login,
            id: item.id
        } 
    });
    
    return (
        <Container>
            {isLoading && <h1>Loading...</h1>}
            <List>
                {files.map((file) => {
                    return <List.Item onClick={() => dispatch(selectGist(file))} key={file.id}>{file.filename}</List.Item>
                })}
            </List>
        </Container>
    )
}
