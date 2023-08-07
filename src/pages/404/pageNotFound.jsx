import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">WELCOME TO THE MOVIX</span>
                <div className="logo" onClick={() => navigate("/")}>
                <span className="smallText" >Click here to exploring the Movies and TV shows.</span>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default PageNotFound;