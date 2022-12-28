import './FriendList.modyle.css';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendsListItem/FriendsListItem'
export default function FriendList({ friends }) {

  return (
    <ul className='friend-list'>{friends.map(friend => <FriendListItem key={friend.id} avatar={friend.avatar} isOnline={friend.isOnline} name={friend.name} />)}</ul>

  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired

  })).isRequired,

};
