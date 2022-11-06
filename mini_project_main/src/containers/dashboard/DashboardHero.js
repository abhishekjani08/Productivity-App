import React from "react";
import styled from "styled-components";
import betaLogoLight from "./../../images/abcd.png";
import betaLogoDark from "./../../images/betaLogoDark.svg";
import { DayDate } from "./../../components/dashBoard/DayDate";
import { useSelector } from "react-redux";
import { getFokusUsageTip } from "./../../helpers/fokusUsageTips";
//Dashboard hero is the header of the homepage

const DashboardHeroContainer = styled.div`
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top:20px;
    /* background-color: purple; */
`;

const DashboardHeroDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    max-width: 736px;
    height: 85%;
    img {
        width: 45%;
    }
`;

const FokusUsageTips = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 12%;
    p {
        margin: 0;
        font-size:0.8em;
        font-weight:bold;
        color:${p=>p.theme.primaryText}
    }
    //background-color: cyan; 
`;

const TipIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 100%;
    border-radius: 3px;
    background-color: #77dd77;a
    color: ${(p) => p.theme.secondaryText};
    span {
        font-size: 0.9em;
        font-weight: bold;
    }
    margin: 0 10px;
`;

export function DashboardHero(p) {
    const darkTheme = useSelector((s) => s.settings.darkTheme);
    return (
        <DashboardHeroContainer>
        {/* <div> */}

            <DashboardHeroDiv>
                <img src={darkTheme ? betaLogoDark : betaLogoLight} alt="fokus" />
                <DayDate />
            </DashboardHeroDiv>
            
        </DashboardHeroContainer>
    );
}
