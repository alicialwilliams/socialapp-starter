import React from "react";
import DataService from "../../DataService";
import NoDisplayPhoto from "../../assests/nodisplayphoto.png";
import "./GetUserPhoto.css";

class GetUserPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: "",
      hasImage: false,
    };
    this.client = new DataService();
  }
  componentDidMount() {
    const now = Date.now();
    this.client.getUserPhoto(this.props.username, now).then((result) => {
      this.setState({ imgSrc: result.config.url, hasImage: true });
    });
  }

  render() {
    if (this.state.hasImage) {
      return (
        <div>
          <img
            className="userPhoto"
            src={this.state.imgSrc}
            alt={"userphoto"}
          />
        </div>
      );
    } else {
      return (
        <div>
          <img className="userPhoto" src={NoDisplayPhoto} alt={"userphoto"} />
        </div>
      );
    }
  }
}

export default GetUserPhoto;
