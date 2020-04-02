import React from 'react'
import { useParams } from 'react-router-dom';
import { Container, Dimmer, Loader, Image, Item } from 'semantic-ui-react';
import useData from '../hooks/useData';
import SlickSlider from '../components/Slider';

export default function AlbumPage() {
    const { _, albumId } = useParams();

    const [photos, isFetching] = useData(`/albums/${albumId}/photos/`, []);

    if (isFetching) return (
        <Container className='page'>
            <Dimmer active inverted><Loader /></Dimmer>
        </Container>
    )

    return (
        <Container>
            <SlickSlider photos={photos} />
        </Container>
    )
}
