import React from "react";
import styled from "styled-components";

const STDContentsLayout = styled.div``;

const Video = styled.video``;

const Contents: React.VFC = () => {
    return (
        <STDContentsLayout>
            <Video autoPlay>
                <source
                    src={"https://skkf-online-exhibition.s3.ap-northeast-2.amazonaws.com/test.mp4"}
                    type={"video/mp4"}
                />
            </Video>
        </STDContentsLayout>
    );
};

export default Contents;
