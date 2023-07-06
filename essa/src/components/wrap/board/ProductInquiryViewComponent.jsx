import React from 'react';
import './board_scss/product_inquiry_view.scss';
import axios from 'axios';
import { Link,useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import HeaderComponent from '../HeaderComponent';
import $ from 'jquery';
import FooterComponent from '../FooterComponent';


export default function ProductInquiryViewComponent (props){
  const [param, setParam] = useSearchParams();
  const listNum = param.get('listNum');

  const [state, setState] = React.useState({
      notice: {}
  })
  
  const {notice} = state;

  React.useEffect(()=>{

      axios({
          url:'http://localhost:8080/JSP/essa/product_inquiry_selectall.jsp',
          method:'GET',
      })
      .then((res)=>{
          if(res.status===200){
              // console.log(res.data.notice);
              let result = res.data.notice.filter((item) => item.NO===Number(listNum));
              console.log(result);

              setState({
                  notice: result[0]
              })
          }
      })
      .catch((err)=>{
          console.log('AXIOS 실패!' + err);
      })
  },[]);


    return (
        <>
        <HeaderComponent />
        <div id="productView">
          <div className="container">
            <div className="title">
              <h2>상품문의</h2>
            </div>
            <div className="content" >
                <div className="board_view_tit">
                  <h3>{notice.category}{notice.subject}</h3>
                  <div className="board_view_info">
                    <ul>
                      <li><p>{notice.user_id}</p></li>
                      <li><em>{notice.write_date}</em></li>
                      <li><p>조회수 158</p></li>
                    </ul>
                  </div>
                  <div className="board_view_content">
                    <div className="seem_cont">
                      <ul>
                        <li><b>Q.</b></li>
                        <li><span>{notice.content}</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
            <div className="btn_right_box">
              <button><Link to="/상품문의글수정폼">수정</Link></button>
              <button><Link to="/">삭제</Link></button>
              <button><Link to="/상품문의글목록">목록</Link></button>
            </div>
          </div>
        </div>
        <FooterComponent />
      </>
    );
};

