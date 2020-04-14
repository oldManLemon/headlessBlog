import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export class Comment extends Component {

    render()
    {
        const { content } = this.props.comment;

        return (
            <div>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: content.rendered }}></div>
            </div>
        );
    }
}

export default Comment;
