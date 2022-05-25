import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useResize } from "@/hooks";

interface IProps {
    dataList: {
        id: string;
        image: string;
        coordinate?: string;
        row: string;
        column: string;
        koreanName: string;
        englishName: string;
    }[];
}

const STDContainer = styled.div<{ height: number }>`
    min-width: 256px;
    height: ${(props) => `calc(100vh - ${props.height}px)`};
    border-right: 1px solid #fff;
`;

const ListLayout = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 24px;
`;

const ItemLayout = styled.div`
    cursor: pointer;
    margin-bottom: 30px;

    &:hover {
        div {
            color: #7e7e7e;
        }
    }
`;

const ItemT = styled.div<{ isModwestFont: boolean }>`
    color: #fff;
    padding: 4px;
    /* font-family: ${(props) => (props.isModwestFont ? "pp-mondwest'" : "Open Sans")}; */
`;

const DesignerList: React.VFC<IProps> = ({ dataList }) => {
    const [containerHeight, setContainerHeight] = useState<number | null>(null);
    const { width } = useResize();

    useEffect(() => {
        const nav = document.getElementById("nav-bar");
        setContainerHeight(nav.offsetHeight);
    }, [width]);

    return (
        <STDContainer height={containerHeight}>
            <ListLayout>
                {dataList.map((data) => {
                    return (
                        <ItemLayout key={data.id}>
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
