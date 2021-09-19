import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.js";
import { Details } from "./pages/Details/Details.js";
import { GlobalStyle } from "./style/GlobalStyles.js";
import { AppWrapper } from "./style/StyledAppWrapper.js";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppWrapper>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:id" children={<Details />}></Route>
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
