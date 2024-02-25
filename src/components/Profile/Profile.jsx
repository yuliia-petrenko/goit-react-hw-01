// import React from 'react';
import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats:{followers,views,likes} }) => {
  return (
    <div className={css.profile}>
      <div className={css.profileView}>
        <img className={css.avatar} src={avatar} alt="User avatar" width={200} />
        <p className={css.profileName}>{username}</p>
        <p className={css.infoName}>@{tag}</p>
        <p className={css.infoName}>{location}</p>
      </div>
      <ul className={css.statsInfo}>
        <li className={css.statsInfoItem}>
          <span className={css.statsName}>Followers</span>
          <span className={css.statsValue}>{followers}</span> {/* Виправлено */}
        </li>
        <li className={css.statsInfoItem}>
          <span className={css.statsName}>Views</span>
          <span className={css.statsValue}>{views}</span> {/* Виправлено */}
        </li>
        <li className={css.statsInfoItem}>
          <span className={css.statsName}>Likes</span>
          <span className={css.statsValue}>{likes}</span> {/* Виправлено */}
        </li>
      </ul>
    </div>
  );
};

export default Profile;