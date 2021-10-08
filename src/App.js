import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.js";
import { Details } from "./pages/Details/Details.js";
import { GlobalStyle } from "./style/GlobalStyles.js";
import { AppWrapper } from "./style/StyledAppWrapper.js";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppWrapper>
        <Switch>
          <QueryClientProvider client={queryClient}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:id" children={<Details />}></Route>
          </QueryClientProvider>
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
