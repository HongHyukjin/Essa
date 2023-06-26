import React from 'react';
import $ from 'jquery';
import TimerComponent from '../TimerComponent';


export default function Section7Component(props) {
    

    // const slideWrap = React.useRef();
    // const [cnt, setCnt] = React.useState(0);
    
    // React.useEffect(()=>{
        
        
    //     slideWrap.current.left = `${-418*cnt}%`;
    //     // if(cnt>n){
    //     //     setCnt( );
    //     //     slideWrap.current.style.left = 
    //     // }

    //     if(cnt<=0){
    //         setCnt(0);
    //         slideWrap.current.left= `${-418*cnt}%`;
    //     }


    // },[cnt])

    const [state, setState] = React.useState({
        cnt : 0
    });

    React.useEffect(()=>{
        const $slideWrap = $('#section7 .slide-wrap');
        const $slideView = $('#section7 .slide-view');
        const $slideBack = $("#section7 .slide-wrap");
        let cnt = state.cnt;

        function mainSlide(){
            $slideWrap.stop().animate({left: `${-418*cnt}px`}, 1000, function(){
                if(cnt === 1) cnt = 1;
                setState({
                    ...state,
                    cnt : cnt
                })
                $slideWrap.stop().animate({left : `${-418 * cnt}px`},0);
            })
        }

        function nextCount(){
            cnt++;
            setState({
                ...state,
                cnt : cnt
            })
            mainSlide();
        }

        function prevCount(){
            cnt--;
            setState({
                ...state,
                cnt : cnt
            })
            mainSlide();
        }
        let touchStart =0;
        let touchEnd =0;
        let dragStart =0;
        let dragEnd =0;
        let mousedown =false;
        let $tagA = $('#section7 .slide .img-box')

        $slideView.on({
            mousedown(e){
                mousedown = true;
                touchStart = e.clientX;
                dragStart = e.clientX - $slideWrap.offset().left;
            //     if(move > 0 && move 120){
            //         cnt1 =0;
            // }
            // else if(move > 120 && move 320){
            //     cnt1= 1;
            // }

            },
            mouseup(e){        
                mousedown = false;
                touchEnd = e.clientX;
                let cnt1 =0;
                let move = Math.abs(touchEnd - touchStart);
                console.log(move);
                $tagA.css({"pointer-events":"auto"});
                /* if($slideBack.position().left>400){
                    $(this).stop().animate({left:400},100);
                } */
                if(move > 120 && move < 320){
                    cnt1 =1;
                }
                else if(move >320 && move <830){
                    cnt1=2;
                }
                else if (move >830 && move <1250){
                    cnt1 =3;
                }
                console.log(cnt1);
                if((touchStart - touchEnd)>0){
                    if(!$slideWrap.is(':animated')){
                        for(let i=0; i<cnt1; i++){
                            nextCount();
                        }
                    }
                }

                if((touchStart-touchEnd) < 0){
                    if(!$slideWrap.is(':animated')){
                        for(let i=0; i<cnt1; i++){
                            prevCount();    
                        }
                    }
                }
            },
            mousemove(e){
                if(mousedown===false) return;
                if(dragEnd !== dragStart){
                    $tagA.css({"pointer-events":"none"});
                }
                dragEnd = e.clientX;
                if(!$slideWrap.is(':animated')){
                    $slideWrap.css({left:(dragEnd-dragStart-400)});
                }
            }
        })
        
    })


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
                        <div className="slide-container">
                            <ul className='slide-view'>
                                <li className='slide-wrap'>
                                    <div className="slide">
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
                                <li className='slide-wrap'>
                                    <div className="slide">
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
                                <li className='slide-wrap'>
                                    <div className="slide">
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
                                <li className='slide-wrap'>
                                    <div className="slide">
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
                                <li className='slide-wrap'>
                                    <div className="slide">
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
                                <li className='slide-wrap'>
                                    <div className="slide">
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

