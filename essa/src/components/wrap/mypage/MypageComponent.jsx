import React from 'react';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';
import MypageNavComponent from './MypageNavComponent';
import {Link} from 'react-router-dom';

function MypageComponent(props) {

    const [state,setState] = React.useState({
        recentProduct : []
    })

    React.useEffect(() => {
        window.scrollTo(0,0)
        if(localStorage.getItem('최근본상품') !== null){
            if(JSON.parse(localStorage.getItem('최근본상품')).length > 4){
                setState({
                    ...state,
                    recentProduct : JSON.parse(localStorage.getItem('최근본상품')).slice(0,4)
                })
            }
            else{
                setState({
                    ...state,
                    recentProduct : JSON.parse(localStorage.getItem('최근본상품'))
                })
            }
        }
    }, [])

    return (
        <>
        <HeaderComponent/>
        <div id='mypage'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <MypageNavComponent />
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
                                        <h3>최근 주문 정보</h3>
                                        <span>최근 30일 내에 주문하신 내역입니다.</span>
                                    </div>
                                    <div className="mypage-myinfo-box">
                                        <div className="myinfo-table">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>날짜/주문번호</th>
                                                        <th>상품명/옵션</th>
                                                        <th>상품금액/수량</th>
                                                        <th>주문상태</th>
                                                        <th>확인/리뷰</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className='info-answer'>
                                                        <td colSpan="6">
                                                            <p>조회내역이 없습니다.</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="mypage-row3">
                                    <div className="mypage-order-tit">
                                        <h3>최근 본 상품</h3>
                                        <span>홍혁진님께서 본 최근 상품입니다.</span>
                                    </div>
                                    <div className="product_list">
                                        <ul>
                                            {
                                                state.recentProduct &&
                                                state.recentProduct.map((item,idx) => {
                                                    return (
                                                        <li>
                                                            <div className="photo_box">
                                                                <Link to={`/쇼핑/상세보기/${item.제품코드}`} >
                                                                    <img src={item.이미지} alt="" />
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
                                                                    <span className={`origin_price ${item.할인율===0?'on':''}`}>{item.원가.toLocaleString('ko-KR')}원</span>
<<<<<<< HEAD
                                                                    <span className='sale_price'>{item.할인율===0?'':item.할인가.toLocaleString('ko-KR')}</span>
=======
                                                                    <span className='sale_price'>{item.할인율===0?'':`${item.할인가.toLocaleString('ko-KR')}원`}</span>
>>>>>>> e227d32e6658d5787547c018918684e8eda2d488
                                                                    <span className='sale_per'>{item.할인율===0?'':`${item.할인율}%`}</span>
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
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
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

export default MypageComponent;