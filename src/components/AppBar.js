import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { auth } from "../firebase";


export function AppBarFun(props) {
 
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        props.history.push("/");
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div>
      <AppBar position="static" color = "default">
        <Toolbar style={{ display: "flex" }}>
          <div
            variant="h6"
            color="inherit"
            style={{ flexGrow: 1, paddingLeft: 60 }}
          >
          </div>
          <Button color="inherit" onClick={handleSignOut}>
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
