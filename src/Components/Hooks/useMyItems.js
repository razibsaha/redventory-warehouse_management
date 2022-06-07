import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const useMyItems = () => {
  const [myItems, setMyItems] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const url = `https://red-inventory.herokuapp.com/myinventories?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, [user]);

  return [myItems, setMyItems];
};

export default useMyItems;
