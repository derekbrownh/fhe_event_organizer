import React, {useState, useEffect} from "react";
import { AppBarFun } from "./components/AppBar";
import { auth, db, snapshotToArray } from "./firebase";

export function App(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u) {
        setUser(u);
      } else {
        props.history.push("/");
      }
    });

    return unsubscribe;
  }, [props.history]);


  return <div>
    <AppBarFun user={user}></AppBarFun>
    <h1 style={{textAlign: 'center'}}>Hello World!</h1>;
    </div>
}
