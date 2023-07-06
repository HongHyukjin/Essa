import React from 'react';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';
import { Link } from 'react-router-dom';
import $ from 'jquery';

function BasketComponent() {

    const [cart, setCart] = React.useState([]);
    const [product,setProduct] = React.useState([]);
    const [state,setState] = React.useState({
        total_sale:0,
        total_price:0,
        checked:[]
    });

    const onClickCheckAll =(e)=>{
        let checked=[];

        if(e.target.checked){

        }
        else{
            checked=[];
        }

        setState({
            ...state,
            checked:checked
        })
    }
    const onClickCheck =(e,value)=>{
        console.log('dfjhdf');
        let checked=state.checked;
        if(e.target.checked){
            checked=[...checked,(value)];
        }
        else{
            checked=checked.filter((item)=>item!==value);
        }

        setState({
            ...state,
            checked:checked
        })
    }




    const getlist = () => {
        const formData = {
            "user_id": sessionStorage.getItem("user_id")
        }
        $.ajax({
            url: 'http://localhost:8080/JSP/essa/basket_list_action.jsp',
            // url :'./data/product.json',
            type: 'POST',
            data: formData,
            dataType: 'json',
            // contentType:'json',
            success(res) {
                console.log('ajax 성공');
                console.log(res);
                setCart(res.result);
            },
            error(err) {
                console.log('ajax 실패', err);
            }

        })
    }

    const getProduct = ()=>{
        let shopping = JSON.parse(localStorage.getItem("쇼핑"));
        setProduct(shopping);
    }

    React.useEffect(() => {
        getlist();
        getProduct();
    }, [])


    return (
        <>
            <HeaderComponent />
            <div id='basket'>
                <div className="container">
                    <div className="gap">
                        <div className="link-box">
                            <ul>
                                <li><Link to="/메인">HOME</Link></li>
                                <li>장바구니</li>
                            </ul>
                        </div>
                        <div className="row1">
                            <div className="row1-tit">
                                <h1>장바구니</h1>
                            </div>
                            <div className="order">
                                <ul>
                                    <li><span>01</span> 장바구니<img src="./img/icon_join_step_on.png" alt="" /></li>
                                    <li><span>02</span> 주문서작성/결제<img src="./img/icon_join_step_off.png" alt="" /></li>
                                    <li><span>03</span> 주문완료</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row2">
                            {
                                cart.length===0&&(
                                    <div className="row2-basket-box">
                                        <span>장바구니에 담겨있는 상품이 없습니다</span>
                                    </div>
                                )
                            }
                            {
                                cart.length>0&&(
                                    <div className="row2-cart">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th><input type="checkbox" onClick={onClickCheckAll} checked={state.checked.length===cart.length}/></th>
                                                    <th>상품/옵션 정보</th>
                                                    <th>수량</th>
                                                    <th>상품금액</th>
                                                    <th>할인/적립</th>
                                                    <th>합계금액</th>
                                                    <th>배송비</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    cart.map((item,idx) => {
                                                        return (
                                                            <tr>
                                                                <td><input type="checkbox"  onClick={(e)=>onClickCheck(e,item.product_code)} checked={state.checked.includes(item.product_code)}/></td>
                                                                <td>
                                                                    <div className="pick-img">
                                                                        <a href="!#"><img src={product[(item.product_code)-1].이미지} alt="" /></a>
                                                                    </div>
                                                                    <div className="pick-info">
                                                                        <img src="./img/product/btn_coupon_apply.png" alt="" />
                                                                        <a href="!#"><h3>{product[(item.product_code)-1].제품명} </h3></a>
                                                                        <p>색상 : {item.option1} </p>
                                                                        <p>스툴 : {item.option2} </p>
                                                                    </div>

                                                                </td>
                                                                <td>
                                                                    <h3>{item.num}개</h3>
                                                                    <button>옵션/수량변경</button>
                                                                </td>
                                                                <td>
                                                                    {product[(item.product_code)-1].원가.toLocaleString('ko-KR')} 
                                                                </td>
                                                                <td>
                                                                    <span style={{"display":`${product[(item.product_code)-1].할인가!==0?"inline-block":"none"}`}}>상품 할인</span>
                                                                    <p style={{"display":`${product[(item.product_code)-1].할인가!==0?"block":"none"}`}}>{ (Number(product[(item.product_code)-1].할인가)-Number(product[(item.product_code)-1].원가)).toLocaleString('ko-KR')}</p>
                                                                </td>
                                                                <td>
                                                                    {product[(item.product_code)-1].할인가!==0? product[(item.product_code)-1].할인가.toLocaleString('ko-KR'):product[(item.product_code)-1].원가.toLocaleString('ko-KR')} 
                                                                </td>
                                                                {
                                                                    idx===0 && (
                                                                        <td   rowSpan={cart.length}>
                                                                            자체배송<br />무료배송<br />(택배-선결제)
                                                                        </td>
                                                                    )
                                                                }
                                                            </tr>
                                                        )

                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                )
                            }

                        </div>
                        <div className="row3">
                            <div className="go-home-btn">
                                <Link to="/쇼핑">&lt; 쇼핑 계속하기</Link>
                            </div>
                        </div>
                        <div className="row4">
                            <div className="row4-price-sum">
                                <div className="price-sum-list">
                                    <dl>
                                        <dt>
                                            총<strong className='total-product'> {cart.length} </strong>개의 상품금액
                                        </dt>
                                        <dd>
                                            <strong className='total-price'>0</strong>원
                                        </dd>
                                    </dl>
                                    {     
                                        cart.length>0&&(
                                            <>    
                                                <span><img src="../img/product/order_price_minus.png" alt="" /></span> 
                                                <dl>
                                                    <dt>
                                                        상품할인
                                                    </dt>
                                                    <dd>
                                                        <strong className='total-price'>0</strong>원
                                                    </dd>
                                                </dl>
                                            </>
                                        ) 
                                    }
                                    <span><img src="../img/order_price_plus.png" alt="" /></span>
                                    <dl>
                                        <dt>배송비</dt>
                                        <dd><strong className='total-delivery'>0</strong>원</dd>
                                    </dl>
                                    <span>
                                        <img src="../img/order_price_total.png" alt="" />
                                    </span>
                                    <dl className='price-total'>
                                        <dt>합계</dt>
                                        <dd>
                                            <strong className='alltotal-price'>0</strong>원
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="row5">
                            <div className="btn-box">
                                <button>선택 상품 삭제</button>
                            </div>
                            <div className="sale-info">
                                <p>주문서 작성단계에서 할인/마일리지 적용을 하실 수 있습니다.</p>
                            </div>
                        </div>
                        <div className="row6">
                            <button>선택 상품 주문</button>
                            <button className='all'>전체 상품 주문</button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    );
}

export default BasketComponent;