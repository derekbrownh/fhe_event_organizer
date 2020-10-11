import React, {useState, useEffect} from "react";
import { AppBarFun } from "./components/AppBar";
import { auth, db, snapshotToArray } from "./firebase";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export function App(props) {
  const [user, setUser] = useState(null);
  const [test, setTest] = useState(null)


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

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("test")
        .onSnapshot((snapshot) => {
          const test = snapshotToArray(snapshot);
          setTest(test);
        });
    }
  }, [user]);



  return (<div>
    <AppBarFun user={user}></AppBarFun>
    <h1 style={{textAlign: 'center'}}>Hello World!</h1>;
    <TextField
            placeholder="Email"
            fullWidth="true"
            value={test}
            onChange={e => {
              setTest(e.target.value);
            }}
          />
    <Button color="inherit">
        Testing
      </Button>
    </div>)
}
