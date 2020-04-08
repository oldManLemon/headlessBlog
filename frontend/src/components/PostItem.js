import React, { Component } from 'react'


export class PostItem extends Component {

    render() {
        const { title,excerpt } = this.props.post;
        return (
            <div>
                <h2>{title.rendered}</h2>
                <div>
                    <p>{excerpt.rendered}</p>
                </div>

            </div>
        )
    }
}

export default PostItem
