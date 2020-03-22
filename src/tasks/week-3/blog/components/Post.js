import React, { Component } from 'react'
import { Item } from 'semantic-ui-react';
import { shape, string, number } from 'prop-types'
import Comments from './Comments';

export default class Post extends Component {
    static propTypes = {
        post: shape({
            id: number,
            title: string,
            body: string
        })
    }

    state = {
        showComments: false
    }
    onShowComments = () => {
        this.props.onClickPost(this.props.post);
        this.setState({ showComments: true })
    }
    render() {
        const { showComments } = this.state;
        const { onClickPost, post } = this.props;
        return (
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header onClick={() => onClickPost(post)} as='a'>{post.title}</Item.Header>
                        <Item.Meta>Description</Item.Meta>
                        <Item.Description>
                            {post.body}
                        </Item.Description>
                        <Item.Extra>
                            <a onClick={this.onShowComments}>Comments</a>
                        </Item.Extra>
                        {showComments &&
                        <Item.Extra>
                            <Comments postId={post.id} />
                        </Item.Extra>
                        }
                    </Item.Content>
                </Item>
        </Item.Group>
        )
    }
}
