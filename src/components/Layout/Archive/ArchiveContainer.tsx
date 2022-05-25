import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import DesignerList from "./components/DesignerList";
import Contents from "./components/Contents";

const STDContainer = styled.div`
    display: flex;
`;

const ArchiveContainer: React.VFC = () => {
    return (
        <STDContainer>
            <DesignerList />
            <div>
                <Contents />
            </div>
        </STDContainer>
    );
};

export default ArchiveContainer;
