import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDebounce } from "@/hooks";

const HomeContainerLayout = styled.div``;

const ThumbnailListLayout = styled.div`
    max-width: 1920px;
    padding: 24px;
    padding-bottom: 260px;
    margin: 0 auto;
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
    pointer-events: none;
    width: 100%;
    max-width: 1920px;
    left: 50%;
    transform: translateX(-50%);
`;

const Logo = styled.img`
    width: 100%;
    height: auto;
`;

const RowColumnLocationLayout = styled.div`
    position: absolute;
    display: flex;
    bottom: 0px;
    left: 21.5%;
    height: 50%;
    /* max-width: 452px;
    max-height: 289px; */
    /* max-width: 261px; */
    /* left: 0px; */
`;

const LogoLayout = styled.div`
    position: relative;
`;

const RowNumberImage = styled.img`
    height: 100%;
`;

const ColumnNumberImage = styled.img`
    height: 100%;
`;

const CommaImage = styled.img``;

const TestLayout = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const RowNumberContainer = styled.div<{ isChange: boolean }>`
    position: relative;
    height: 100%;
    transition-duration: ${(props) => (props.isChange ? 4 : 0)}s;
    bottom: ${(props) => (props.isChange ? 131 : 0)}px;
`;

const ColumnNumberContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const HomeContainer: React.FC = () => {
    const [row, setRow] = useState("");
    const [rowChange, setRowChange] = useState(false);
    const [column, setCoumn] = useState("");
    const debouncedRow = useDebounce(row, 1000);
    const debouncedColumn = useDebounce(column, 1000);

    useEffect(() => {
        if (debouncedRow) {
            const rowParentLayout = document.getElementById("row-layout");
            const newNumber = document.createElement("img");
            newNumber.id = "selected-new-row";
            newNumber.src = debouncedRow;
            newNumber.setAttribute("height", "100%");
            const currentRow = document.getElementById("selected-row");
            currentRow.parentNode.insertBefore(newNumber, currentRow.nextSibling);
            setRowChange(true);

            setTimeout(() => {
                rowParentLayout.removeChild(currentRow);
                setRowChange(false);
                newNumber.id = "selected-row";
            }, 5000);
            // setTimeout(() => {

            //     // const test = document.getElementById("row-layout");
            //     // console.log(test, "테스트");
            //     // document.getElementById("row-layout").style.bottom = "20px";
            // }, 500);
        }
    }, [debouncedRow]);

    useEffect(() => {}, [debouncedColumn]);

    const hoverOnThumbnail = (item: {
        image: string;
        row: string;
        column: string;
        koreanName: string;
        englishName: string;
    }) => {
        if (item.row !== row) {
            setRow(item.row);
        }

        if (item.column !== column) {
            setCoumn(item.column);
        }
    };

    return (
        <HomeContainerLayout>
            <ThumbnailListLayout>
                {THUMBNAIL_DATA.map((t) => {
                    return (
                        <TeamLayout key={t.team}>
                            {t.thumbnailList.map((item, i) => {
                                return (
                                    <ThumbnailItem
                                        key={i}
                                        onMouseOver={() => {
                                            hoverOnThumbnail(item);
                                        }}></ThumbnailItem>
                                );
                            })}
                        </TeamLayout>
                    );
                })}
            </ThumbnailListLayout>
            <BottomLogoLayout>
                <LogoLayout>
                    <Logo src={"/image/main_logo.png"} />
                    <RowColumnLocationLayout>
                        <TestLayout>
                            <RowNumberContainer isChange={rowChange} id="row-layout">
                                <RowNumberImage src={debouncedRow} id="selected-row" />
                            </RowNumberContainer>
                            <CommaImage src={"/image/comma.svg"} />
                            <ColumnNumberContainer>
                                <ColumnNumberImage src={debouncedColumn} />
                            </ColumnNumberContainer>
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
