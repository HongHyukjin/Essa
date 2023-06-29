import React from 'react';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';

function UpdateComponent(props) {
    return (
        <>
        <HeaderComponent/>
        <div id='update'>
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
                            <div className="mypage-cont">
                                <div className="mypage-password">
                                    <div className="mypage-tit">
                                        <h2>회원정보 변경</h2>
                                    </div>
                                    <form action="" id='formFind'>
                                        <div className="update-box">
                                            <p>회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해 주세요.</p>
                                            <div className="id-pw-box">
                                                <dl>
                                                    <dt>아이디</dt>
                                                    <dd>
                                                        <strong>marioma</strong>
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>비밀번호</dt>
                                                    <dd>
                                                        <div className="password-waring">
                                                            <input type="password" name='findPassword' id='findPassword' placeholder='비밀번호를 입력해주세요'/>
                                                            <div className="text-waring">
                                                                비밀번호가 일치하지 않습니다.
                                                            </div>
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                        <div className="update-button-box">
                                            <button className='cancel'>취소</button>
                                            <button type='submit' className='btn-pw-certify'>인증하기</button>
                                        </div>
                                    </form>
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

export default UpdateComponent;