import React, { Component, Fragement } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export class PostPage extends Component {
    state = {
        post: {},
        author:{},
        comments: [],
        isLoaded: false
    }

    componentDidMount() {

        axios.get(`/wp-json/wp/v2/comments?post=${this.props.match.params.id}`)
            .then(x => {
                this.setState({ comments: x.data });
            });
        
        axios.get(`/wp-json/wp/v2/posts/${this.props.match.params.id}`)
            .then(res => {

                this.setState( { post: res.data, author: null, isLoaded: false });

                axios.get(`/wp-json/wp/v2/users/${res.data.author}`)
                .then(x => {
                    this.setState(
                                    {
                                        post: res.data,
                                        author: x.data,
                                        isLoaded: true
                                    }
                                );
                });

            }  )
            .catch(err => console.log(err));

    }
    render() {

        const { post, comments, author, isLoaded } = this.state

        if (isLoaded)
        {
            console.log(post)

            return (
                <div>
                    <Link to='/'> Go Back</Link>
                    <h1>{post.title.rendered}</h1>
                    <small>by <strong>{author.name}</strong></small>
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                    {comments.map(comment => <div><hr /><p dangerouslySetInnerHTML={{__html: comment.content.rendered}}></p></div>)}
                </div>
            )
        }

        return null;
    }
}

export default PostPage
