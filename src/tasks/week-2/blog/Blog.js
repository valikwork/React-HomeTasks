import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import './node_modules/semantic-ui-css/semantic.min.css'
import PostList from './components/PostList'
import AuthorInfo from './components/AuthorInfo'
import PostsProvider from './components/providers/PostsProvider';

export default class Blog extends Component {
    state = {
        currentAuthorId: null
    }
    onSelectPost = post => {
        this.setState({ currentAuthorId: post.userId })
    }
    render() {
        return (
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <PostList onSelectPost={this.onSelectPost} />
                    </Grid.Column>
                    <Grid.Column>
                        <AuthorInfo authorId={this.state.currentAuthorId} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
