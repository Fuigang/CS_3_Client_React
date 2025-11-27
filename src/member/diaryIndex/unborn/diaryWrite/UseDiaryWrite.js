import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function UseDiaryWrite() {
    const navigate = useNavigate();


    //--------------------------------상태변수 모음
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");




    //--------------------------------작성 완료시
    const handleComplete = () => {
        if (!title.trim()) return alert("제목을 입력해주세요");

        // 완료 시 이동할 공간

        navigate(-1);
    };

    return {
        title,
        setTitle,
        content,
        handleComplete

    }
}