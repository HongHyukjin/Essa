import React from 'react';
import $ from 'jquery';

export default function Section5Component(props) {

    const onMouseEnterShowBtnBox = (e) => {
        e.preventDefault();
        $(e.target).next().animate({ opacity: 1 }, 200)
        $(e.target).next().css({ transform: "translateY(0)" })
    }
    const onMouseLeaveHideBtnBox = (e) => {
        e.preventDefault();
        $(e.target).next().animate({ opacity: 0 }, 200)
        $(e.target).next().css({ transform: "translateY(200%)" })
    }
    return (
        <div id='section5'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left-box">
                            <div className="left-content">
                                <div className="left-title">
                                    <img src="../img/section5/메인045.jpg" alt="" />
                                    <span>ESSA PET LINE</span>
                                    <p>소중한 반려견과 함께하는 소파라이프</p>
                                </div>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="right-title">
                                <h2>New in<i>·</i></h2>
                                <span>VIEW MORE</span>
                            </div>
                            <div className="right-content">
                                <ul>
                                    <li>
                                        <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box" >
                                            <img src="../img/section5/메인046.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span>쁘띠쁘띠 카시미라 패브릭 펫 베드</span>
                                            <img className='img1' src="../img/section5/메인023.jpg" alt="" />
                                            <img className='img2' src="../img/section5/메인026.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box" >
                                            <img src="../img/section5/메인047.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span>벨르 카시미라 패브릭 펫 베드</span>
                                            <img className='img1' src="../img/section5/메인023.jpg" alt="" />
                                            <img className='img2' src="../img/section5/메인026.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box" >
                                            <img src="../img/section5/메인048.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span>모노 카시미라 패브릭 펫 스텝퍼</span>
                                            <img className='img1' src="../img/section5/메인023.jpg" alt="" />
                                            <img className='img2' src="../img/section5/메인026.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box" >
                                            <img src="../img/section5/메인049.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span>패블 리브 패브릭 펫 배드/스텝퍼</span>
                                            <img className='img1' src="../img/section5/메인023.jpg" alt="" />
                                            <img className='img2' src="../img/section5/메인026.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box" >
                                            <img src="../img/section5/메인050.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span>우디 리브 패브릭 펫 소파</span>
                                            <img className='img1' src="../img/section5/메인023.jpg" alt="" />
                                            <img className='img2' src="../img/section5/메인026.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box" >
                                            <img src="../img/section5/메인051.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span>버디 리브 패브릭 펫 스텝</span>
                                            <img className='img1' src="../img/section5/메인023.jpg" alt="" />
                                            <img className='img2' src="../img/section5/메인026.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box" >
                                            <img src="../img/section5/메인052.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span>쿠키 카시미라 패브릭 펫 배드</span>
                                            <img className='img1' src="../img/section5/메인023.jpg" alt="" />
                                            <img className='img2' src="../img/section5/메인026.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box" >
                                            <img src="../img/section5/메인053.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span>코코 카시미라 패브릭 펫 배드</span>
                                            <img className='img1' src="../img/section5/메인023.jpg" alt="" />
                                            <img className='img2' src="../img/section5/메인026.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box" >
                                            <img src="../img/section5/메인054.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span>파밀리아 리브 패브릭 반려견 세트(애견 방석+스텝퍼)</span>
                                            <img className='img1' src="../img/section5/메인023.jpg" alt="" />
                                            <img className='img2' src="../img/section5/메인026.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box" >
                                            <img src="../img/section5/메인055.jpg" alt="" />
                                            <div className="button-box">
                                                <div className="button">
                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                    <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box">
                                            <span>파밀리아 4인 리브 패브릭 반려견 소파</span>
                                            <img className='img1' src="../img/section5/메인023.jpg" alt="" />
                                            <img className='img2' src="../img/section5/메인026.png" alt="" />
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
}

