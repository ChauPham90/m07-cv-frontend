import React from "react";
import { UsersList } from "../state/use-users-list";
import Users from "../components/HomeUsersView";
import LoadingIndicator from "../components/LoadingIndicator";

const HomeView = ({ uname }) => {
  const { users } = UsersList(uname);
  const filterdUsers = users.filter(user => user.id !== "undefined")

  return (
    <div>
      <ul>
        {filterdUsers.length > 0 ? (
          filterdUsers.map(user => (
            <Users
              key={user.id}
              userId={user.id}
              name={user.name}
              surname={user.surname}
              profilePic={user.profile_pic}
            />
          ))
        ) : (
            <div>
              <h2 className="site-heading">{<LoadingIndicator />}</h2>
            </div>
          )}
      </ul>
    </div>
  );
};

export default HomeView;
