import React from 'react';
import './board_scss/board_view.scss';

export default function BoardViewPageComponent (){
    return (
        <div id='boardView'>
            <div className="container">
                <div className="title">
                    <h2>공지사항</h2>
                </div>
                <div className="content">
                    <div className="board-view-box">
                        <div className="board_view_tit">
                            <h3>2022년 설날 연휴 고객센터 조기 업무종료 안내</h3>
                        </div>
                        <div className="board_view_info">
                            <ul>
                                <li><p>ESSA</p></li>
                                <li><em>2022.01.28 15:00:01</em></li>
                                <li><p>조회 158</p></li>
                            </ul>
                        </div>
                        <div className="board_view_content">
                            <div className="seem_cont">
                                <ul>
                                    <li><b>2022년 설날 연휴 고객센터 조기 업무종료 안내</b></li>
                                    <li><span>■ C/S(콜센터) 조기 업무종료 안내 ■</span></li>
                                    <li><span>에싸 콜센터 : 1월 28일(금) 오후 4시 업무 종료</span></li>
                                    <li>
                                        <span>
                                            궁금하신 사항은 에싸몰
                                            <b>게시판을 이용</b>
                                            해주시면
                                        </span>
                                    </li>
                                    <li>신속히 답변드리도록 하겠습니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn_right_box">
                    <button>
                        목록
                    </button>
                </div>
            </div>
        </div>
    );
};

