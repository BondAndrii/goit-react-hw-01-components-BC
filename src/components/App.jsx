
import Profile from "./Profile";
import user from "./user.json";
import Statistics from "./Statistics"
export default function App () {
  return (
    <div>
      <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
      />
      <Statistics/>
    </div>
   
  );
};
