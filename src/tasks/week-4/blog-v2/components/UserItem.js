import React from 'react'
import { Card, Image, Container, List, Grid, Dimmer, Loader } from 'semantic-ui-react'
import { Route, Switch, Link } from 'react-router-dom';

export default function UserItem(props) {

    const user = props.user;
    const isFetching = props.isFetching

    if (isFetching) return (
        <Container className='page'>
            <Dimmer active inverted><Loader /></Dimmer>
        </Container>
    )

    return (
        <Grid.Column>
        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>

                <Link to={`users/${user.id}`}>
                    <Card.Header>{user.name}</Card.Header>
                </Link>
                        
                <Card.Meta>
                    <span className='email'>{user.email}</span>
                </Card.Meta>

                <Card.Description>
                {user.address.street} {user.address.suite}, {user.address.city}
                </Card.Description>

            </Card.Content>
        </Card>
        </Grid.Column>
    )
}
