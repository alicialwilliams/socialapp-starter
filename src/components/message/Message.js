import { OmitProps } from "antd/lib/transfer/ListBody";
import React from "react";
import GetDisplayName from "../getDisplayName/GetDisplayName";
import LikeButton from "../likeButton/LikeButton";

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLiked: false, likes: [] };
  }

  componentDidMount() {
    let loginData = JSON.parse(localStorage.getItem("login"));
    {
      this.props.likes.forEach((likeObj) => {
        if (likeObj.username === loginData.result.username) {
          this.setState({ isLiked: true });
        }
      });
    }
  }
  render() {
    if (this.props.key) {
      return <div>LOADING</div>;
    }
    if (!this.state.isLiked) {
      return (
        <li key={this.props.keyId} className="Message">
          At {new Date(this.props.createdAt).toDateString()}{" "}
          <GetDisplayName username={this.props.username} /> posted:
          <div className="message-text">{this.props.text} </div>
          <LikeButton messageId={this.props.id} />
          <div className="likes">Likes: {this.props.likes.length}</div>
        </li>
      );
    } else {
      return (
        <li key={this.props.keyId} className="Message">
          At {new Date(this.props.createdAt).toDateString()}{" "}
          <GetDisplayName username={this.props.username} /> posted:
          <div className="message-text">{this.props.text} </div>
          <button>unlike</button>
          <div className="likes">Likes: {this.props.likes.length}</div>
        </li>
      );
    }
  }
}




export default Message;
