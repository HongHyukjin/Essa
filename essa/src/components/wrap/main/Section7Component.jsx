import React from 'react';
import $ from 'jquery';
import TimerComponent from '../TimerComponent';


export default function Section7Component(props) {

    const onMouseEnterShowBtnBox=(e)=>{
        e.preventDefault();
        $(e.target).next().animate({ opacity:1}, 200)
        $(e.target).next().css({transform : "translateY(0)"})
    }
    const onMouseLeaveHideBtnBox=(e)=>{
        e.preventDefault();
        $(e.target).next().animate({opacity:0},200)
        $(e.target).next().css({ transform : "translateY(200%"})
    }

    return (
        <div id='section7'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="timer">
                            <TimerComponent/>
                        </div>
                        <div className="product-box">
                            <ul>
                                <li>
                                    <div className="product">
                                        <div  onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box">
                                            <img src="../img/section7/images065.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span className='name'>플로라 3인 카시미라 패브릭 소파</span>
                                            <div className="title-under">
                                                <span className='price'>2,293,000원</span>
                                                <span className='price2'>1,834,400원</span>
                                                <span className='percent'>20%</span>
                                            </div>
                                            <img src="../img/section7/images026.png" alt="" />
                                            <img src="../img/section7/images067.jpg" alt="" />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="product">
                                        <div  onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box">
                                            <img src="../img/section7/images068.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span className='name'>로제트 3인 리브 패브릭 소파</span>
                                            <div className="title-under">
                                                <span className='price'>1,890,000원</span>
                                                <span className='price2'>1,512,000원</span>
                                                <span className='percent'>20%</span>
                                            </div>
                                            <img src="../img/section7/images026.png" alt="" />
                                            <img src="../img/section7/images067.jpg" alt="" />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="product">
                                        <div  onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box">
                                            <img src="../img/section7/images069.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span className='name'>넬 와이드 3인 르브와 패브릭 소파</span>
                                            <div className="title-under">
                                                <span className='price'>1,740,000원</span>
                                                <span className='price2'>1,392,000원</span>
                                                <span className='percent'>20%</span>
                                            </div>
                                            <img src="../img/section7/images026.png" alt="" />
                                            <img src="../img/section7/images067.jpg" alt="" />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="product">
                                        <div  onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box">
                                            <img src="../img/section7/images070.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span className='name'>에또르 4인 오픈카우치형 리브 패브릭 소파</span>
                                            <div className="title-under">
                                                <span className='price'>2,500,000원</span>
                                                <span className='price2'>2,000,000원</span>
                                                <span className='percent'>20%</span>
                                            </div>
                                            <img src="../img/section7/images026.png" alt="" />
                                            <img src="../img/section7/images067.jpg" alt="" />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="product">
                                        <div  onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box">
                                            <img src="../img/section7/images071.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span className='name'>볼라레 1인 카시미라 패브릭 체어</span>
                                            <div className="title-under">
                                                <span className='price'>680,000원</span>
                                                <span className='price2'>544,000원</span>
                                                <span className='percent'>20%</span>
                                            </div>
                                            <img src="../img/section7/images026.png" alt="" />
                                            <img src="../img/section7/images067.jpg" alt="" />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="product">
                                        <div  onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box">
                                            <img src="../img/section7/images065.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span className='name'>롤리폴리 카시미라 패브릭 쿠션</span>
                                            <div className="title-under">
                                                <span className='price'>138,000원</span>
                                                <span className='price2'>110,400원</span>
                                                <span className='percent'>20%</span>
                                            </div>
                                            <img src="../img/section7/images026.png" alt="" />
                                            <img src="../img/section7/images067.jpg" alt="" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="scroll-bar"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

