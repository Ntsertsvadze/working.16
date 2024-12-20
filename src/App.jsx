import { Component } from "react";
import './App.css';
import UsersList from "./components/UsersList";
import BacklogWrapper from "./components/BacklogWrapper";
import InprogresWrapper from "./components/InprogresWrapper";

class App extends Component {
  render() {
    return (
      <>
        <BacklogWrapper />
        <InprogresWrapper />
        <UsersList />
      </>
    );
  }
}

export default App;




