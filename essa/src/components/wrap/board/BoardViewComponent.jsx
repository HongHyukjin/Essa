import React from 'react';
import { Link } from 'react-router-dom';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';
import './board_scss/board_view.scss';
// 쿼리 스트링 => 키(listNum)와 키값(item.NO)
// 파라미터 => 보내온 파라미터 데이터를 추출(검색)
import {useSearchParams} from 'react-router-dom';
import axios from 'axios';

export default function BoardViewComponent (props){

    const [param, setParam] = useSearchParams();
    const listNum = param.get('listNum');

    const [state, setState] = React.useState({
        notice: {}
    })
    
    const {notice} = state;

    React.useEffect(()=>{
        window.scrollTo(0,0);
        axios({
            url:'./data/notice_page/board.json',
            method:'GET',
        })
        .then((res)=>{
            if(res.status===200){
                // console.log(res.data.notice);
                let result = res.data.notice.filter((item) => item.NO===Number(listNum));
                console.log(result);

                setState({
                    notice: result[0]
                })
            }
        })
        .catch((err)=>{
            console.log('AXIOS 실패!' + err);
        })
    },[]);

     // 글목록으로 이동
     const onClickNoticeList=(e)=>{
        e.preventDefault();
        window.location.pathname = '/고객센터';
    }

    // 글삭제
    const onClickDelete=(e)=>{
        e.preventDefault();
        alert('공지사항 글을 삭제 하시겠습니까?');        
    }

    // 글수정
    const onClickUpdate=(e)=>{
        e.preventDefault();
        // 수정페이지로 이동
        window.location.pathname = '/상품문의글수정';
    }


    return (
        <>
            <HeaderComponent/>
                <div id='boardView'>
                    <div className="container">
                        <div className="title">
                            <h2>공지사항</h2>
                        </div>
                        <div className="content">
                            <div className="board-view-box">
                                <div className="board_view_tit">
                                    <h3>{notice.제목}</h3>
                                </div>
                                <div className="board_view_info">
                                    <ul>
                                        <li><em>{notice.날짜}</em></li>
                                        <li><p>{notice.조회수}</p></li>
                                    </ul>
                                </div>
                                <div className="board_view_content">
                                    <div className="seem_cont">
                                        {/* <ul>
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
                                        </ul> */}
                                            {/* <p dangerouslySetInnerHTML={{ __html: notice.내용.replace(/\n/g, '<br>') }}></p> */}
                                            {/* {notice.내용} */}
                                            <p dangerouslySetInnerHTML={{ __html: (notice && notice.내용) ? notice.내용.replace(/\n/g, '<br>') : '' }}></p>
                                            {/* <p id='result'></p> */}
                                            {/* {document.getElementById("result").innerHTML=notice.내용} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn_right_box">
                            <button onClick={onClickUpdate}><Link to="/고객센터">수정</Link></button>
                            <button onClick={onClickDelete}><Link to="/고객센터">삭제</Link></button>
                            <button onClick={onClickNoticeList}><Link to="/고객센터">목록</Link></button>
                        </div>
                    </div>
                </div>
            <FooterComponent/>
        </>
    );
};

