import React, { Component, Fragement } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export class PostPage extends Component {
    state = {
        post: {},
        author:'',
        isLoaded: false


    }
    componentDidMount() {
        
        // const getAuthor = axios.get(`/wp-json/wp/v2/users/${this.props.match.params.author}`);
        axios.get(`/wp-json/wp/v2/posts/${this.props.match.params.id}`)
            .then(res => this.setState(
                {
                    post: res.data,
                    isLoaded: true
                }
            )
            )
            .catch(err => console.log(err));
        
        



    }
    render() {
        const { post, isLoaded } = this.state
        if (isLoaded) {
            console.log(post)
            return (
                <div>
                    <Link to='/'> Go Back</Link>
                    <h1>{post.title.rendered}</h1>
                    {/* Crap fix this */}
                    <small>by <strong>{post.author}</strong></small>
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>

                </div>



            )
        }

        return null;
    }
}

export default PostPage
