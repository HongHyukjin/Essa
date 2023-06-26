import React from 'react';
import $ from 'jquery';

export default function Section4Component (props) {

    const onMouseEnterShowBtnBox = (e) => {
        e.preventDefault();
        $(e.target).next().animate({opacity:1}, 200)
        $(e.target).next().css({transform : "translateY(0)"})
    }

    const onMouseLeaveHideBtnBox = (e) => {
        e.preventDefault();
        $(e.target).next().animate({opacity: 0}, 200)
        $(e.target).next().css({transform: "translateY(200%)"})
    }


    return (
        <div id='section4'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2 className='main-title'>Weekly Sofa</h2>
                    </div>
                    <div className="content">
                        <div className="title2">
                            <ul>
                                <li>
                                    <a className='on' href="!#">BEST</a> 
                                </li>
                                <li >
                                    <a  className='on' href="!#">SELECT</a>
                                </li>
                            </ul>
                        </div>
                        <div className="top">
                            <div className="product_box">
                                <ul>
                                    <li>
                                        <div className="item_cont">
                                            <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="item_photo_box">
                                                    <img src="./img/section4/section4_01.jpg" alt="" />
                                                    <div className="button-box">
                                                        <div className="button">
                                                            <button><img src="./img/product_01.png" alt="" /></button>
                                                            <button><img src="./img/product_02.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                               
                                            </div>
                                            <div className="item_info_cont">
                                                <div className="item_tit_box">
                                                    <strong className='item_name'>미라벨 4인 카시미라 패브릭 소파</strong>
                                                    <p className='item_name_explain'>#5% 할인 혜택 (~6/30)</p>
                                                </div>
                                                <div className="item_money_box">
                                                    <strong className='item_sale'>3,100,000원</strong>
                                                    <strong className='m_price'>2,945,000원</strong>
                                                    <span className='sale_per'>5%</span>
                                                </div>
                                                <div className="item_icon_box">
                                                    <img src="./img/i_coupon.jpg" alt="" />
                                                    <img src="./img/gickyoung.png" alt="" />
                                                </div>
                                                <div className="item_review_cnt">
                                                    <ul>
                                                        <li>
                                                            <a href="!#">
                                                            <span class="material-symbols-outlined"></span>
                                                                <span>12</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="product_box">
                                <ul>
                                    <li>
                                        <div className="item_cont">
                                            <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="item_photo_box">
                                                    <img src="./img/section4/section4_02.jpg" alt="" />
                                                    <div className="button-box">
                                                        <div className="button">
                                                            <button><img src="./img/product_01.png" alt="" /></button>
                                                            <button><img src="./img/product_02.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                               
                                            </div>
                                            <div className="item_info_cont">
                                                <div className="item_tit_box">
                                                    <strong className='item_name'>미라벨 4인 카시미라 패브릭 소파</strong>
                                                    <p className='item_name_explain'>#5% 할인 혜택 (~6/30)</p>
                                                </div>
                                                <div className="item_money_box">
                                                    <strong className='item_sale'>3,100,000원</strong>
                                                    <strong className='m_price'>2,945,000원</strong>
                                                    <span className='sale_per'>5%</span>
                                                </div>
                                                <div className="item_icon_box">
                                                    <img src="./img/i_coupon.jpg" alt="" />
                                                    <img src="./img/gickyoung.png" alt="" />
                                                </div>
                                                <div className="item_review_cnt">
                                                    <ul>
                                                        <li>
                                                            <a href="!#">
                                                            <span class="material-symbols-outlined"></span>
                                                                <span>12</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="product_box">
                                <ul>
                                    <li>
                                        <div className="item_cont">
                                            <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="item_photo_box">
                                                    <img src="./img/section4/section4_03.jpg" alt="" />
                                                    <div className="button-box">
                                                        <div className="button">
                                                            <button><img src="./img/product_01.png" alt="" /></button>
                                                            <button><img src="./img/product_02.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                               
                                            </div>
                                            <div className="item_info_cont">
                                                <div className="item_tit_box">
                                                    <strong className='item_name'>미라벨 4인 카시미라 패브릭 소파</strong>
                                                    <p className='item_name_explain'>#5% 할인 혜택 (~6/30)</p>
                                                </div>
                                                <div className="item_money_box">
                                                    <strong className='item_sale'>3,100,000원</strong>
                                                    <strong className='m_price'>2,945,000원</strong>
                                                    <span className='sale_per'>5%</span>
                                                </div>
                                                <div className="item_icon_box">
                                                    <img src="./img/i_coupon.jpg" alt="" />
                                                    <img src="./img/gickyoung.png" alt="" />
                                                </div>
                                                <div className="item_review_cnt">
                                                    <ul>
                                                        <li>
                                                            <a href="!#">
                                                            <span class="material-symbols-outlined"></span>
                                                                <span>12</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="product_box">
                                <ul>
                                    <li>
                                        <div className="item_cont">
                                            <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="item_photo_box">
                                                    <img src="./img/section4/section4_04.jpg" alt="" />
                                                    <div className="button-box">
                                                        <div className="button">
                                                            <button><img src="./img/product_01.png" alt="" /></button>
                                                            <button><img src="./img/product_02.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                               
                                            </div>
                                            <div className="item_info_cont">
                                                <div className="item_tit_box">
                                                    <strong className='item_name'>미라벨 4인 카시미라 패브릭 소파</strong>
                                                    <p className='item_name_explain'>#5% 할인 혜택 (~6/30)</p>
                                                </div>
                                                <div className="item_money_box">
                                                    <strong className='item_sale'>3,100,000원</strong>
                                                    <strong className='m_price'>2,945,000원</strong>
                                                    <span className='sale_per'>5%</span>
                                                </div>
                                                <div className="item_icon_box">
                                                    <img src="./img/i_coupon.jpg" alt="" />
                                                    <img src="./img/gickyoung.png" alt="" />
                                                </div>
                                                <div className="item_review_cnt">
                                                    <ul>
                                                        <li>
                                                            <a href="!#">
                                                            <span class="material-symbols-outlined"></span>
                                                                <span>12</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="product_box">
                                <ul>
                                    <li>
                                        <div className="item_cont">
                                            <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="item_photo_box">
                                                    <img src="./img/section4/section4_05.jpg" alt="" />
                                                    <div className="button-box">
                                                        <div className="button">
                                                            <button><img src="./img/product_01.png" alt="" /></button>
                                                            <button><img src="./img/product_02.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                               
                                            </div>
                                            <div className="item_info_cont">
                                                <div className="item_tit_box">
                                                    <strong className='item_name'>미라벨 4인 카시미라 패브릭 소파</strong>
                                                    <p className='item_name_explain'>#5% 할인 혜택 (~6/30)</p>
                                                </div>
                                                <div className="item_money_box">
                                                    <strong className='item_sale'>3,100,000원</strong>
                                                    <strong className='m_price'>2,945,000원</strong>
                                                    <span className='sale_per'>5%</span>
                                                </div>
                                                <div className="item_icon_box">
                                                    <img src="./img/i_coupon.jpg" alt="" />
                                                    <img src="./img/gickyoung.png" alt="" />
                                                </div>
                                                <div className="item_review_cnt">
                                                    <ul>
                                                        <li>
                                                            <a href="!#">
                                                            <span class="material-symbols-outlined"></span>
                                                                <span>12</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="product_box">
                                <ul>
                                    <li>
                                        <div className="item_cont">
                                            <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="item_photo_box">
                                                    <img src="./img/section4/section4_06.jpg" alt="" />
                                                    <div className="button-box">
                                                        <div className="button">
                                                            <button><img src="./img/product_01.png" alt="" /></button>
                                                            <button><img src="./img/product_02.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                               
                                            </div>
                                            <div className="item_info_cont">
                                                <div className="item_tit_box">
                                                    <strong className='item_name'>미라벨 4인 카시미라 패브릭 소파</strong>
                                                    <p className='item_name_explain'>#5% 할인 혜택 (~6/30)</p>
                                                </div>
                                                <div className="item_money_box">
                                                    <strong className='item_sale'>3,100,000원</strong>
                                                    <strong className='m_price'>2,945,000원</strong>
                                                    <span className='sale_per'>5%</span>
                                                </div>
                                                <div className="item_icon_box">
                                                    <img src="./img/i_coupon.jpg" alt="" />
                                                    <img src="./img/gickyoung.png" alt="" />
                                                </div>
                                                <div className="item_review_cnt">
                                                    <ul>
                                                        <li>
                                                            <a href="!#">
                                                            <span class="material-symbols-outlined"></span>
                                                                <span>12</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="product_box">
                                <ul>
                                    <li>
                                        <div className="item_cont">
                                            <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="item_photo_box">
                                                    <img src="./img/section4/section4_07.jpg" alt="" />
                                                    <div className="button-box">
                                                        <div className="button">
                                                            <button><img src="./img/product_01.png" alt="" /></button>
                                                            <button><img src="./img/product_02.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                               
                                            </div>
                                            <div className="item_info_cont">
                                                <div className="item_tit_box">
                                                    <strong className='item_name'>미라벨 4인 카시미라 패브릭 소파</strong>
                                                    <p className='item_name_explain'>#5% 할인 혜택 (~6/30)</p>
                                                </div>
                                                <div className="item_money_box">
                                                    <strong className='item_sale'>3,100,000원</strong>
                                                    <strong className='m_price'>2,945,000원</strong>
                                                    <span className='sale_per'>5%</span>
                                                </div>
                                                <div className="item_icon_box">
                                                    <img src="./img/i_coupon.jpg" alt="" />
                                                    <img src="./img/gickyoung.png" alt="" />
                                                </div>
                                                <div className="item_review_cnt">
                                                    <ul>
                                                        <li>
                                                            <a href="!#">
                                                            <span class="material-symbols-outlined"></span>
                                                                <span>12</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="product_box">
                                <ul>
                                    <li>
                                        <div className="item_cont">
                                            <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="item_photo_box">
                                                    <img src="./img/section4/section4_08.jpg" alt="" />
                                                    <div className="button-box">
                                                        <div className="button">
                                                            <button><img src="./img/product_01.png" alt="" /></button>
                                                            <button><img src="./img/product_02.png" alt="" /></button>
                                                        </div>
                                                    </div>
                                               
                                            </div>
                                            <div className="item_info_cont">
                                                <div className="item_tit_box">
                                                    <strong className='item_name'>미라벨 4인 카시미라 패브릭 소파</strong>
                                                    <p className='item_name_explain'>#5% 할인 혜택 (~6/30)</p>
                                                </div>
                                                <div className="item_money_box">
                                                    <strong className='item_sale'>3,100,000원</strong>
                                                    <strong className='m_price'>2,945,000원</strong>
                                                    <span className='sale_per'>5%</span>
                                                </div>
                                                <div className="item_icon_box">
                                                    <img src="./img/i_coupon.jpg" alt="" />
                                                    <img src="./img/gickyoung.png" alt="" />
                                                </div>
                                                <div className="item_review_cnt">
                                                    <ul>
                                                        <li>
                                                            <a href="!#">
                                                            <span class="material-symbols-outlined"></span>
                                                                <span>12</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

