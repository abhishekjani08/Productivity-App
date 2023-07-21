import React from "react";
import styled from "styled-components";
import { MdDashboard, MdSettings } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { BiExclude, BiNotepad } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import logo from "./../../images/DEF.png";
// import namedLogoLight from "./../../images/abcd.png";
import "./Menu.css"
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const MenuContainer = styled.div`
    width: 10%;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #020202;
    border-radius: 0 10px 10px 0;
    border-left: 15px solid #fabb18;
    position: relative;
`;

const AppLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    top: 25px;
    left: 5px;
        img {
        width: 50%;
    }
    /* background-color:pink; */
`;

const AppTextLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 15px;
    margin-right: 20px;

    img {
        width: 75%;
    }
    /* background-color:purple; */
`;

const activeClassName = "nav-item-active";
const MenuOptions = styled(NavLink).attrs({ activeClassName })`
    display: flex;
    justify-content: center;
    margin: 10px 0;
    border-radius: 0 5px 5px 0;
    background-color: #020202;
    svg {
        font-size: 1.8em;
        color: #fff;
        margin: 10px 0;
    }
    &.${activeClassName} {
        svg {
            color: #fabb18;
        }
    }
    width: 100%;
    transition: width 0.2s;
    &:hover {
        svg {
            color: #fff;
        }
        width: 125%;
        background-color: #fabb18;
    }
`;

const DummyMenuOptions = styled.div`
    display: flex;
    justify-content: center;
    margin: 7px 0;
    border-radius: 0 5px 5px 0;
    background-color: #020202;
    svg {
        font-size: 1.8em;
        color: #fff;
        margin: 10px 0;
    }
    width: 100%;
    transition: width 0.2s;
    &:hover {
        svg {
            color: #fff;
        }
        width: 125%;
        background-color: #fabb18;
    }
`;

export default function Menu() {
    //     function dropdown(){
    //         return(
    
    //         )

    //     }


    return (
        <MenuContainer>
            <AppLogoContainer>
                <div class="dropdown">
                    <img src={logo} alt="logo" className="mylogo" style={{ "width": "50px", "height": "50px " }} />
                    <a class="btn btn-secondary dropdown-toggle mybtn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link to="/login">
                            <button className="butt"> Log out </button>
                        </Link>
                    </div>
                </div>
            </AppLogoContainer>
            <MenuOptions exact to="/dashboard">
                <MdDashboard data-tip="" data-for="dashboard" />
                <ReactTooltip id="dashboard" getContent={() => "Dashboard"} />
            </MenuOptions>

            <MenuOptions exact to="/notes">
                <BiNotepad data-tip="" data-for="notes" />
                <ReactTooltip id="notes" getContent={() => "Notes"} />
            </MenuOptions>

            <MenuOptions exact to="/pomodoro">
                <BiNotepad data-tip="" data-for="/PomodoroFile" />
                <ReactTooltip id="App2" getContent={() => "App2"} />
            </MenuOptions>

            <DummyMenuOptions>
                <BiExclude data-tip="" data-for="analytics" />
                <ReactTooltip id="analytics" getContent={() => "Coming Soon"} />
            </DummyMenuOptions>

            <MenuOptions exact to="/settings">
                <MdSettings data-tip="" data-for="settings" />
                <ReactTooltip id="settings" getContent={() => "Settings"} />
            </MenuOptions>

            {/* <AppTextLogoContainer>
                {/* <img src={namedLogoLight} alt="fokus" /> */}
            {/* </AppTextLogoContainer>  */}
        </MenuContainer>
    );
}
