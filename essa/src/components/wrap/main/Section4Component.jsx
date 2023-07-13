import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

export default function Section4Component ({쇼핑}) {

    const [state,setState] = React.useState({
        sec4Shop : []
    })

    React.useEffect(() => {
        console.log(쇼핑)
        setState({
            ...state,
            sec4Shop : 쇼핑.slice(144,152)
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
                        <ul>
                            {
                                state.sec4Shop.map((item,idx) => {
                                    return (
                                        <li>
                                            <div className="item_cont">
                                                <div className="photo_box">
                                                    <Link to={`/쇼핑/상세보기/${item.제품코드}`} onClick={(e) => onClickProduct(e, item)}>
                                                        <img src={`img/product/${item.이미지}`} alt="" />
                                                        <div className="item_link">
                                                            <div className="inner">
                                                                <button type='button'>
                                                                    <img src="https://cdn-pro-web-153-127.cdn-nhncommerce.com/jakomo2_godomall_com/data/skin/front/essa2023/img/mimg/cart_thumb.png" alt="" />
                                                                </button>
                                                                <button type='button' className='right' onClick={(e) => onClickZzim(e, item)}>
                                                                    <img src="https://cdn-pro-web-153-127.cdn-nhncommerce.com/jakomo2_godomall_com/data/skin/front/essa2023/img/mimg/wish_thumb.png" alt="" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="info_box">
                                                    <div className="tit_box">
                                                        <a href="!#">
                                                            <strong className='item_name'>{item.제품명}</strong>
                                                            <span className='item_name_explain'>{item.제품설명}</span>
                                                        </a>
                                                    </div>
                                                    <div className="money_box">
                                                        <span className={`origin_price ${item.할인율 === 0 ? 'on' : ''}`}>{item.원가.toLocaleString('ko-KR')}원</span>
                                                        <span className='sale_price' style={{ "display": `${item.할인가 === 0 ? 'none' : 'inline'}` }}>{item.할인가.toLocaleString('ko-KR')}원</span>
                                                        <span className='sale_per' style={{ "display": `${item.할인가 === 0 ? 'none' : 'inline'}` }}>{item.할인율}%</span>
                                                    </div>
                                                    <div className="icon_box">
                                                        <img src="https://cdn-pro-web-153-127.cdn-nhncommerce.com/jakomo2_godomall_com/data/icon/goods_icon/i_boutique.png" alt="" />
                                                        <img src="https://cdn-pro-web-153-127.cdn-nhncommerce.com/jakomo2_godomall_com/data/icon/goods_icon/i_essamall_.png" alt="" />
                                                    </div>
                                                    <div className="review_cnt">
                                                        <a href="!#">
                                                            <i className='xi-comment-o'></i>
                                                            <span>{item.리뷰수}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

