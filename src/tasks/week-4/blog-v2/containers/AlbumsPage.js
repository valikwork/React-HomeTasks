import React from 'react';
import useData from '../hooks/useData';
import { List, Container, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function AlbumsPage() {

    const [albums, isFetching] = useData('/albums', []);

    if (isFetching) return (
        <Container className='page'>
            <Dimmer active inverted><Loader /></Dimmer>
        </Container>
    )

    return (
        <List ordered animated>
            
                {albums.map(album => (
                    
                        <List.Item><Link to={`users/${album.userId}/albums/${album.id}`}>{album.title}</Link></List.Item>
                    
                ))}
            
        </List>
    )
}
