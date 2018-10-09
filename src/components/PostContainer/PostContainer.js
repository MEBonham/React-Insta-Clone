import React from "react";
import PropTypes from "prop-types";

import "./PostContainer.css";

import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
    return (
        <div class="post">
            <img className="postPic" src={props.item.imageUrl} alt="picture" />
            <CommentSection arr={props.item.comments} />
        </div>
    );
};

PostContainer.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    }).isRequired
}

export default PostContainer;