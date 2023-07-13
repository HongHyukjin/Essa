import React from 'react';
import $ from 'jquery';
import TimerComponent from '../TimerComponent';
import {Link} from 'react-router-dom';

export default function Section7Component({쇼핑}) {
    

    const [state,setState] = React.useState({
        sec7Shop : [],
        cnt : 0
    })

    React.useEffect(() => {
        console.log(쇼핑)
        setState({
            ...state,
            sec7Shop : 쇼핑.slice(20,26)
        })
    }, [쇼핑])


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

    const setViewProduct = (value) => {
        let arr = [];
        if (localStorage.getItem('최근본상품') !== null) {
          arr = JSON.parse(localStorage.getItem('최근본상품'));
          let tmp = [];
          let dup = false;
          if(arr.length > 4){
            tmp = arr.slice(0,4);
            for(let i=0; i<tmp.length; i++){
              if(tmp[i].제품코드 === value.제품코드){
                dup = true;
              }
            }
            if(dup === false){
              arr = [value, ...arr];
            }
          }
          else{
            tmp = arr;
            for(let i=0; i<tmp.length; i++){
              if(tmp[i].제품코드 === value.제품코드){
                dup = true;
              }
            }
            if(dup === false){
              arr = [value, ...arr];
            }
          }
          localStorage.setItem('최근본상품', JSON.stringify(arr));
        }
        else {
          arr = [value]
          localStorage.setItem('최근본상품', JSON.stringify(arr));
        }
      }

    const onClickProduct = (e, item) => {
        // e.preventDefault();
        let obj = {
          제품코드 : item.제품코드,
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
        if (sessionStorage.getItem('user_id') === null) {
          alert('로그인 후 이용해주세요');
          window.location.href='/#/로그인';
        }
        else {
          user_id = sessionStorage.getItem('user_id');
          const formData = {
            "user_id": user_id,
            "product_num": item.제품코드,
            "amount": 1
          }
      
          $.ajax({
            url: 'http://localhost:8080/JSP/essa/zzim_post_action.jsp',
            type: 'POST',
            data: formData,
            dataType:'json',
            success(res) {
              console.log('AJAX 성공!');
              console.log(res);
              console.log(res.result);
              if(res.result === 1){
                alert('상품이 찜 리스트에 담겼습니다!')
              }
              else{
                alert('같은 상품을 담을 수 없습니다')
              }
            },
            error(err) {
              console.log('AJAX 실패!' + err);
            }
          })
        }
      }

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

    const [cart, setCart] = React.useState({
        option1: '',
        option2: '',
        cnt: 1
    });
    const [cartClick, setCartClick] = React.useState([]);
    const [isCartModal, setIsCartModal] = React.useState(false);
    const [isClick, setIsClick] = React.useState(false);

    const onClickExit = (e) => {
        e.preventDefault();
        setIsCartModal(false);
        setCart({
            ...cart,
            option1: '',
            option2: '',
            cnt: 1
        })
    }

    const onClickCart = (e, value) => {
        e.preventDefault();
        setIsCartModal(true);
        let res = state.sec7Shop.filter((item) => item.제품코드 === value);
        setCartClick(res[0]);

    }
    const onClickSubmit = (e) => {
        e.preventDefault();
        onSubmitBasket();
    }
    const onSubmitBasket = () => {
        const formData = {
            "user_id": sessionStorage.getItem('user_id'),
            "product_code": cartClick.제품코드,
            "num": cart.cnt,
            "option1": cart.option1,
            "option2": cart.option2
        }
        console.log(formData);

        if (cart.option1 === '' || cart.option2 === '') {
            alert('옵션이 선택되지 않았습니다!');
        }
        else if (sessionStorage.getItem('user_id') === null) {
            alert('로그인 후 이용해주세요');
            window.location.href = '/#/로그인';
        }
        else{
            $.ajax({
                url: 'http://localhost:8080/JSP/essa/basket_post_action.jsp',
                type: 'post',
                data: formData,
                dataType: 'json',
                success(res) {
                    console.log('AJAX 성공');
                    console.log(res.result);
    
                    if (res.result === 1) {
                        alert('상품이 장바구니에 담겼습니다.');
                        setIsCartModal(false);
                        setCart({
                            ...cart,
                            option1: '',
                            option2: '',
                            cnt: 1
                        })
                        setIsClick(!isClick);
                    }
                    else {
                        console.log(res.result)
                        alert('같은 상품을 담을 수 없습니다');
                        setIsCartModal(false);
                        setCart({
                            ...cart,
                            option1: '',
                            option2: '',
                            cnt: 1
                        })
                    }
                },
                error(err) {
                    console.log('AJAX 실패' + err);
                }
            })
        }


    }

    const onChangeOption1 = (e) => {
        setCart({
            ...cart,
            option1: e.target.value
        })
    }
    const onChangeOption2 = (e) => {
        setCart({
            ...cart,
            option2: e.target.value
        })
    }

    const onChangeCnt = (e) => {
        setCart({
            ...cart,
            cnt: e.target.value
        })
    }

    const onClickUp = (e) => {
        e.preventDefault();
        let cnt = cart.cnt;
        cnt++;
        setCart({
            ...cart,
            cnt: cnt
        })

    }
    const onClickDown = (e) => {
        e.preventDefault();
        let cnt = cart.cnt;
        if (cnt === 1) {
            cnt = 1;
        }
        else {
            cnt--;
        }
        setCart({
            ...cart,
            cnt: cnt
        })
    }

    const onClickDel = (e) => {
        e.preventDefault();
        setCart({
            ...cart,
            option1: '',
            option2: ''
        })
    }


    return (
        <>
        <div id='section7'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="timer">
                            <TimerComponent/>
                        </div>
                        <div className="slide-container">
                            <ul className='slide-view'>
                                {
                                    state.sec7Shop.map((item,idx) => {
                                        return (
                                            <li className='slide-wrap'>
                                                <div className="slide">
                                                    <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box">
                                                        <Link to={`/쇼핑/상세보기/${item.제품코드}`} onClick={(e) => onClickProduct(e, item)}>
                                                            <img src={`img/product/${item.이미지}`} alt="" />
                                                            <div className="button-box">
                                                                <div className="button">
                                                                    <button onClick={(e) => onClickCart(e, item.제품코드)}><img src="../img/section5/메인021.png" alt="" /></button>
                                                                    <button onClick={(e) => onClickZzim(e, item)}><img src="../img/section5/메인022.png" alt="" /></button>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="title-box">
                                                        <span className='name'>{item.제품명}</span>
                                                        <div className="title-under">
                                                            <span className='price'>{item.원가.toLocaleString('ko-KR')}원</span>
                                                            <span className='price2'>{item.할인가.toLocaleString('ko-KR')}원</span>
                                                            <span className='percent'>{item.할인율}%</span>
                                                        </div>
                                                        <img src="../img/section7/images026.png" alt="" />
                                                        <img src="../img/section7/images067.jpg" alt="" />
                                                        <a href="!#">
                                                            <span class="material-symbols-outlined"></span>
                                                            <i className='xi-comment-o'></i>
                                                            <span>{item.리뷰수}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
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
                                {/* <li className='slide-wrap'>
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
                                </li> */}
                            </ul>
                        </div>
                        <div className="scroll-bar"></div>
                    </div>
                </div>
            </div>
        </div>
        {
                isCartModal && (
                    <div className="cart-modal">
                        <div className="container">
                            <div className="content">
                                <div className="row1">
                                    <h2>옵션선택</h2>
                                    <a href="!#" onClick={onClickExit}><img src="./img/product/btn_layer_close.png" alt="" /></a>
                                </div>
                                <div className="row2">
                                    <div className="img-box"><img src={`img/product/${cartClick.이미지}`} alt="" /></div>
                                    <div className="txt">
                                        <h3>{cartClick.제품명}</h3>
                                    </div>
                                </div>
                                <div className="row3">
                                    <dl>
                                        <dt>패브릭타입</dt>
                                        <dd>
                                            <select name="optionNo1" onChange={onChangeOption1} value={cart.option1}>
                                                <option value='' selected disabled={`${cart.option1 !== '' ? true : false}`}>= 패브릭타입 선택 =</option>
                                                <option value="카시미라">카시미라</option>
                                                <option value="러스티카">러스티카</option>
                                            </select>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>색상</dt>
                                        <dd>
                                            <select name="optionNo2" onChange={onChangeOption2} value={cart.option2}>
                                                <option value='' selected disabled={`${cart.option2 !== '' ? true : false}`}>= 색상 선택 =</option>
                                                <option value="바닐라화이트">바닐라화이트</option>
                                                <option value="토프그레이">토프그레이</option>
                                                <option value="피콕그린">피콕그린</option>
                                                <option value="비스크옐로우">비스크옐로우</option>
                                                <option value="아쿠아블루">아쿠아블루</option>
                                                <option value="울프블루">울프블루</option>
                                                <option value="카민레드">카민레드</option>
                                                <option value="더스티핑크">더스티핑크</option>
                                                <option value="머스크화이트">머스크화이트</option>
                                                <option value="스톤그레이">스톤그레이</option>
                                                <option value="선셋오렌지">선셋오렌지</option>
                                                <option value="빈센트블루">빈센트블루</option>
                                                <option value="인디고블루">인디고블루</option>
                                                <option value="민트">민트</option>
                                                <option value="블루그레이">블루그레이</option>
                                            </select>
                                        </dd>
                                    </dl>
                                    <div className="goods-box" style={{ "display": `${cart.option1 !== '' & cart.option2 !== '' ? "block" : "none"}` }}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>{cart.option1}/{cart.option2}</td>
                                                    <td>
                                                        <div className="count">
                                                            <input type="text" onChange={onChangeCnt} value={cart.cnt} />
                                                            <span>
                                                                <button className='up' onClick={onClickUp} ></button>
                                                                <button className='down' onClick={onClickDown}></button>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>{cartClick.할인가 !== 0 ? ((cartClick.할인가) * cart.cnt).toLocaleString('ko-KR') : ((cartClick.원가) * cart.cnt).toLocaleString('ko-KR')}원</td>
                                                    <td>
                                                        <button onClick={onClickDel}><img src="./img/product/ico_cart_del.png" alt="" /></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row4">
                                    <button onClick={onClickExit}>취소</button>
                                    <button className='ok' onClick={onClickSubmit} type='submit'>확인</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

