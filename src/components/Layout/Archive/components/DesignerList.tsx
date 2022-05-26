import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import { useResize } from "@/hooks";
import { device, mixins } from "@/styles";

interface IProps {
    dataList: {
        id: string;
        image: string;
        coordinate?: string;
        row: string;
        column: string;
        koreanName: string;
        englishName: string;
        startTime: number;
    }[];
    headerHeight: number | null;
    clickMoveVideo: (time: number) => void;
}

const STDContainer = styled.div<{ height: number }>`
    min-width: 256px;
    height: ${(props) => `calc(100vh - ${props.height}px)`};
    margin-right: 20px;
    border-right: 1px solid #fff;

    @media (max-width: 1023px) {
        height: auto;
        margin-right: 0px;
        border-right: none;
    }
`;

const ListLayout = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 24px;
    ${mixins.noScrollbar()}

    @media (max-width: 1023px) {
        ${mixins.flexSet("flex-start")}
        width: 100%;
        padding: 0 0 0 16px;
        overflow-x: scroll;
    }
`;

const ItemLayout = styled.div<{ isSelected?: boolean }>`
    ${mixins.flexSet("flex-start", "flex-start", "column")}
    min-width: 125px;
    margin-bottom: 30px;
    cursor: pointer;

    @media ${device.laptop} {
        &:hover {
            div {
                color: #7e7e7e;
            }
        }
    }

    ${({ isSelected }) =>
        isSelected &&
        css`
            div {
                background-color: white;
                color: black;
            }
        `}
`;

const ItemT = styled.div<{ isModwestFont: boolean }>`
    color: #fff;
    padding: 4px;
    font-size: 18px;
    line-height: 110%;
    /* font-family: ${(props) => (props.isModwestFont ? "pp-mondwest'" : "Open Sans")}; */

    @media ${device.laptop} {
        font-size: 22px;
    }
`;

const DesignerList: React.VFC<IProps> = ({ dataList, headerHeight, clickMoveVideo }) => {
    const router = useRouter();
    const { designer } = router.query as { designer: string };

    return (
        <STDContainer height={headerHeight + 24}>
            <ListLayout>
                {dataList.map((data) => {
                    return (
                        <ItemLayout
                            key={data.id}
                            isSelected={data.id === (designer ?? dataList[0].id)}
                            onClick={() => {
                                router.push(`/archive?designer=${data.id}`);
                                clickMoveVideo(data.startTime);
                            }}>
                            <ItemT isModwestFont>{data.coordinate}</ItemT>
                            <ItemT isModwestFont={false}>{data.koreanName}</ItemT>
                            <ItemT isModwestFont={false}>{data.englishName}</ItemT>
                        </ItemLayout>
                    );
                })}
            </ListLayout>
        </STDContainer>
    );
};

export default DesignerList;
