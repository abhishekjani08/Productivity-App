import React from "react";
import Dashboard from "./dashboard";
import { TaskBoard } from "./taskBoard/TaskBoard";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { MobileView } from "./mobileView";
import Settings from "./settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./../helpers/themeStyles";
import { useSelector } from "react-redux";
import Notes from "./notes";
import LandingPage from "../containers/LandingPage"
import LoginPage from "./login/LoginPage"
import SignUpPage from "./RegisterPage"



//styled conponent
const AppContainer = styled.div`
    display: flex;
    height: 100%;
`;

function App() {
    const isDarkTheme = useSelector((s) => s.settings.darkTheme);

    if (!isMobile)
        return (
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <>
                    <GlobalStyles />
                    <AppContainer>
                        <Router>
                        
                            <Switch>                     
                                <Route path = "/login">
                                    <LoginPage />
                                </Route>
                                <Route exact path = "/Register">
                                    <SignUpPage />
                                </Route> 
                                <Route exact path = "/">
                                    <LandingPage/>
                                </Route> 
                            </Switch>
                        </Router>
                    </AppContainer>
                </>
            </ThemeProvider>
        );
    else {
        return (
            <AppContainer>
                <MobileView />
            </AppContainer>
        );
    }
}

export default App;
