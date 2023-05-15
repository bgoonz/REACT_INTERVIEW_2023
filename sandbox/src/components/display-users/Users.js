import UserList from "./UserList";
const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 },
];

function Users() {
  return (
    <div>
      <UserList users={users} />
    </div>
  );
}

export default Users;
