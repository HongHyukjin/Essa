import React from 'react';
import $ from 'jquery';



function Section9Component(props) {

    const onMouseEnterShowBtnBox =(e)=>{
        e.preventDefault();
        $(e.target).next().animate({opacity :1}, 200)
        $(e.target).next().css({ transform : "translateY(0)"})
    }
    const onMouseLeaveHideBtnBox=(e)=>{
        e.preventDefault();
        $(e.target).next().animate({opacity:0},200)
        $(e.target).next().css({transform : "translateY(200%)"})
    }

    return (
        <div id='section9'>
            <div className="container">
                <div className="gap">
                    <div className="row1">
                        <div className="title">
                            <h1>keyword<span className='shop'>#</span></h1>        
                        </div>
                    </div>
                    <div className="row2">
                        <div className="category-box">
                            <ul>
                                <a href="!#"><li>#박서준PICK</li></a>
                                <a href="!#"><li>#구름착석감</li></a>
                                <a href="!#"><li>#스윙가능</li></a>
                                <a href="!#"><li>#모듈소파</li></a>
                                <a href="!#"><li>#카우치&코너형</li></a>
                                <a href="!#"><li>#가죽소파</li></a>
                                <a href="!#"><li>#WITH MY PET</li></a>
                                <a href="!#"><li>#SMALL GOODS</li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="row3">
                        <div className="content">
                            <div className="left-box">
                                <ul>
                                    <li>
                                        <div className="sec9left-product">
                                            <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box">
                                                <img className='sec9product' src="../img/section9/images008.jpg" alt="" />
                                                <div className="button-box">
                                                    <div className="button">
                                                        <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                        <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title-box">
                                                <span className='sec9name'>베이글 3.5인 반카우치형 카시미라 패브릭 소파</span>
                                                <span className='sec9price'>4,200,000원</span>
                                                <span className='sec9price2'>2,940,000원</span>
                                            </div>
                                            <img src="../img/section9/i_coupon.jpg" alt="" />
                                            <img src="../img/section9/product_03.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sec9left-product">
                                            <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box">
                                                <img className='sec9product' src="../img/section9/images006.jpg" alt="" />
                                                <div className="button-box">
                                                    <div className="button">
                                                        <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                        <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title-box">
                                                <span className='sec9name'>뉴 리도 컴팩트 4인 오픈코너형 리브 패브릭 소파(가죽콤비)</span>
                                                <span className='sec9price'></span>
                                                <span className='sec9price2'>3,000,000원</span>
                                            </div>
                                            <img src="../img/section9/i_coupon.jpg" alt="" />
                                            <img src="../img/section9/product_03.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sec9left-product">
                                            <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box">
                                                <img className='sec9product' src="../img/section9/images007.jpg" alt="" />
                                                <div className="button-box">
                                                    <div className="button">
                                                        <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                        <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title-box">
                                                <span className='sec9name'>클리오 와이드 3인 카시미라 패브릭 소파</span>
                                                <span className='sec9price'>4,600,000원</span>
                                                <span className='sec9price2'>4,370,000원</span>
                                            </div>
                                            <img src="../img/section9/i_coupon.jpg" alt="" />
                                            <img src="../img/section9/product_03.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sec9left-product">
                                            <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box">
                                                <img className='sec9product' src="../img/section9/1000006394_main_022.jpg" alt="" />
                                                <div className="button-box">
                                                    <div className="button">
                                                        <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                        <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title-box">
                                                <span className='sec9name'>레티아 4인 리프트기능 슈렁큰텐더 통가죽 소파</span>
                                                <span className='sec9price'></span>
                                                <span className='sec9price2'>3,690,000원</span>
                                            </div>
                                            <img src="../img/section9/i_coupon.jpg" alt="" />
                                            <img src="../img/section9/product_03.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sec9left-product">
                                            <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box">
                                                <img className='sec9product' src="../img/section9/images009.jpg" alt="" />
                                                <div className="button-box">
                                                    <div className="button">
                                                        <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                        <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title-box">
                                                <span className='sec9name'>로쉐 4인 스윙가능 카시미라 패브릭 소파</span>
                                                <span className='sec9price'>6,500,000원</span>
                                                <span className='sec9price2'>6,175,000원</span>
                                            </div>
                                            <img src="../img/section9/i_coupon.jpg" alt="" />
                                            <img src="../img/section9/product_03.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sec9left-product">
                                            <div  onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box">
                                                <img className='sec9product' src="../img/section9/1000003693_main_088.jpg" alt="" />
                                                <div className="button-box">
                                                    <div className="button">
                                                        <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                        <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title-box">
                                                <span className='sec9name'>오세르 3인 카시미라 패브릭 소파</span>
                                                <span className='sec9price'></span>
                                                <span className='sec9price2'>2,590,000원</span>
                                            </div>
                                            <img src="../img/section9/i_coupon.jpg" alt="" />
                                            <img src="../img/section9/product_03.png" alt="" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="right-box">
                                <div className="sec9img-box">
                                    <img src="../img/section9/images084.jpg" alt="" />
                                    <div className="sec9title-box">
                                        <span className='sec9right1'>#박서준PICK</span>
                                        <span className='sec9right2'>뮤즈 박서준과 함께한 소파</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section9Component;