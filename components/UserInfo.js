import { useContext } from "react";
import { Button } from "antd";
import UserContext from "../components/UserContext";

const UserInfo = () => {
  const { user, signOut } = useContext(UserContext);

  return (
    <div className="user-info">
      <p>
        Hello, <strong>{user}</strong>
      </p>
      <p>Welcome to our app</p>
      <Button type="primary" ghost onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
};

export default UserInfo;
