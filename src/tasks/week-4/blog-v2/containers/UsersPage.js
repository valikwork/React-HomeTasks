import React from 'react'
import { Container, Dimmer, Loader, Item, Grid } from 'semantic-ui-react';
import useData from '../hooks/useData';
import UserItem from '../components/UserItem';

export default function UsersPage() {

    const [users, isFetching] = useData('/users', []);
    
    return (
        <Container className='page'>
            <Dimmer active={isFetching} inverted>
                <Loader>Loading...</Loader>
            </Dimmer>
            <Item.Group className='users'>
                <Grid columns={3}>
                    {users.map(user => <UserItem key={user.id} user={user} isFetching={isFetching} />)}
                </Grid>
            </Item.Group>
        </Container>
    )
}
