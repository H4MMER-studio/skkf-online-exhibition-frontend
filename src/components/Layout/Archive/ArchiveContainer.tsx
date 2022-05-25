import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import DesignerList from "./components/DesignerList";
import Contents from "./components/Contents";

const STDContainer = styled.div`
    display: flex;
    height: 100%;
`;

const ArchiveContainer: React.VFC = () => {
    return (
        <STDContainer>
            <DesignerList dataList={CONTENTS_DATA} />
            <div>
                <Contents />
            </div>
        </STDContainer>
    );
};

export default ArchiveContainer;

const CONTENTS_DATA: {
    id: string;
    image: string;
    coordinate?: string;
    row: string;
    column: string;
    koreanName: string;
    englishName: string;
}[] = [
    {
        id: "Infinitas-1",
        image: "",
        coordinate: "(1,1)",
        row: "/image/f_1.svg",
        column: "/image/b_1.svg",
        koreanName: "김혜준",
        englishName: "Heyjune Kim",
    },
    {
        id: "Infinitas-2",
        image: "",
        coordinate: "(1,2)",
        row: "/image/f_1.svg",
        column: "/image/b_2.svg",
        koreanName: "이명훈",
        englishName: "Myunghoon Lee",
    },
    {
        id: "Infinitas-3",
        image: "",
        coordinate: "(1,3)",
        row: "/image/f_1.svg",
        column: "/image/b_3.svg",
        koreanName: "윤담희",
        englishName: "Damhee Yun",
    },
    {
        id: "Infinitas-4",
        image: "",
        coordinate: "(1,4)",
        row: "/image/f_1.svg",
        column: "/image/b_4.svg",
        koreanName: "박연제",
        englishName: "Yeonje Park",
    },
    {
        id: "Infinitas-5",
        image: "",
        coordinate: "(1,5)",
        row: "/image/f_1.svg",
        column: "/image/b_5.svg",
        koreanName: "박서진",
        englishName: "Seojin Park",
    },
    {
        id: "Infinitas-6",
        image: "",
        coordinate: "(1,6)",
        row: "/image/f_1.svg",
        column: "/image/b_6.svg",
        koreanName: "오유",
        englishName: "Wu YU",
    },
    {
        id: "Infinitas-7",
        image: "",
        coordinate: "(1,7)",
        row: "/image/f_1.svg",
        column: "/image/b_7.svg",
        koreanName: "박선영",
        englishName: "Sunyoung Park",
    },
    {
        id: "Spectrum-1",
        image: "",
        coordinate: "(2,1)",
        row: "/image/f_2.svg",
        column: "/image/b_1.svg",
        koreanName: "최규빈",
        englishName: "Gyubin Choi",
    },
    {
        id: "Spectrum-2",
        image: "",
        coordinate: "(2,2)",
        row: "/image/f_2.svg",
        column: "/image/b_2.svg",
        koreanName: "최희원",
        englishName: "Heewon Choi",
    },
    {
        id: "Spectrum-3",
        image: "",
        coordinate: "(2,3)",
        row: "/image/f_2.svg",
        column: "/image/b_3.svg",
        koreanName: "이윤창",
        englishName: "Yunchang Lee",
    },
    {
        id: "Spectrum-4",
        image: "",
        coordinate: "(2,4)",
        row: "/image/f_2.svg",
        column: "/image/b_4.svg",
        koreanName: "오근택",
        englishName: "Geuntaek oh",
    },
    {
        id: "Spectrum-5",
        image: "",
        coordinate: "(2,5)",
        row: "/image/f_2.svg",
        column: "/image/b_5.svg",
        koreanName: "김성빈",
        englishName: "Seonbin Kim",
    },
    {
        id: "Spectrum-6",
        image: "",
        coordinate: "(2,6)",
        row: "/image/f_2.svg",
        column: "/image/b_6.svg",
        koreanName: "이정은",
        englishName: "Jeongun Lee",
    },
    {
        id: "Spectrum-7",
        image: "",
        coordinate: "(2,7)",
        row: "/image/f_2.svg",
        column: "/image/b_7.svg",
        koreanName: "도비안",
        englishName: "Nguyen Thanh Van Do",
    },
    {
        id: "Spectrum-8",
        image: "",
        coordinate: "(2,8)",
        row: "/image/f_2.svg",
        column: "/image/b_8.svg",
        koreanName: "공정인",
        englishName: "Jeongin Gong",
    },
    {
        id: "Spectrum-9",
        image: "",
        coordinate: "(2,9)",
        row: "/image/f_2.svg",
        column: "/image/b_9.svg",
        koreanName: "변혜민",
        englishName: "Hyemin Byun",
    },

    {
        id: "TeleportTo-1",
        image: "",
        coordinate: "(3,1)",
        row: "/image/f_3.svg",
        column: "/image/b_1.svg",
        koreanName: "이주은",
        englishName: "Jueun Lee",
    },
    {
        id: "TeleportTo-2",
        image: "",
        coordinate: "(3,2)",
        row: "/image/f_3.svg",
        column: "/image/b_2.svg",
        koreanName: "박지완",
        englishName: "Jiwan Park",
    },
    {
        id: "TeleportTo-3",
        image: "",
        coordinate: "(3,3)",
        row: "/image/f_3.svg",
        column: "/image/b_3.svg",
        koreanName: "이정근",
        englishName: "Jeonggeun Lee",
    },
    {
        id: "TeleportTo-4",
        image: "",
        coordinate: "(3,4)",
        row: "/image/f_3.svg",
        column: "/image/b_4.svg",
        koreanName: "정서희",
        englishName: "Seohee Jeong",
    },
    {
        id: "TeleportTo-5",
        image: "",
        coordinate: "(3,5)",
        row: "/image/f_3.svg",
        column: "/image/b_5.svg",
        koreanName: "김민아",
        englishName: "Minah Kim",
    },
    {
        id: "TeleportTo-6",
        image: "",
        coordinate: "(3,6)",
        row: "/image/f_3.svg",
        column: "/image/b_6.svg",
        koreanName: "최지현",
        englishName: "Jiyun Choi",
    },
    {
        id: "TeleportTo-7",
        image: "",
        coordinate: "(3,7)",
        row: "/image/f_3.svg",
        column: "/image/b_7.svg",
        koreanName: "최이준",
        englishName: "Ijun Choi",
    },
    {
        id: "TeleportTo-8",
        image: "",
        coordinate: "(3,8)",
        row: "/image/f_3.svg",
        column: "/image/b_8.svg",
        koreanName: "",
        englishName: "",
    },
    {
        id: "Textureacit-1",
        image: "",
        coordinate: "(4,1)",
        row: "/image/f_4.svg",
        column: "/image/b_1.svg",
        koreanName: "김민경",
        englishName: "Minkyung Kim",
    },
    {
        id: "Textureacit-2",
        image: "",
        coordinate: "(4,2)",
        row: "/image/f_4.svg",
        column: "/image/b_2.svg",
        koreanName: "최희재",
        englishName: "Heejae Choi",
    },
    {
        id: "Textureacit-3",
        image: "",
        coordinate: "(4,3)",
        row: "/image/f_4.svg",
        column: "/image/b_3.svg",
        koreanName: "정예송",
        englishName: "Yesong Jung",
    },
    {
        id: "Textureacit-4",
        image: "",
        coordinate: "(4,4)",
        row: "/image/f_4.svg",
        column: "/image/b_4.svg",
        koreanName: "구소윤",
        englishName: "Soyoon Koo",
    },
    {
        id: "Textureacit-5",
        image: "",
        coordinate: "(4,5)",
        row: "/image/f_4.svg",
        column: "/image/b_5.svg",
        koreanName: "홍예진",
        englishName: "Yejin Hong",
    },
    {
        id: "Textureacit-6",
        image: "",
        coordinate: "(4,6)",
        row: "/image/f_4.svg",
        column: "/image/b_6.svg",
        koreanName: "한희조",
        englishName: "Heejo Han",
    },
];
