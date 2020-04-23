import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import GistsList from './components/GistsList';
import GistInfo from './components/GistInfo';
import GistOwnerInfo from './components/GistOwnerInfo';

export default function Gists() {
    return (
        <Container>
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <GistsList />
                    </Grid.Column>
                    <Grid.Column>
                        <GistInfo />
                    </Grid.Column>
                    <Grid.Column>
                        <GistOwnerInfo />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </Container>
    )
}
