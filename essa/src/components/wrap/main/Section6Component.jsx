import React from 'react';
import './scss/section6.scss'
import $ from 'jquery';

export default function Section6Component(){
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
        <div id='section6'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2 className='main-title'>MD's Pick</h2>
                    </div>
                    <div className="content">
                        <div className="left-box">
                            <div className="video-wrap">
                                <video muted="muted" autoplay="autoplay" loop playsinline>
                                    {/* <source src='https://essasvr.kr/video/live/lieb_beer.webm' type="video/webm"/> */}
                                    <source src='https://essasvr.kr/video/live/lieb_beer.mp4' type="video/mp4"/>
                                </video>
                                <div className="inner-wrap">
                                    <p>PREMIUM ESSA LIFE</p>
                                    <p>이런소파 어때요?</p>
                                </div>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="right-top-box">
                                <div className="product_box">
                                    <ul>
                                        <li>
                                            <div className="item_cont">
                                                <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="item_photo_box">
                                                        <img src="./img/section6/section6_01.jpg" alt="" />
                                                        <div className="button-box">
                                                            <div className="button">
                                                                <button><img src="./img/product_01.png" alt="" /></button>
                                                                <button><img src="./img/product_02.png" alt="" /></button>
                                                            </div>
                                                        </div>
                                                
                                                </div>
                                                <div className="item_info_cont">
                                                    <div className="item_tit_box">
                                                        <strong className='item_name'>로프트 4인 오픈코너형 리브 패브릭 소파</strong>
                                                        
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
                                                        <img src="./img/section6/section6_02.jpg" alt="" />
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
                                                        <img src="./img/section6/section6_03.jpg" alt="" />
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
                            <div className="right-bottom-box">
                                <div className="product_box">
                                    <ul>
                                        <li>
                                            <div className="item_cont">
                                                <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="item_photo_box">
                                                        <img src="./img/section6/section6_04.jpg" alt="" />
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
                                                        <img src="./img/section6/section6_05.jpg" alt="" />
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
                                                        <img src="./img/section6/section6_06.jpg" alt="" />
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
        </div>
    );
};

