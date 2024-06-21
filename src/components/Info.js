import React from "react";
import { Link, useParams } from "react-router-dom";

function Info() {

    // useParams() 훅
    let param = useParams();
    console.log(param);

    return (
        <div>
            <ul>
                <li><Link to={"/"}>홈</Link></li>
                <li><Link to={"/user"}>유저페이지</Link></li>
            </ul>
            <h2>{param.num}번 Info</h2>
            <p>이 페이지는 React Router를 이용한 페이지 처리 결과 임.</p>
        </div>
    )

}

export default Info;