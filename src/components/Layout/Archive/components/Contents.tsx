import React from "react";
import styled from "styled-components";

const STDContentsLayout = styled.div`
    display: flex;
`;

const Video = styled.video`
    width: 100%;
`;

const ScriptLayout = styled.div`
    min-width: 411px;
`;

const Contents: React.VFC = () => {
    return (
        <STDContentsLayout>
            <Video autoPlay>
                <source
                    src={"https://skkf-online-exhibition.s3.ap-northeast-2.amazonaws.com/test.mp4"}
                    type={"video/mp4"}
                />
            </Video>
            <ScriptLayout>스크립트 들어갈곳</ScriptLayout>
        </STDContentsLayout>
    );
};

export default Contents;
