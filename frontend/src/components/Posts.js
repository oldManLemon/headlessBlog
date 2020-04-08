import React, { Component } from 'react'
import axios from 'axios'
export class Posts extends Component {
    state ={
        posts: [],
        isLoaded :false
    }
    
    componentDidMount(){
        axios.get('/wp-json/wp/v2/posts')
        .then(res => this.setState({
            posts: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err)); //nothing fancy just error log
    }

    render(){
        console.log(this.state);
        const {posts, isLoaded} = this.state;
        if(isLoaded){
            return(
                <div>
                    {posts.map(post =>(
                        <h2>{post.title.rendered}</h2>
                    ))}
                </div>
            );
        }
        return <h2>Loading...gif</h2>
    }
}

export default Posts