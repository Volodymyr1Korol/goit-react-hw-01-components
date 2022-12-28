import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FrendList from '../components/FriendList/FriendList';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';

import users from '../data/user.json';
import data from '../data/data.json';
import frends from '../data/frends.json';
import transactions from '../data/transactions.json';

export default function App() {
  return (
    <div>
      {users.map(el => (
        <Profile
          key={el.tag}
          avatar={el.avatar}
          username={el.username}
          tag={el.tag}
          location={el.location}
          stats={el.stats}
        />
      ))}

      <Statistics key="Statistics" title="Upload stats" stats={data} />
      <ul key="FrendList" className="friend-list">
        {frends.map(el => (
          <FrendList
            key={el.id}
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        ))}
      </ul>

      <TransactionHistory key="TransactionHistory" items={transactions} />
    </div>
  );
}
