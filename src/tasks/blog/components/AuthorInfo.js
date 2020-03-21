import React, { Component } from 'react'
import { Card, List, Icon, Dimmer, Loader, Segment } from 'semantic-ui-react'
import { number } from 'prop-types'

export default class AuthorInfo extends Component {
    static propTypes = {
      authorId: number
    }
    static defaultProps = {
      authorId: null
    }
    state = {
        authorInfo: null,
        albums: [],
        loading: false
    }
    componentDidMount() {
        if (this.props.authorInfo) {
            this.fetchAuthorInfo();
            this.fetchAlbums();
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.authorId !== prevProps.authorId) {
            this.fetchAuthorInfo();
            this.fetchAlbums();
        }
    }
    fetchAuthorInfo() {
        this.setState({ loading: true });
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.authorId}`)
            .then(response => response.json())
            .then(data => this.setState({ authorInfo: data, loading: false }))
    }
    fetchAlbums() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.authorId}/albums`)
            .then(response => response.json())
            .then(data => this.setState({ albums: data }))
    }
    render() {
        const { loading, albums, authorInfo } = this.state;
        if (!authorInfo) {
            return <Segment>Select any post</Segment>
        }
        return (
            <Card className='author-column'>
            <Dimmer inverted active={loading}><Loader inverted>Loading...</Loader></Dimmer>
            {/* <Image src='https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png' wrapped ui={false} /> */}
            <Card.Content>
              <Card.Header>{authorInfo.name}</Card.Header>
              <Card.Meta>
                <span className='date'>username: {authorInfo.username}</span>
              </Card.Meta>
              <Card.Meta>
                <span className='email'>email: {authorInfo.email}</span>
              </Card.Meta>
              <Card.Description>
                {authorInfo.name} works in <strong>{authorInfo.company.name}</strong>
              </Card.Description>
              <Card.Meta>
                <span className='phone'>phone: {authorInfo.phone}</span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                {albums.length} Albums
              </a>
            </Card.Content>
            <Card.Content>
                <List>
                    { albums.map(a => <List.Item key={a.id}>{a.title}</List.Item>) }
                </List>
             </Card.Content>
          </Card>
        )
    }
}
