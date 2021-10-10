import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.js";
import { Details } from "./pages/Details/Details.js";
import { GlobalStyle } from "./style/GlobalStyles.js";
import { AppWrapper } from "./style/StyledAppWrapper.js";
import { ThemeContext } from "./lib/ContextTheme.js";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <Router>
      <GlobalStyle />
      <AppWrapper theme={theme}>
        <Switch>
          <QueryClientProvider client={queryClient}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/:id" children={<Details />}></Route>
            </ThemeContext.Provider>
          </QueryClientProvider>
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
