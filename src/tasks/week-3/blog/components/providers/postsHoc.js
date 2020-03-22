import React from 'react'

// hoc

export default function postsProvider(Component) {
    class PostsProvider extends React.Component {
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
            return <Component {...this.props} posts={posts} isFetching={loading} />
        }
    }
    return PostsProvider;    
}