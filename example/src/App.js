import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
//hooks
import UseDebounce from "./components/UseDebounce";
import UseThrottle from "./components/UseThrottle";

const hooks = [
  { name: "useDebounce", component: UseDebounce },
  { name: "useThrottle", component: UseThrottle },
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
        <Switch>
          <Route exact path="/light-hooks" component={Main} />
          {hooks.map((hook, idx) => (
            <Route
              key={`${hook.name}_${idx}`}
              exact
              path={`/light-hooks/${hook.name}`}
              component={hook.component}
            />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
};
export default App;
