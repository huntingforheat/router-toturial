import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import User from "./User";

function Profiles() {

    return (
        <div>
            <h3>유저 목록</h3>
            <ul>
                <li><Link to={'/profiles/testuser'}>testuser</Link></li>
                <li><Link to={'/profiles/testuser2'}>testuser2</Link></li>
            </ul>
            <hr />
            {/* <Outlet>을 사용하여 하위 컴포넌트를 출력 */}
            <Outlet />
            {/* 하위 경로 설정 */}
        </div>
    );
}

export default Profiles;