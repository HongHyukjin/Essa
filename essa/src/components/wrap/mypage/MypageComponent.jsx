import React from 'react';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';

function MypageComponent(props) {
    return (
        <>
        <HeaderComponent/>
        <div id='mypage'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left-box">
                            <div className="sub-menu-box">
                                <h2>마이페이지</h2>
                                <ul className='sub-menu-mypage'>
                                    <li className='sub-menu-tit'>
                                        쇼핑정보
                                        <ul className='sub-menu-detail'>
                                            <li className='detail-tit'>주문목록 / 배송조회</li>
                                            <li className='detail-tit'>취소 / 반품 /교환내역</li>
                                            <li className='detail-tit'>환불 / 입금내역</li>
                                            <li className='detail-tit'>찜리스트</li>
                                        </ul>
                                    </li>
                                    <li className='sub-menu-tit'>
                                        혜택관리
                                        <ul className='sub-menu-detail'>
                                            <li className='detail-tit'>쿠폰</li>
                                            <li className='detail-tit'>예치금</li>
                                            <li className='detail-tit'>마일리지</li>
                                        </ul>
                                    </li>
                                    <li className='sub-menu-tit'>
                                        고객센터
                                        <ul className='sub-menu-detail'>
                                            <li className='detail-tit'>1:1 문의</li>
                                        </ul>
                                    </li>
                                    <li className='sub-menu-tit'>
                                        회원정보
                                        <ul className='sub-menu-detail'>
                                            <li className='detail-tit'>회원정보 변경</li>
                                            <li className='detail-tit'>회원 탈퇴</li>
                                            <li className='detail-tit'>배송지 관리</li>
                                        </ul>
                                    </li>
                                    <li className='sub-menu-tit'>
                                        나의 상품문의
                                    </li>
                                    <li className='sub-menu-tit'>
                                        나의 플러스리뷰
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="mypage-main">
                                <div className="mypage-row1">
                                    <div className="mypage-name-box">
                                        <div className="name-box">
                                            <span className='user-name'>유영현</span>
                                            <p>marinoma</p>
                                        </div>
                                    </div>
                                    <div className="mypage-point-box">
                                        <ul>
                                            <li><span><em>쿠폰</em><strong>0</strong>장</span></li>
                                            <li><span><em>마일리지</em><strong>20,000</strong>원</span></li>
                                            <li><span><em>예치금</em><strong>0</strong>원</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mypage-row2">
                                    <div className="mypage-order-tit">
                                        <h3>최근 주문 정보</h3>
                                        <span>최근 30일 내에 주문하신 내역입니다.</span>
                                    </div>
                                    <div className="mypage-myinfo-box">
                                        <div className="myinfo-table">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>날짜/주문번호</th>
                                                        <th>상품명/옵션</th>
                                                        <th>상품금액/수량</th>
                                                        <th>주문상태</th>
                                                        <th>확인/리뷰</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className='info-answer'>
                                                        <td colSpan="6">
                                                            <p>조회내역이 없습니다.</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent/>
        </>
    );
}

export default MypageComponent;