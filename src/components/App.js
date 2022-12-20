import Profile from './Profile';
import Statistics from './Statistics';
import FrendList from './FrendList';
import TransactionHistory from './TransactionHistory';

import users from '../user.json';
import data from '../data.json';
import frends from '../frends.json';
import transactions from '../transactions.json';

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
