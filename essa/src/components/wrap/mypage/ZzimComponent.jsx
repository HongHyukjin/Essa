import React from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import $ from 'jquery';
import axios from 'axios';

function ZzimComponent(props) {
    const [zzim,setZzim] = React.useState([]);

    const [product,setProduct] = React.useState([]);

    const myStyle = {
        width: '100px'
    };

    const myStyle2 = {
        width : '707px'
    };
    const myStyle3 = {
        width : '204px'
    };

    const getZzim = () => {
        let user_id = '';
        if(sessionStorage.getItem('user_id') === null){
        user_id = 'gurwlszx';
        }
        else{
        user_id = sessionStorage.getItem('user_id');
        }
        const formData = {
            user_id : user_id
        }
        $.ajax({
            url : 'http://localhost:8080/JSP/essa/zzim_select_action.jsp',
            type : 'POST',
            data : formData,
            dataType : 'json',
            success(res){
                console.log('AJAX 성공');
                console.log(res);
                // console.log(JSON.parse(res));
                setZzim(res.result);
            },
            error(err){
                console.log('AJAX 실패');
            }
        })

    }

    const getProduct = () => {
        axios({
          url: './data/product.json',
          method: 'GET'
        })
          .then((res) => {
            setProduct(res.data.쇼핑);
          })
          .catch((err) => {
            console.log("AXIOS 오류!" + err)
          })
    }
    
    React.useEffect(()=>{
        getZzim();
        getProduct();
    },[]);

    const onClickDeleteZzim =(e,item) => {
        e.preventDefault();
        let user_id = '';
        if(sessionStorage.getItem('user_id') === null){
        user_id = 'gurwlszx';
        }
        else{
        user_id = sessionStorage.getItem('user_id');
        }
        const formData = {
            user_id : user_id,
            product_num : item.product_num
        }
        $.ajax({
            url : 'http://localhost:8080/JSP/essa/zzim_delete_action.jsp',
            type : 'POST',
            data : formData,
            dataType : 'json',
            success(res){
                console.log('AJAX 성공');
                console.log(res);
                window.location.reload();
            },
            error(err){
                console.log('AJAX 실패');
            }
        })
    }


    return (
        <>
        <HeaderComponent/>
        <div id='zzim'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left-box">
                            <div className="sub-menu-box">
                                <h2>마이페이지</h2>
                                <ul className='sub-menu-mypage'>
                                    <li className='sub-menu-tit'>
                                        쇼핑정보
                                        <ul className='sub-menu-detail'>
                                            <li className='detail-tit'>주문목록 / 배송조회</li>
                                            <li className='detail-tit'>취소 / 반품 /교환내역</li>
                                            <li className='detail-tit'>환불 / 입금내역</li>
                                            <li className='detail-tit'>찜리스트</li>
                                        </ul>
                                    </li>
                                    <li className='sub-menu-tit'>
                                        혜택관리
                                        <ul className='sub-menu-detail'>
                                            <li className='detail-tit'>쿠폰</li>
                                            <li className='detail-tit'>예치금</li>
                                            <li className='detail-tit'>마일리지</li>
                                        </ul>
                                    </li>
                                    <li className='sub-menu-tit'>
                                        고객센터
                                        <ul className='sub-menu-detail'>
                                            <li className='detail-tit'>1:1 문의</li>
                                        </ul>
                                    </li>
                                    <li className='sub-menu-tit'>
                                        회원정보
                                        <ul className='sub-menu-detail'>
                                            <li className='detail-tit'>회원정보 변경</li>
                                            <li className='detail-tit'>회원 탈퇴</li>
                                            <li className='detail-tit'>배송지 관리</li>
                                        </ul>
                                    </li>
                                    <li className='sub-menu-tit'>
                                        나의 상품문의
                                    </li>
                                    <li className='sub-menu-tit'>
                                        나의 플러스리뷰
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="mypage-main">
                                <div className="mypage-row1">
                                    <div className="mypage-name-box">
                                        <div className="name-box">
                                            <span className='user-name'>유영현</span>
                                            <p>marinoma</p>
                                        </div>
                                    </div>
                                    <div className="mypage-point-box">
                                        <ul>
                                            <li><span><em>쿠폰</em><strong>0</strong>장</span></li>
                                            <li><span><em>마일리지</em><strong>20,000</strong>원</span></li>
                                            <li><span><em>예치금</em><strong>0</strong>원</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mypage-row2">
                                    <div className="mypage-order-tit">
                                        <h3>찜리스트</h3>
                                    </div>
                                    <div className="mypage-myinfo-box">
                                        <div className="myinfo-table">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th style={myStyle}>
                                                            <div className="form-check">
                                                                <input type="checkbox" id='allCheck' name='allCheck'  />
                                                            </div>
                                                        </th>
                                                        <th style={myStyle2}>상품명/옵션</th>
                                                        <th style={myStyle3}>상품금액/수량</th>
                                                        <th style={myStyle3}>혜택</th>
                                                        <th>합계</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        zzim.length === 0 && (
                                                            <tr className='info-answer'>
                                                                <td colSpan="6">
                                                                    <p>찜리스트에 상품이 없습니다.</p>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                    {
                                                        zzim.length !== 0 && (
                                                            zzim.map((item,idx) => {
                                                                return (
                                                                        <tr key={idx}>
                                                                            <td>
                                                                                <div className="form-check">
                                                                                    <input type="checkbox" id='allCheck' name='allCheck'  />
                                                                                </div>
                                                                            </td>
                                                                            <td className='td_left'>
                                                                                <div className="pick_add_cont">
                                                                                    <span className='pick_add_img'>
                                                                                        <a href="!#"><img src={product[item.product_num-1].이미지} alt="" /></a>
                                                                                    </span>
                                                                                    <div className="pick_add_info">
                                                                                        <em>
                                                                                            <a href="!#">{product[item.product_num-1].제품명}</a>
                                                                                        </em>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <strong>{product[item.product_num-1].할인가}</strong>
                                                                                /{item.amount}개
                                                                                <div class="btn_gray_list">
                                                                                    <a href="!#">
                                                                                        <span>옵션/수량변경</span>
                                                                                    </a>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <ul className='benefit_list'>
                                                                                    <li className='benefit_sale'>
                                                                                        <em>할인</em>
                                                                                        <span>
                                                                                            상품
                                                                                            <strong>-330,000원</strong>
                                                                                        </span>
                                                                                    </li>
                                                                                </ul>
                                                                            </td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="!#" className='btn_wish_cart'>
                                                                                        <em>장바구니</em>
                                                                                    </a>
                                                                                    <a href="!#" className='btn_wish_del' onClick={(e)=>onClickDeleteZzim(e,item)}>
                                                                                        <em>삭제하기</em>
                                                                                    </a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                )
                                                            })
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                            <button>선택 상품 삭제</button>
                                            <button>선택 상품 장바구니</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent/>
        </>
    );
}

export default ZzimComponent;