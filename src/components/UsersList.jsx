import { useCallback, useEffect, useRef, useState } from "react";
import UserItem from "./UserItem";

const UsersList = () => {
  const [inputValue, setInputValue]= useState('')
  const [users, setUsers] = useState([{id:1, name: 'lion'}, ]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => data.json())
    .then(res => console.log(res))
  }, []) 

  const inputRef = useRef(null) 
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const onChange = (event) => {
    const value = event.target.value;
    setInputValue(value)
  };

   const addUser = (event) => {
    event.preventDefault();

    const user = {
      id: users.length + 1,
      name: inputValue,
    };

    setUsers((prevState) => [...prevState, user])
    setInputValue('')
  };

  const removeUser = useCallback ((id) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== id))
  }, [])

    return (
      <div className="users">
        <form onSubmit={addUser} className="user-form">
          <input ref={inputRef} type="text"  onChange={onChange}  value={inputValue}/>
          <button type="submit">Add User</button>
        </form>

        {users.map((user) => (
            <UserItem key={user.id} id={user.id} name={user.name} action={removeUser} />
          ))}
      </div>
    );
  
}
export default UsersList;