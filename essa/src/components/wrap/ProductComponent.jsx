import React from 'react';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function ProductComponent () {

  const [state,setState] = React.useState({
      쇼핑 : [],
      viewnum : 12
  });

  const getProduct = () => {
    axios({
      url: './data/product.json',
      method: 'GET'
    })
      .then((res) => {
        setState({
          ...state,
          쇼핑: res.data.쇼핑
        })
        localStorage.setItem('쇼핑', JSON.stringify(state.쇼핑));
      })
      .catch((err) => {
        console.log("AXIOS 오류!" + err)
      })
  }

  React.useEffect(()=>{
    localStorage.setItem('쇼핑', JSON.stringify(state.쇼핑));
      getProduct();
  },[state.쇼핑]);

  const [list, setList] = React.useState(4);  // 한화면에 보여질 목록개수
  const [pageNumber, setPageNumber] = React.useState(1); // 페이지번호
  const [groupPage] = React.useState(10); // 페이지번호 그룹1(1(1~5) 그룹2(6!~10) 그룹3(11~15) 그룹4(16~20))
  const [cnt, setCnt] = React.useState(1); // 페이지번호 그룹 1

  const [startNum, setStartNum] = React.useState(); // 그룹 시작 번호
  const [endtNum, setEndtNum] = React.useState();  // 그룹 끝 번호
  const [click, setClick] = React.useState('');

  //  페이지번호 클릭 이벤트
  const onClickPageNum = (e, num) => {
    e.preventDefault();
    setPageNumber(num);
    window.scrollTo(0,0);
  }

  // 그룹페이지 클릭  다음카운트 이벤트
  const onClickNextGroup = (e) => {
    e.preventDefault();
    setCnt(cnt + 1);
    setClick('');
  }

  const onClickNextGroupLastPage = (e) => {
    e.preventDefault();
    setCnt(Math.ceil(state.쇼핑.length / list / groupPage));
    setClick('Last');
  }

  // 그룹페이지 클릭  이전카운트 이벤트
  const onClickPrevGroup = (e) => {
    e.preventDefault();
    setCnt(cnt - 1);
    setClick('');
  }

  const onClickPrevGroupFirstPage = (e) => {
    e.preventDefault();
    setCnt(1);
    setClick('First');
  }

  // 그룹 시작번호 설정 => cnt 또는 groupPage 값 변경이 있거나 설정되었다면 시작번호 설정 실행
  React.useEffect(() => {
    setStartNum((cnt - 1) * groupPage);
  }, [cnt, groupPage]);

  // 그룹 끝번호 설정
  React.useEffect(() => {
    setEndtNum(startNum + groupPage);
  }, [startNum, groupPage]);

  // 그룹 시작페이지 설정 => 그룹페이지 이동시 그룹의 첫페이지 설정
  React.useEffect(() => {
    if(click === ''){
      setPageNumber(startNum + 1);
    }
    else if(click === 'First'){
      setPageNumber(1);
    }
    else if(click === 'Last'){
      setPageNumber(Math.ceil(state.쇼핑.length / list));
    }
  }, [endtNum, startNum]);

  React.useEffect(() => {
    setList(state.viewnum);
  }, [state.viewnum]);

  const onChangeViewNum = (e) => {
    const {value} = e.target;
    setState({
      ...state,
      viewnum : Number(value)
    })
  }

  return (
    <>
      <HeaderComponent />
      <div id="product">
        <div className="container">
          <div className="gap">
            <div className="title">
              <h1>Product</h1>
            </div>
            <div className="content">
              <div className="nav">
                <ul>
                  <li><a href="" className='nav-btn on'>전체</a></li>
                  <li><a href="" className='nav-btn'>사이즈</a></li>
                  <li><a href="" className='nav-btn'>소재</a></li>
                  <li><a href="" className='nav-btn'>타입</a></li>
                  <li><a href="" className='nav-btn'>LIFE</a></li>
                  <li><a href="" className='nav-btn'>LOVE PET</a></li>
                </ul>
              </div>
              <div className="best-seller">
                <div className="text">
                  <div className="t01">Best seller</div>
                  <div className="t02">요즘 가장 많이 구매해 주신 베스트</div>
                </div>
                <div className="best-list">
                  <section className='story-main'>
                    <div className="main-box one">
                      <a href="">
                        <div className="overlay"></div>
                        <div className="text hashtag">
                          <p className='t1'>#Swing</p>
                          <p className='t2'>Daze</p>
                        </div>
                        <img src="./img/product/daze.jpg" alt="" />
                      </a>
                    </div>
                    <div className="main-box two">
                      <a href="">
                        <div className="overlay"></div>
                        <div className="text hashtag">
                          <p className='t1'>#Corner</p>
                          <p className='t2'>New Lido</p>
                        </div>
                        <img src="./img/product/newlido.jpg" alt="" />
                      </a>
                    </div>
                    <div className="main-box three">
                      <a href="">
                        <div className="overlay"></div>
                        <div className="text hashtag">
                          <p className='t1'>#Basic</p>
                          <p className='t2'>Clio</p>
                        </div>
                        <img src="./img/product/clio.jpg" alt="" />
                      </a>
                    </div>
                    <div className="main-box four">
                      <a href="">
                        <div className="overlay"></div>
                        <div className="text hashtag">
                          <p className='t1'>#MODULE</p>
                          <p className='t2'>Bagel</p>
                        </div>
                        <img src="./img/product/bagel.jpg" alt="" />
                      </a>
                    </div>
                  </section>
                </div>
              </div>
              <div className="category">
                <span className='pick_list_num'>
                  상품
                  <strong>745</strong>
                  개
                </span>
                <form name="frmList">
                  <div className="pick_list_box">
                    <ul className='pick_list'>
                      <li>
                        <input type="radio" name="sort" id="sort1" className='radio'  />
                        <label htmlFor="sort1" className='on' >추천순</label>
                      </li>
                      <li>
                        <input type="radio" name="sort" id="sort2" className='radio'  />
                        <label htmlFor="sort2" className='' >판매인기순</label>
                      </li>
                      <li>
                        <input type="radio" name="sort" id="sort3" className='radio'  />
                        <label htmlFor="sort3" className='' >낮은가격순</label>
                      </li>
                      <li>
                        <input type="radio" name="sort" id="sort4" className='radio'  />
                        <label htmlFor="sort4" className='' >높은가격순</label>
                      </li>
                      <li>
                        <input type="radio" name="sort" id="sort5" className='radio'  />
                        <label htmlFor="sort5" className='' >상품평순</label>
                      </li>
                      <li>
                        <input type="radio" name="sort" id="sort6" className='radio'  />
                        <label htmlFor="sort6" className='' >등록일순</label>
                      </li>
                    </ul>
                    <div className="choice_num_view">
                      <select name="pageNum" value={state.viewnum} onChange={onChangeViewNum} >
                        <option value="12" selected >12개씩보기</option>
                        <option value="24">24개씩보기</option>
                        <option value="36">36개씩보기</option>
                        <option value="48">48개씩보기</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="product_list">
                <ul>
                  {
                    state.쇼핑.map((item, idx) => {
                      if( Math.ceil((idx+1)/list) === pageNumber ){
                        return (
                          <li key={item.제품코드}>
                            <div className="item_cont">
                              <div className="photo_box">
                                <Link to={`/쇼핑/상세보기/${item.제품코드}`}>
                                  <img src={item.이미지} alt="" />
                                  <div className="item_link">
                                    <div className="inner">
                                      <button type='button'>
                                        <img src="https://cdn-pro-web-153-127.cdn-nhncommerce.com/jakomo2_godomall_com/data/skin/front/essa2023/img/mimg/cart_thumb.png" alt="" />
                                      </button>
                                      <button type='button' className='right'>
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
                                  <span className={`origin_price ${item.할인율===0?'on':''}`}>{item.원가}원</span>
                                  <span className='sale_price' style={{"display":`${item.할인가===0?'none':'inline'}`}}>{item.할인가}원</span>
                                  <span className='sale_per' style={{"display":`${item.할인가===0?'none':'inline'}`}}>{item.할인율}%</span>
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
                      }
                    })
                  }
                </ul>
              </div>
              <div className="pagenation">
                <div className="page-button-box">

                  {cnt > 1 && <a href="!#" className="prev-btn" onClick={onClickPrevGroupFirstPage}>&lt;&lt;</a>}
                  {cnt > 1 && <a href="!#" className="prev-btn" onClick={onClickPrevGroup}>&lt;</a>}
                  {
                    (() => {
                      let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                      for (let i = startNum; i < endtNum; i++) {
                        if (i < Math.ceil(state.쇼핑.length / list)) { // 100/6
                          arr = [...arr, <a key={i} data-key={`num${i}`} className={pageNumber === (i + 1) ? 'on' : null} href="!#" onClick={(e) => onClickPageNum(e, (i + 1))}>{i + 1}</a>]
                          // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                        }
                      }
                      return arr
                    })()
                  }
                  {cnt < Math.ceil(state.쇼핑.length / list / groupPage) && <a href="!#" className="next-btn" onClick={onClickNextGroup}>&gt;</a>}
                  {cnt < Math.ceil(state.쇼핑.length / list / groupPage) && <a href="!#" className="next-btn" onClick={onClickNextGroupLastPage}>&gt;&gt;</a>}

                </div>    
              </div>
            </div>
          </div>
        </div>
      </div>
    <FooterComponent />
    </>
  );
};

