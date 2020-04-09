import React, { Component } from 'react'


export class PostItem extends Component {

    render() {
        const { title,excerpt,content } = this.props.post;
        return (
            <div>
                <a href=""><h2>{title.rendered}</h2></a>
                <div dangerouslySetInnerHTML={{ __html: content.rendered}}></div>
                <hr />
            </div>
        )
    }
}

export default PostItem
