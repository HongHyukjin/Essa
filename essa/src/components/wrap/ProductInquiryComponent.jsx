import React from 'react';
import './scss/product_inquiry.scss';

export default function ProductInquiryComponent (){
    return (
        <div id='ProductInquiry'>
             <div className="container">
                <div className="title">
                    <h2>상품문의</h2>
                </div>
                <div className="content">
                    <div className="board_nav">
                        <ul>
                            <li><a className='on' href="!#">공지사항</a></li>
                            <li><a className='' href="!#">상품문의</a></li>
                            <li><a className='' href="!#">자주하는 질문</a></li>
                            <li><a className='' href="!#">AS문의</a></li>
                            <li><a className='' href="!#">케어서비스</a></li>
                        </ul>
                    </div>
                    <div className="board_zone_cont">
                        <div className="board_zone_list">
                            <div className="date_check_box">
                                <form action="">
                                    <h3>조회기간</h3>
                                    <div className="date_check_list">
                                        <button type='button'>오늘</button>
                                        <button type='button'>7일</button>
                                        <button type='button'>15일</button>
                                        <button type='button'>1개월</button>
                                        <button type='button'>3개월</button>
                                        <button type='button'>1년</button>
                                    </div>
                                    <div className="date_check_calendar">
                                        <input type="text" id="picker2" name="rangDate[]" className='anniversary js_datepicker'/> ~&nbsp; 
                                        <input type="text" name="rangDate[]" id=""className='anniversary js_datepicker' />
                                    </div>
                                    <div className="btn_date_check">
                                        <em>조회</em>
                                    </div>
                                </form>
                            </div>
                           
                            <table className='board_list_table'>
                                <colgroup>
                                    <col style={{width:'10%'}}/> {/* 문의날짜 */}
                                    <col style={{width:'15%'}}/> {/* 카테고리 */}
                                    <col style={{width:'10%'}}/> {/* 작성자 */}
                                    <col style={{width:'10%'}}/> {/* 문의상태 */}
                                    <col style={{width:'10%'}}/> {/* 답변시간 */}
                        
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>문의날짜</th>
                                        <th>카테고리</th>
                                        <th>제목</th>
                                        <th>작성자</th>
                                        <th>문의상태</th>
                                        <th>답변시간</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> 19:50 </td>
                                        <td> [상품] </td>
                                        <td className='board_tit'>
                                            <a href="!#">
                                                <strong>상품문의입니다.</strong>
                                                <img src="https://cdn-pro-web-153-127.cdn-nhncommerce.com/jakomo2_godomall_com/data/skin/front/essa2023/board/skin/qa/img/icon/icon_board_attach_file.png" alt="" />
                                                <img src="https://cdn-pro-web-153-127.cdn-nhncommerce.com/jakomo2_godomall_com/data/skin/front/essa2023/board/skin/qa/img/icon/icon_board_new.png" alt="" />
                                            </a>     
                                        </td>
                                        <td> 신** </td>
                                        <td> 접수 </td>
                                        <td> 2023.06.27 </td>
                                    </tr>
                                </tbody>
                            </table>
                           
                        </div>
                        <div className="btn_right_box">
                            <button type='button' className='btn_write'>
                                <strong>1:1 문의하기</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
