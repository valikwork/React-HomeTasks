import React, { Component } from 'react'
import { func } from 'prop-types'
import { Container, Loader, Dimmer } from 'semantic-ui-react';
import Post from './Post'
// import PostsProvider from './providers/PostsProvider';
import postsProvider from './providers/postsHoc';

class PostList extends Component {

    static propTypes = {
        onSelectPost: func.isRequired
    }

    render() {
        const { onSelectPost, posts, isFetching } = this.props;
        return (
            <Container>
                <div>
                    <Dimmer active={isFetching} inverted>
                        <Loader inverted>Loading</Loader>
                    </Dimmer>
                    {posts.map(post => <Post key={post.id} post={post} onClickPost={onSelectPost} /> )}
                </div>
            </Container>
        )
    }
}

export default postsProvider(PostList);