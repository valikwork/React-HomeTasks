import { Component } from 'react'

// render-props
export default class PostsProvider extends Component {
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
        const { posts, loading } = this.state;
        return this.props.children(posts, loading)
    }
}
