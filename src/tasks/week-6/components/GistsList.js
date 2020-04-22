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
        return Object.values(item.files)[0]
    });

    return (
        <Container>
            {isLoading && <h1>Loading...</h1>}
            <List>
                {files.map((file, i) => {
                    return <List.Item onClick={() => dispatch(selectGist(file.raw_url))} key={i}>{file.filename}</List.Item>
                })}
            </List>
        </Container>
    )
}
