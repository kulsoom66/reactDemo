import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TodoList() {
  const [Users, setUsers] = useState([]); //empty

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((response) => {
   
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); //The empty array [] passed as the second argument to useEffect ensures that the effect only runs once, when the component mounts.

  return (
    <>
      <div>
        <ul>
          {Users.map((item, idx) => {
            return (
              <Link to={`/detailedTodo/${item.id}`}>
                <li>{item.email}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
