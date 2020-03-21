import React, { Component } from 'react'
import { func } from 'prop-types'
import { Container, Loader, Dimmer } from 'semantic-ui-react';
import Post from './Post'

export default class PostList extends Component {

    static propTypes = {
        onSelectPost: func.isRequired
    }

    state = {
        posts: [],
        loading: false
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts() {
        this.setState({ loading: true });
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({ posts: data, loading: false }))
    }

    render() {
        const { loading, posts } = this.state;
        const { onSelectPost } = this.props;
        return (
            <Container>
                <Dimmer active={loading} inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
                {posts.map(post => <Post key={post.id} post={post} onClickPost={onSelectPost} /> )}
            </Container>
        )
    }
}
