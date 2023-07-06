import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';


function Section9Component({쇼핑}) {

    const [state,setState] = React.useState({
        sec9Shop : []
    })

    React.useEffect(() => {
        console.log(쇼핑)
        setState({
            ...state,
            sec9Shop : 쇼핑.slice(77,83)
        })
    }, [쇼핑])

    const setViewProduct = (value) =>{
        let arr = [];
        if(localStorage.getItem('최근본상품')!==null){
          arr = JSON.parse(localStorage.getItem('최근본상품'));
          arr = [value, ...arr]
          localStorage.setItem('최근본상품', JSON.stringify(arr) );  
        }
        else {
            arr = [value]
            localStorage.setItem('최근본상품', JSON.stringify(arr) );
        }     
    }

    const onClickProduct = (e, item) => {
        // e.preventDefault();
        let obj = {
          제품코드 : item.제폼코드,
          이미지 : item.이미지,
          제품명 : item.제품명,
          원가 : item.원가,
          할인가 : item.할인가,
          할인율 : item.할인율,
          리뷰수 : item.리뷰수
        }
        setViewProduct(obj);
    }

    const onClickZzim = (e, item) => {
        e.preventDefault();
        let user_id = '';
        if(sessionStorage.getItem('user_id') === null){
          user_id = 'gurwlszx';
        }
        else{
          user_id = sessionStorage.getItem('user_id');
        }
        const formData = {
          "user_id" : user_id,
          "product_num" : item.제품코드,
          "amount" : 1
        }
    
        $.ajax({
          url : 'http://localhost:8080/JSP/essa/zzim_post_action.jsp',
          type : 'POST',
          data : formData,
          success(res){
              console.log('AJAX 성공!');
              console.log(res);
              console.log(JSON.parse(res));
              alert('상품이 찜 리스트에 담겼습니다!')
          },
          error(err){
            console.log('AJAX 실패!' + err);
          }
        })
    }

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
                    <div className="row1">``
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
                                    {
                                        state.sec9Shop.map((item,idx) => {
                                            return (
                                                <li>
                                                    <div className="sec9left-product">
                                                        <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box">
                                                            <Link to={`/쇼핑/상세보기/${item.제품코드}`} onClick={(e) => onClickProduct(e, item)}>
                                                                <img className='sec9product' src={item.이미지} alt="" />
                                                                <div className="button-box">
                                                                    <div className="button">
                                                                        <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                                        <button><img src="../img/section5/메인022.png" alt="" /></button>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="title-box">
                                                            <span className='sec9name'>{item.제품명}</span>
                                                            <span className='sec9price'>{item.원가.toLocaleString('ko-KR')}원</span>
                                                            <span className='sec9price2'>{item.할인가.toLocaleString('ko-KR')}원</span>
                                                        </div>
                                                        <img src="../img/section9/i_coupon.jpg" alt="" />
                                                        <img src="../img/section9/product_03.png" alt="" />
                                                        <a href="!#">
                                                            <span class="material-symbols-outlined"></span>
                                                            <i className='xi-comment-o'></i>
                                                            <span>{item.리뷰수}</span>
                                                        </a>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                    {/* <li>
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
                                    </li> */}
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