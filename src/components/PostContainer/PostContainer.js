import React from "react";

import "./PostContainer.css";

const PostContainer = props => {
    return (
        <img className="postPic" src={props.item.imageUrl} alt="picture" />
    );
};

export default PostContainer;