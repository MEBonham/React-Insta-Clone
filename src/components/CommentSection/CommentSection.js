import React from "react";
import PropTypes from "prop-types";

const CommentSection = props => {
    const arr = props.arr;
    return(
        arr.map(comment => 
            <p><strong>{comment.username}</strong> {comment.text}</p>
        )
    );
};

CommentSection.propTypes = {
    arr: PropTypes.arrayOf(PropTypes.object({
        username: PropTypes.string,
        text: PropTypes.string
    })).isRequired
}

export default CommentSection;