import React, { Component, Fragement } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export class PostPage extends Component {
    state = {
        post: {},
        isLoaded: false


    }
    componentDidMount() {

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
            // console.log("I am ")
            // console.log(post.title.rendered)
            return (
                
              <div>

                    <Link to='/'> Go Back</Link>
                  <hr></hr>
                    <h1>{post.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>

              </div>
               
               
               
            )
        }

        return null;
    }
}

export default PostPage
