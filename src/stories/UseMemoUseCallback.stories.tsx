import React, { useCallback, useMemo, useState } from "react";

export default {
  title: "useMemo",
};

export const DifficultCountingExample = () => {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 10000000) {
        fake++;
        const fakeValue = Math.random();
      }
      tempResultA = tempResultA * i;
    }
    return tempResultA;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <>
      <input
        value={a}
        onChange={(e) => {
          setA(+e.currentTarget.value);
        }}
      />
      <input
        value={b}
        onChange={(e) => {
          setB(+e.currentTarget.value);
        }}
      />
      <hr />
      <div>result A: {resultA}</div>
      <div>result B: {resultB}</div>
    </>
  );
};

const UsersSecret = (props: { users: string[] }) => {
  console.log("USERS");
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"]);

  const newArray = useMemo(() => {
    return users.filter((u) => u.toLowerCase().indexOf("a") > -1);
  }, [users]);

  const addUser = () => {
    const newUsers = [...users, "Sveta " + new Date().getTime()];
    setUsers(newUsers);
  };

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={addUser}>add user</button>
      {counter}
      <Users users={newArray} />
    </>
  );
};

export const LikeUseCallback = () => {
  console.log("LikeUseCallback");
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"]);

  const memoizedAddBook = useMemo(() => {
    return () => {
      const newBooks = [...books, "Angular " + new Date().getTime()];
      setBooks(newBooks);
    };
  }, [books]);

  const memoizedAddBook2 = useCallback(() => {
    const newBooks = [...books, "Angular " + new Date().getTime()];
    setBooks(newBooks);
  }, [books]);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <Books addBook={memoizedAddBook2} />
    </>
  );
};

type BookSecretPropsType = {
  addBook: () => void;
};

const BooksSecret = (props: BookSecretPropsType) => {
  console.log("books");
  return (
    <div>
      <button onClick={props.addBook}>add book</button>
    </div>
  );
};

const Books = React.memo(BooksSecret);
