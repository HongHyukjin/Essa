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
        total_origin_price :0,
        checked:[],
        
    });
    const [click,setClick]=React.useState(false);
    const [isCartModal, setIsCartModal] = React.useState(false);
    const[cartClick,setCartClick] =React.useState([]);
    const[cartClickOrigin,setCartClickOrigin] =React.useState([]);
    const[cartClickP,setCartClickP] =React.useState([]);

    const onClickUpdate =()=>{
        const formData={
            "num":cartClick.num,
            "newOption1":cartClick.option1,
            "newOption2":cartClick.option2,
            "user_id":sessionStorage.getItem('user_id'),
            "product_code":cartClickP.제품코드,
            "option1":cartClickOrigin.option1,
            "option2":cartClickOrigin.option2
        }
        $.ajax({
            url:'http://localhost:8080/JSP/essa/basket_update_action.jsp',
            type:'post',
            data:formData,
            success(res){
                setClick(!click);
                alert('변경이 완료되었습니다.');
                setIsCartModal(false);
                console.log('AJAX 성공');
                console.log(res);
            },
            error(err){
                console.log('AJAX 실패');
            }
        })
    }

    React.useEffect(()=>{
        getlist();
    },[click]);

    const onClickCheckAll =(e)=>{
        let checked=[];
        let total_origin_price = 0;
        if(e.target.checked){
            for(let i=0;i<cart.length;i++){
                checked=[...checked,cart[i].product_code];
            }
        }
        else{
            checked=[];
        }

        for(let i=0;i<checked.length;i++){
            console.log(product[checked[i]-1].원가)
            total_origin_price += product[checked[i]-1].원가;
        }

        setState({
            ...state,
            checked:checked,
            total_origin_price : total_origin_price
        })

        
    }
    const onClickCheck =(e,value)=>{
     
        let checked=state.checked;
        let total_origin_price = 0;
        if(e.target.checked){
            checked=[...checked,(value)];
        }
        else{
            checked=checked.filter((item)=>item!==value);
        }
        for(let i=0;i<checked.length;i++){
            console.log(product[checked[i]-1].원가)
            let res = cart.filter((item) => item.product_code===checked[i]);
            console.log(Number(res[0].num))
            total_origin_price += product[checked[i]-1].원가 * Number(res[0].num);
        }

        setState({
            ...state,
            checked:checked,
            total_origin_price : total_origin_price
        })
    }

    const onClickExit=(e)=>{
        e.preventDefault();
        setIsCartModal(false);
      }

      const onClickDel =(e)=>{
        e.preventDefault();
        setCartClick({
          ...cartClick,
          option1:'',
          option2:''
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

    const onChangeOption1=(e)=>{
        setCartClick({
          ...cartClick,
          option1:e.target.value
        })
      }
      const onChangeOption2=(e)=>{
        setCartClick({
          ...cartClick,
          option2:e.target.value
        })
      }
      const onClickCart = (e, value) => {
        e.preventDefault();
        setIsCartModal(true);
        let res = cart.filter((item)=>item.product_code===value);
        let res1 = product.filter((item)=>item.제품코드===Number(value));
        setCartClick(res[0]);
        setCartClickOrigin(res[0]);
        setCartClickP(res1[0]);
      }

      const onChangeCnt=(e)=>{
        setCartClick({
          ...cartClick,
          num:e.target.value
        })
      }
    
      const onClickUp=(e)=>{
        e.preventDefault();
        let cnt=Number(cartClick.num);
        cnt++;
        setCartClick({
          ...cartClick,
          num:cnt
        })
        
      }
      const onClickDown=(e)=>{
        e.preventDefault();
        let cnt=Number(cartClick.num);
        if(cnt===1){
          cnt=1;
        }
        else{
          cnt--;
        }
        setCartClick({
          ...cartClick,
          num:cnt
        }) 
      }
    


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
                                                                        <p>가죽타입 : {item.option1} </p>
                                                                        <p>색상 : {item.option2} </p>
                                                                    </div>

                                                                </td>
                                                                <td>
                                                                    <h3>{item.num}개</h3>
                                                                    <button onClick={(e)=>onClickCart(e,item.product_code)}>옵션/수량변경</button>
                                                                </td>
                                                                <td>
                                                                    {(product[(item.product_code)-1].원가*(cart[idx].num)).toLocaleString('ko-KR')} 
                                                                </td>
                                                                <td>
                                                                    <span style={{"display":`${product[(item.product_code)-1].할인가!==0?"inline-block":"none"}`}}>상품 할인</span>
                                                                    <p style={{"display":`${product[(item.product_code)-1].할인가!==0?"block":"none"}`}}>{ ((Number(product[(item.product_code)-1].할인가)-Number(product[(item.product_code)-1].원가))*(cart[idx].num)).toLocaleString('ko-KR')}</p>
                                                                </td>
                                                                <td>
                                                                    {product[(item.product_code)-1].할인가!==0? ((product[(item.product_code)-1].할인가)*(cart[idx].num)).toLocaleString('ko-KR'):((product[(item.product_code)-1].원가)*(cart[idx].num)).toLocaleString('ko-KR')} 
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
                  <div className="img-box"><img src={cartClickP.이미지} alt="" /></div>
                  <div className="txt">
                    <h3>{cartClickP.제품명}</h3>
                  </div>
                </div>
                <div className="row3">
                  <dl>
                    <dt>패브릭타입</dt>
                    <dd>
                      <select name="optionNo1"  onChange={onChangeOption1} value={cartClick.option1}>
                        <option value='' selected disabled={`${cart.option1 !== '' ? true : false}`}>= 패브릭타입 선택 =</option>
                        <option value="카시미라">카시미라</option>
                        <option value="러스티카">러스티카</option>
                      </select>
                    </dd>
                  </dl>
                  <dl>
                    <dt>색상</dt>
                    <dd>
                      <select name="optionNo2"  onChange={onChangeOption2} value={cartClick.option2}>
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
                  <div className="goods-box"  style={{"display":`${cartClick.option1!==''&cartClick.option2!==''?"block":"none"}`}}>
                <table>
                  <tbody>
                    <tr>
                      <td>{cartClick.option1}/{cartClick.option2}</td>
                      <td>
                        <div className="count">
                          <input type="text"  onChange={onChangeCnt}  value={cartClick.num}/>
                          <span>
                            <button className='up' onClick={onClickUp} ></button>
                            <button className='down' onClick={onClickDown}></button>
                          </span>
                        </div>
                      </td>
                      <td>{cartClickP.할인가!==0?((cartClickP.할인가)*cartClick.num).toLocaleString('ko-KR'):((cartClickP.원가)*cartClick.num).toLocaleString('ko-KR')}원</td>
                      <td>
                        <button  onClick={onClickDel}><img src="./img/product/ico_cart_del.png" alt="" /></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
                </div>
                <div className="row4">
                  <button onClick={onClickExit}>취소</button>
                  <button className='ok'  type='submit' onClick={onClickUpdate}>확인</button>
                </div>
              </div>
            </div>
          </div>
        )
      }
            <FooterComponent />
        </>
    );
}

export default BasketComponent;