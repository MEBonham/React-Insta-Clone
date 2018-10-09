import React from "react";

import "./PostContainer.css";

const PostContainer = props => {
    return (
        <img className="postPic" src={props.item.imageURL} alt="picture" />
    );
};

export default PostContainer;