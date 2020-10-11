import React, {useState, useEffect} from "react";
import { AppBarFun } from "./components/AppBar";
import { auth, db, snapshotToArray } from "./firebase";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export function App(props) {
  const [user, setUser] = useState(null);
  const [test, setTest] = useState("")
  


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



  const handleSaveTest = () => {
    console.log(user.uid)
    db.collection("users")
      .doc(user.uid)
      .collection("test")
      .add({
        test: test
      })
      
      .then(setTest(""));
  };

  // useEffect(() => {
  //   if (user) {
  //     db.collection("users")
  //       .doc(user.uid)
  //       .collection("test")
  //       .onSnapshot((snapshot) => {
  //         //const updated_value = snapshotToArray(snapshot);
  //         //setTest(updated_value);
  //       });
  //   }
  // }, [user]);



  return (<div>
    <AppBarFun user={user}></AppBarFun>
    <h1 style={{textAlign: 'center'}}>Hello World!</h1>
    <TextField
            placeholder="Test Value"
            fullWidth="true"
            value={test}
            onChange={input => {
              setTest(input.target.value);
            }}
          />
    <Button color="inherit" onClick ={handleSaveTest}>
        Testing
      </Button>
    </div>)
}
