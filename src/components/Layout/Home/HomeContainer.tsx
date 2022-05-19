import React, { useState } from "react";
import styled from "styled-components";
import { useDebounce } from "@/hooks";

const HomeContainerLayout = styled.div``;

const ThumbnailListLayout = styled.div`
    padding: 24px;
    margin-bottom: 478px;
`;

const TeamLayout = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

const ThumbnailItem = styled.div`
    width: 208px;
    height: 117px;
    border: 1px solid #fff;
    cursor: pointer;
`;

const BottomLogoLayout = styled.div`
    position: fixed;
    bottom: 0px;
    padding: 0 24px 20px;
`;

const Logo = styled.img`
    width: 100%;
    height: auto;
`;

const RowColumnLocationLayout = styled.div`
    position: absolute;
    display: flex;
    top: 0px;
    /* max-width: 261px; */
    /* left: 0px; */
`;

const LogoLayout = styled.div`
    position: relative;
`;

const RowNumberImage = styled.img`
    width: 100%;
`;

const ColumnNumberImage = styled.img`
    width: 100%;
`;

const CommaImage = styled.img``;

const TestLayout = styled.div`
    display: flex;
    width: 102px;
`;

const HomeContainer: React.FC = () => {
    const [row, setRow] = useState("");
    const [column, setCoumn] = useState("");
    const debouncedRow = useDebounce(row, 300);
    const debouncedColumn = useDebounce(column, 300);

    return (
        <HomeContainerLayout>
            <ThumbnailListLayout>
                {THUMBNAIL_DATA.map((t) => {
                    return (
                        <TeamLayout key={t.team}>
                            {t.thumbnailList.map((item) => {
                                return (
                                    <ThumbnailItem
                                        onMouseOver={() => {
                                            setRow(item.row);
                                            setCoumn(item.column);
                                        }}></ThumbnailItem>
                                );
                            })}
                        </TeamLayout>
                    );
                })}
                {/* <img src={"/image/f_1.svg"} /> */}
                {/* {THUMBNAIL_DATA.map((t) => {
          return;
        })} */}
            </ThumbnailListLayout>
            <BottomLogoLayout>
                <LogoLayout>
                    <Logo src={"/image/main_logo.png"} />
                    <RowColumnLocationLayout>
                        <TestLayout>
                            <RowNumberImage src={debouncedRow} />
                            <CommaImage src={"/image/comma.svg"} />
                            <ColumnNumberImage src={debouncedColumn} />
                        </TestLayout>
                    </RowColumnLocationLayout>
                </LogoLayout>
            </BottomLogoLayout>
        </HomeContainerLayout>
    );
};

export default HomeContainer;

const THUMBNAIL_DATA: {
    team: string;
    thumbnailList: {
        image: string;
        row: string;
        column: string;
        koreanName: string;
        englishName: string;
    }[];
}[] = [
    {
        team: "Infinitas",
        thumbnailList: [
            {
                image: "",
                row: "/image/f_1.svg",
                column: "/image/b_1.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_1.svg",
                column: "/image/b_2.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_1.svg",
                column: "/image/b_3.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_1.svg",
                column: "/image/b_4.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_1.svg",
                column: "/image/b_5.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_1.svg",
                column: "/image/b_6.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_1.svg",
                column: "/image/b_7.svg",
                koreanName: "",
                englishName: "",
            },
        ],
    },
    {
        team: "Spectrum",
        thumbnailList: [
            {
                image: "",
                row: "/image/f_2.svg",
                column: "/image/b_1.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_2.svg",
                column: "/image/b_2.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_2.svg",
                column: "/image/b_3.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_2.svg",
                column: "/image/b_4.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_2.svg",
                column: "/image/b_5.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_2.svg",
                column: "/image/b_6.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_2.svg",
                column: "/image/b_7.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_2.svg",
                column: "/image/b_8.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_2.svg",
                column: "/image/b_9.svg",
                koreanName: "",
                englishName: "",
            },
        ],
    },
    {
        team: "Teleport to",
        thumbnailList: [
            {
                image: "",
                row: "/image/f_3.svg",
                column: "/image/b_1.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_3.svg",
                column: "/image/b_2.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_3.svg",
                column: "/image/b_3.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_3.svg",
                column: "/image/b_4.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_3.svg",
                column: "/image/b_5.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_3.svg",
                column: "/image/b_6.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_3.svg",
                column: "/image/b_7.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_3.svg",
                column: "/image/b_8.svg",
                koreanName: "",
                englishName: "",
            },
        ],
    },
    {
        team: "Textureacit",
        thumbnailList: [
            {
                image: "",
                row: "/image/f_4.svg",
                column: "/image/b_1.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_4.svg",
                column: "/image/b_2.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_4.svg",
                column: "/image/b_3.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_4.svg",
                column: "/image/b_4.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_4.svg",
                column: "/image/b_5.svg",
                koreanName: "",
                englishName: "",
            },
            {
                image: "",
                row: "/image/f_4.svg",
                column: "/image/b_6.svg",
                koreanName: "",
                englishName: "",
            },
        ],
    },
];
