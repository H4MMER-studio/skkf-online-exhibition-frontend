import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useResize } from "@/hooks";
import DesignerList from "./components/DesignerList";
import Contents from "./components/Contents";
import BottomContentList from "./components/BottomContentList";
import { useRouter } from "next/router";

const STDContainer = styled.div`
    display: flex;
    margin-top: 24px;

    @media (max-width: 1023px) {
        flex-direction: column;
    }
`;

const STDContentsWrapper = styled.div`
    position: relative;
    min-width: 0;
`;

const ArchiveContainer: React.VFC = () => {
    const [headerHeight, setHeaderHeight] = useState<number | null>(null);
    const [videoEle, setVideEle] = useState<HTMLVideoElement>();
    const { width } = useResize();
    const router = useRouter();
    const query = router.query as { designer: string };

    useEffect(() => {
        const nav = document.getElementById("nav-bar");
        setHeaderHeight(nav.offsetHeight);
    }, [width]);

    useEffect(() => {
        if (query.designer && videoEle) {
            const currentTime = CONTENTS_DATA.find((c) => c.id === query.designer).startTime;
            console.log(currentTime, "현재 시간");
            clickMoveVideo(currentTime);
        }
    }, [query.designer]);

    const clickMoveVideo = (time: number) => {
        videoEle.currentTime = time;
    };

    return (
        <STDContainer>
            <DesignerList dataList={CONTENTS_DATA} headerHeight={headerHeight} clickMoveVideo={clickMoveVideo} />
            <STDContentsWrapper>
                <Contents headerHeight={headerHeight} setVideoEle={setVideEle} />
                <BottomContentList />
            </STDContentsWrapper>
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
    startTime: number;
}[] = [
    {
        id: "Infinitas-1",
        image: "",
        coordinate: "(1,1)",
        row: "/image/f_1.svg",
        column: "/image/b_1.svg",
        koreanName: "김혜준",
        englishName: "Heyjune Kim",
        startTime: 300,
    },
    {
        id: "Infinitas-2",
        image: "",
        coordinate: "(1,2)",
        row: "/image/f_1.svg",
        column: "/image/b_2.svg",
        koreanName: "이명훈",
        englishName: "Myunghoon Lee",
        startTime: 600,
    },
    {
        id: "Infinitas-3",
        image: "",
        coordinate: "(1,3)",
        row: "/image/f_1.svg",
        column: "/image/b_3.svg",
        koreanName: "윤담희",
        englishName: "Damhee Yun",
        startTime: 1000,
    },
    {
        id: "Infinitas-4",
        image: "",
        coordinate: "(1,4)",
        row: "/image/f_1.svg",
        column: "/image/b_4.svg",
        koreanName: "박연제",
        englishName: "Yeonje Park",
        startTime: 1000,
    },
    {
        id: "Infinitas-5",
        image: "",
        coordinate: "(1,5)",
        row: "/image/f_1.svg",
        column: "/image/b_5.svg",
        koreanName: "박서진",
        englishName: "Seojin Park",
        startTime: 1000,
    },
    {
        id: "Infinitas-6",
        image: "",
        coordinate: "(1,6)",
        row: "/image/f_1.svg",
        column: "/image/b_6.svg",
        koreanName: "오유",
        englishName: "Wu YU",
        startTime: 1000,
    },
    {
        id: "Infinitas-7",
        image: "",
        coordinate: "(1,7)",
        row: "/image/f_1.svg",
        column: "/image/b_7.svg",
        koreanName: "박선영",
        englishName: "Sunyoung Park",
        startTime: 100,
    },
    {
        id: "Spectrum-1",
        image: "",
        coordinate: "(2,1)",
        row: "/image/f_2.svg",
        column: "/image/b_1.svg",
        koreanName: "최규빈",
        englishName: "Gyubin Choi",
        startTime: 10,
    },
    {
        id: "Spectrum-2",
        image: "",
        coordinate: "(2,2)",
        row: "/image/f_2.svg",
        column: "/image/b_2.svg",
        koreanName: "최희원",
        englishName: "Heewon Choi",
        startTime: 1000,
    },
    {
        id: "Spectrum-3",
        image: "",
        coordinate: "(2,3)",
        row: "/image/f_2.svg",
        column: "/image/b_3.svg",
        koreanName: "이윤창",
        englishName: "Yunchang Lee",
        startTime: 1000,
    },
    {
        id: "Spectrum-4",
        image: "",
        coordinate: "(2,4)",
        row: "/image/f_2.svg",
        column: "/image/b_4.svg",
        koreanName: "오근택",
        englishName: "Geuntaek oh",
        startTime: 1000,
    },
    {
        id: "Spectrum-5",
        image: "",
        coordinate: "(2,5)",
        row: "/image/f_2.svg",
        column: "/image/b_5.svg",
        koreanName: "김성빈",
        englishName: "Seonbin Kim",
        startTime: 1000,
    },
    {
        id: "Spectrum-6",
        image: "",
        coordinate: "(2,6)",
        row: "/image/f_2.svg",
        column: "/image/b_6.svg",
        koreanName: "이정은",
        englishName: "Jeongun Lee",
        startTime: 1000,
    },
    {
        id: "Spectrum-7",
        image: "",
        coordinate: "(2,7)",
        row: "/image/f_2.svg",
        column: "/image/b_7.svg",
        koreanName: "도비안",
        englishName: "Nguyen Thanh Van Do",
        startTime: 1000,
    },
    {
        id: "Spectrum-8",
        image: "",
        coordinate: "(2,8)",
        row: "/image/f_2.svg",
        column: "/image/b_8.svg",
        koreanName: "공정인",
        englishName: "Jeongin Gong",
        startTime: 1000,
    },
    {
        id: "Spectrum-9",
        image: "",
        coordinate: "(2,9)",
        row: "/image/f_2.svg",
        column: "/image/b_9.svg",
        koreanName: "변혜민",
        englishName: "Hyemin Byun",
        startTime: 1000,
    },

    {
        id: "TeleportTo-1",
        image: "",
        coordinate: "(3,1)",
        row: "/image/f_3.svg",
        column: "/image/b_1.svg",
        koreanName: "이주은",
        englishName: "Jueun Lee",
        startTime: 1000,
    },
    {
        id: "TeleportTo-2",
        image: "",
        coordinate: "(3,2)",
        row: "/image/f_3.svg",
        column: "/image/b_2.svg",
        koreanName: "박지완",
        englishName: "Jiwan Park",
        startTime: 1000,
    },
    {
        id: "TeleportTo-3",
        image: "",
        coordinate: "(3,3)",
        row: "/image/f_3.svg",
        column: "/image/b_3.svg",
        koreanName: "이정근",
        englishName: "Jeonggeun Lee",
        startTime: 1000,
    },
    {
        id: "TeleportTo-4",
        image: "",
        coordinate: "(3,4)",
        row: "/image/f_3.svg",
        column: "/image/b_4.svg",
        koreanName: "정서희",
        englishName: "Seohee Jeong",
        startTime: 1000,
    },
    {
        id: "TeleportTo-5",
        image: "",
        coordinate: "(3,5)",
        row: "/image/f_3.svg",
        column: "/image/b_5.svg",
        koreanName: "김민아",
        englishName: "Minah Kim",
        startTime: 1000,
    },
    {
        id: "TeleportTo-6",
        image: "",
        coordinate: "(3,6)",
        row: "/image/f_3.svg",
        column: "/image/b_6.svg",
        koreanName: "최지현",
        englishName: "Jiyun Choi",
        startTime: 1000,
    },
    {
        id: "TeleportTo-7",
        image: "",
        coordinate: "(3,7)",
        row: "/image/f_3.svg",
        column: "/image/b_7.svg",
        koreanName: "최이준",
        englishName: "Ijun Choi",
        startTime: 1000,
    },
    {
        id: "TeleportTo-8",
        image: "",
        coordinate: "(3,8)",
        row: "/image/f_3.svg",
        column: "/image/b_8.svg",
        koreanName: "",
        englishName: "",
        startTime: 1000,
    },
    {
        id: "Textureacit-1",
        image: "",
        coordinate: "(4,1)",
        row: "/image/f_4.svg",
        column: "/image/b_1.svg",
        koreanName: "김민경",
        englishName: "Minkyung Kim",
        startTime: 1000,
    },
    {
        id: "Textureacit-2",
        image: "",
        coordinate: "(4,2)",
        row: "/image/f_4.svg",
        column: "/image/b_2.svg",
        koreanName: "최희재",
        englishName: "Heejae Choi",
        startTime: 1000,
    },
    {
        id: "Textureacit-3",
        image: "",
        coordinate: "(4,3)",
        row: "/image/f_4.svg",
        column: "/image/b_3.svg",
        koreanName: "정예송",
        englishName: "Yesong Jung",
        startTime: 1000,
    },
    {
        id: "Textureacit-4",
        image: "",
        coordinate: "(4,4)",
        row: "/image/f_4.svg",
        column: "/image/b_4.svg",
        koreanName: "구소윤",
        englishName: "Soyoon Koo",
        startTime: 1000,
    },
    {
        id: "Textureacit-5",
        image: "",
        coordinate: "(4,5)",
        row: "/image/f_4.svg",
        column: "/image/b_5.svg",
        koreanName: "홍예진",
        englishName: "Yejin Hong",
        startTime: 1000,
    },
    {
        id: "Textureacit-6",
        image: "",
        coordinate: "(4,6)",
        row: "/image/f_4.svg",
        column: "/image/b_6.svg",
        koreanName: "한희조",
        englishName: "Heejo Han",
        startTime: 1000,
    },
];
