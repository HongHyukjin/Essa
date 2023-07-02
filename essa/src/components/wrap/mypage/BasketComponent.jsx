import React from 'react';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';

function BasketComponent(props) {
    return (
        <>
        <HeaderComponent/>
        <div id='basket'>
            <div className="container">
                <div className="gap">
                    <div className="row1">
                        <div className="row1-tit">
                            <h1>장바구니</h1>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="row2-basket-box">
                            <span>장바구니에 담겨있는 상품이 없습니다</span>
                        </div>
                    </div>
                    <div className="row3">
                        <div className="go-home-btn">
                            <a href="!#">쇼핑 계속하기</a>
                        </div>
                    </div>
                    <div className="row4">
                        <div className="row4-price-sum">
                            <div className="price-sum-list">
                                <dl>
                                    <dt>
                                        총<strong className='total-product'>0</strong>개의 상품금액
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
                </div>
            </div>
        </div>
        <FooterComponent/>
        </>
    );
}

export default BasketComponent;