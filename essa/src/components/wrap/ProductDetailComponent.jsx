import React from 'react';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

export default function ProductDetailComponent () {
  return (
    <>
      <HeaderComponent />
      <div id="productDetail">
        <div className="container">
          <div className="content">
            <div className="item_photo">
              <img src="https://essasvr.kr/site/data/goods/22/02/07/1000004220/1000004220_main_095.jpg" alt="" />
            </div>
            <div className="item_info">
              <div className="tit">
                <h2>엠마 4인 코너형 리프트기능 카시미라 패브릭 소파</h2>
                <h3>#베스트소파 10% (~6/30)</h3>
              </div>
              <div className="price">
                <div className="sale_per">
                  8%
                </div>
                <div className="sale_price">
                  3,504,280원
                </div>
                <div className="origin_price">
                  3,809,000원
                </div>
                <div className="cardinfo"><button>무이자 안내</button></div>
                <a href="!#">
                  <img src="./img/product/cardinfo.svg" alt="" />
                </a>
              </div>
              <div className="item_choice">
                <div className="item_choice_option">
                  <dl>
                    <dt>패브릭타입</dt>
                    <dd>
                      <select name="optionNo1">
                        <option value>= 패브릭타입 선택 =</option>
                        <option value="카시미라">카시미라</option>
                        <option value="러스티카(-350,000)">러스티카(-350,000)</option>
                      </select>
                    </dd>
                  </dl>
                  <dl>
                    <dt>색상</dt>
                    <dd>
                      <select name="optionNo2">
                        <option value>= 색상 선택 =</option>
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
                </div>
              </div>
              <div className="banner">
                <a href="https://shcard.io/ESSA">
                  <img src="https://cdn-pro-web-153-127.cdn-nhncommerce.com/jakomo2_godomall_com/site/re2023/pc/goods_view/goods_view_sh_bn.jpg" alt=""/>
                </a>
              </div>
              <div className="goods-box">
                <table>
                  <tbody>
                    <tr>
                      <td>러스티카(-350,000)/딥그레이</td>
                      <td>
                        <div className="count">
                          <input type="text" />
                          <span>
                            <button></button>
                            <button></button>
                          </span>
                        </div>
                      </td>
                      <td>13,800,000원</td>
                      <td>
                        <button><img src="./img/product/ico_cart_del.png" alt="" /></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="btn-box">
                <button className='heart'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.639 4.38981L12.1111 4.86562L12.5832 4.38981C14.8649 2.09006 18.5621 2.09006 20.8438 4.38981C23.1284 6.69247 23.1284 10.428 20.8438 12.7306L12.4396 21.2012C12.2627 21.3796 11.9596 21.3796 11.7826 21.2012L3.37844 12.7306C1.09385 10.428 1.09385 6.69247 3.37844 4.38981C5.66015 2.09006 9.35733 2.09006 11.639 4.38981Z" stroke="#1A1A1A" stroke-width="1.33"></path></svg>
                </button>
                <button className='cart'>장바구니</button>
                <button className='buy'>바로구매</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

