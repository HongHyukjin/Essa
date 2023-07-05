import React from 'react';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';
import { Link } from 'react-router-dom';

function BasketComponent({getViewProduct,key,cartCountNumber}) {
    return (
        <>
        <HeaderComponent/>
        <div id='basket'>
            <div className="container">
                <div className="gap">
                    <div className="link-box">
                            <ul>
                                <li><Link to="/메인">HOME</Link></li>
                                <li>장바구니</li>
                            </ul>
                        </div>
                    <div className="row1">
                        <div className="row1-tit">
                            <h1>장바구니</h1>
                        </div>
                        <div className="order">
                            <ul>
                                <li><span>01</span> 장바구니<img src="./img/icon_join_step_on.png" alt="" /></li>
                                <li><span>02</span> 주문서작성/결제<img src="./img/icon_join_step_off.png" alt="" /></li>
                                <li><span>03</span> 주문완료</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row2">
                        {/* <div className="row2-basket-box">
                            <span>장바구니에 담겨있는 상품이 없습니다</span>
                        </div> */}
                        <div className="row2-cart">
                            <table>
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" className='on' /></th>
                                        <th>상품/옵션 정보</th>
                                        <th>수량</th>
                                        <th>상품금액</th>
                                        <th>할인/적립</th>
                                        <th>합계금액</th>
                                        <th>배송비</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <div className="pick-img">
                                                <a href="!#"><img src="./img/product/1000004220_list_017.jpg" alt="" /></a>
                                            </div>
                                            <div className="pick-info">
                                                <img src="./img/product/btn_coupon_apply.png" alt="" />
                                                <a href="!#"><h3>루카스 3.5인 헤드기능 리브 패브릭 소파</h3></a>
                                                <p>색상 : 얼그레이 </p>
                                                <p>스툴 : 선택안함 </p>
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <h3>1개</h3>
                                            <button>옵션/수량변경</button>
                                        </td>
                                        <td>
                                            2,200,000원
                                        </td>
                                        <td>
                                            <span>상품 할인</span>
                                            <p>-330,000원</p>
                                        </td>
                                        <td>
                                            1,870,000원
                                        </td>
                                        <td>
                                            자체배송<br />무료배송<br />(택배-선결제)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row3">
                        <div className="go-home-btn">
                            <Link to="/쇼핑">&lt; 쇼핑 계속하기</Link>
                        </div>
                    </div>
                    <div className="row4">
                        <div className="row4-price-sum">
                            <div className="price-sum-list">
                                <dl>
                                    <dt>
                                        총<strong className='total-product'> 0 </strong>개의 상품금액
                                    </dt>
                                    <dd>
                                        <strong className='total-price'>0</strong>원
                                    </dd>
                                </dl>
                                <span><img src="../img/order_price_plus.png" alt="" /></span>
                                <dl>
                                    <dt>배송비</dt>
                                    <dd><strong className='total-delivery'>0</strong>원</dd>
                                </dl>
                                <span>
                                    <img src="../img/order_price_total.png" alt="" />
                                </span>
                                <dl className='price-total'>
                                    <dt>합계</dt>
                                    <dd>
                                        <strong className='alltotal-price'>0</strong>원
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="row5">
                        <div className="btn-box">
                            <button>선택 상품 삭제</button>
                            <button>선택 상품 찜</button>
                            <button>견적서 출력</button>
                        </div>
                        <div className="sale-info">
                            <p>주문서 작성단계에서 할인/마일리지 적용을 하실 수 있습니다.</p>
                        </div>
                    </div>
                    <div className="row6">
                        <button>선택 상품 주문</button>
                        <button className='all'>전체 상품 주문</button>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent/>
        </>
    );
}

export default BasketComponent;