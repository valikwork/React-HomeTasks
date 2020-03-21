import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react';
import { number } from 'prop-types'

export default class Comments extends Component {
    static propTypes = {
        postId: number.isRequired
    }
    state = {
        comments: [],
        loading: false
    }
    componentDidMount() {
        if (this.props.postId)
        this.fetchComments();
    }
    fetchComments() {
        this.setState({ loading: true });
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`)
            .then(response => response.json())
            .then(data => this.setState({ comments: data, loading: false }))
    }
    render() {
        const { comments } = this.state;
        return (
            <Comment.Group>
                { comments.map(comment => (
                 <Comment key={comment.id}>
                    <Comment.Avatar src='https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png' />
                    <Comment.Content>
                        <Comment.Author as='a'>{comment.email}</Comment.Author>
                        <Comment.Metadata>
                            <div>{comment.name}</div>
                        </Comment.Metadata>
                        <Comment.Text>{comments.body}</Comment.Text>
                        <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
                )) }
            </Comment.Group>
        )
    }
}
