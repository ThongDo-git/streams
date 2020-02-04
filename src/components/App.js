import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./streams/streamCreate";
import StreamDelete from "./streams/streamDelete";
import StreamEdit from "./streams/streamEdit";
import StreamList from "./streams/streamList";
import StreamShow from "./streams/streamShow";
import Header from "./header";
import createBrowserHistory from "./../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={createBrowserHistory}>
        <Header />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/delete" component={StreamDelete} />
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/streams/show" component={StreamShow} />
        <Route path="/" exact component={StreamList} />
      </Router>
    </div>
  );
};

export default App;
