import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
//hooks

const hooks = [
  { name: "useDebounce", component: "" },
  { name: "useThrottle", component: "" },
  { name: "useOutsideClick", component: "" },
  { name: "useTimer", component: "" },
];

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <Router>
      <Layout
        hooks={hooks.filter((hook) =>
          hook.name.toUpperCase().includes(searchInput.toUpperCase())
        )}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      >
        <Switch>{/* <Route exact path="/" component={} /> */}</Switch>
      </Layout>
    </Router>
  );
};
export default App;
