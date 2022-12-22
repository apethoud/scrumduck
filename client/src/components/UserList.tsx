import { useEffect, useState } from "react";

export default function UserList() {
  const [userList, setUserList] = useState([]);

  const CORS_PORT = '8080';
  const NO_CORS_PORT = '4545';

  useEffect(() => {
    async function getUsers() {
      console.log("getUsers hit");
      const url = `http://localhost:${NO_CORS_PORT}/users`;
      const response = await fetch(url);
      const data = await response.json();
      console.log({data});
      setUserList(data);
    }
    getUsers();
  }, [])

  return (
    <>
      <div>User List</div>
      {userList.length > 0 && userList.map(user => (
        <div>{user.name}</div>
      ))}
    </>
  )
}