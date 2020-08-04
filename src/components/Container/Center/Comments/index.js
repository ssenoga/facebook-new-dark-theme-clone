import React from "react";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import GifIcon from "@material-ui/icons/Gif";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

import "./comments.css";

export default function Comments() {
  return (
    <div className="app__comments">
      {/* add comment */}
      <div className="comment__add">
        <img
          alt="user"
          src="https://scontent.xx.fbcdn.net/v/t1.0-1/cp0/c0.0.50.50a/p50x50/102708947_2578533219077879_3641064439634590486_n.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_ohc=EPmuo-IjNVcAX_55efe&_nc_ht=scontent.xx&oh=2445f9c6c0eec5005616b8f41bdd6956&oe=5F4E4240"
        />
        <input type="text" placeholder="Write a comment" />
        <div className="comment__icons">
          <EmojiEmotionsIcon />
          <CameraAltIcon />
          <GifIcon />
          <PhotoLibraryIcon />
        </div>
      </div>
      <div className="comment__list">
        <p>List of comments goes here</p>
      </div>
      {/* list comments */}
    </div>
  );
}
