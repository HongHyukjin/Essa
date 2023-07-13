import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

export default function Section5Component({쇼핑}) {

    const [state,setState] = React.useState({
        sec5Shop : []
    })

    React.useEffect(() => {
        console.log(쇼핑)
        setState({
            ...state,
            sec5Shop : 쇼핑.slice(152,160)
        })
    }, [쇼핑])

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
                                    {
                                        state.sec5Shop.map((item,idx) => {
                                            return (
                                                <li>
                                                    <div onMouseEnter={onMouseEnterShowBtnBox} onMouseLeave={onMouseLeaveHideBtnBox} className="img-box" >
                                                        <Link to={`/쇼핑/상세보기/${item.제품코드}`} onClick={(e) => onClickProduct(e, item)}>
                                                            <img src={`img/product/${item.이미지}`} alt="" />
                                                            <div className="button-box">
                                                                <div className="button">
                                                                    <button><img src="../img/section5/메인021.png" alt="" /></button>
                                                                    <button onClick={(e) => onClickZzim(e, item)}><img src="../img/section5/메인022.png" alt="" /></button>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="title-box">
                                                        <span>{item.제품명}</span>
                                                        <img className='img1' src="../img/section5/메인023.jpg" alt="" />
                                                        <img className='img2' src="../img/section5/메인026.png" alt="" />
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                    {/* <li>
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
                                    </li> */}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

