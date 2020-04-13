import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export class PostItem extends Component {

    state = {
        author: '',
        isLoaded: 'false'
    }
    componentDidMount() {
        const { author } = this.props.post
        const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);
        Promise.all([getAuthor]).then(res => {
            // console.log(res);
            this.setState({
                author: res[0].data.name,
                isLoaded: true
            });
        })
    }
    render() {
        const { title, excerpt, id } = this.props.post;
        const { author, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div>
                    {/* Title */}
                    <h2><Link to={`/post/${id}`}>{title.rendered}</Link></h2>
                    {/* By Line */}
                    <small>by <strong>{author}</strong></small>
                    {/* Excerpt */}
                    <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
                    {/* Secondary Post Link */}
                    <Link to={`/post/${id}`}>Expand</Link>
                    <hr />
                </div >
            )
        }
        return null;

    }
}

export default PostItem
