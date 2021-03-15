import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
//hooks
import UseDebounce from "./components/UseDebounce";
import UseThrottle from "./components/UseThrottle";
import UseOutsideClick from "./components/UseOutsideClick";
import UseGlobalEvent from "./components/UseGlobalEvent";
import UseTimer from "./components/UseTimer";

const hooks = [
  { name: "useDebounce", component: UseDebounce },
  { name: "useThrottle", component: UseThrottle },
  { name: "useOutsideClick", component: UseOutsideClick },
  { name: "useGlobalEvent", component: UseGlobalEvent },
  { name: "useTimer", component: UseTimer },
];

hooks.sort((pre, cur) => {
  const preName = pre.name.toUpperCase();
  const curName = cur.name.toUpperCase();

  if (preName < curName) {
    return -1;
  }

  if (preName > curName) {
    return 1;
  }

  return 0;
});

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
