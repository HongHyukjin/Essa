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
              <img src="" alt="" />
            </div>
            <div className="item_info">
              <div className="tit">
                <h2>엠마 4인 코너형 리프트기능 카시미라 패브릭 소파</h2>
                <div className="line"></div>
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
                <div className="cardinfo">무이자 안내</div>
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
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

