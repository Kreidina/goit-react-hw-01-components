import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li key={id} className={css.item}>
      <span className={isOnline ? css.isOnline : css.isOffline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.textName}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
