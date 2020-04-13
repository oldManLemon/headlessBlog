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

        // Promise.all([getAuthor]).the(res => {
        //     console.log(res)
        // });
    }
    render() {
        const { title, excerpt, id } = this.props.post;
        const { author, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div>
                    
                        <h2>{title.rendered}</h2>
            <small>by <strong>{author}</strong></small>

                    <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
                    <Link to={`/post/${id}`}>Read Full</Link>
                    <hr />
                </div >
            )
        }
        return null;

    }
}

export default PostItem
