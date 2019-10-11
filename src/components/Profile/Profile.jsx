import React from 'react';
import './Profile.css';
import PropTypes from 'prop-types';

export default class Profile extends React.Component {
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  render() {
    return (
      <div className="profile">
        <div className="description">
          <img src={this.props.user.avatar} alt="user avatar" className="avatar" />
          <p className="name">{this.props.user.name}</p>
          <p className="tag">@{this.props.user.tag}</p>
          <p className="location">{this.props.user.location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">
              {this.numberWithCommas(this.props.user.stats.followers)}
            </span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{this.numberWithCommas(this.props.user.stats.views)}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{this.numberWithCommas(this.props.user.stats.likes)}</span>
          </li>
        </ul>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object,
};
