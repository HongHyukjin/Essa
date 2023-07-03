import React from 'react';
import './board_scss/product_inquiry_view.scss';
import { Link } from 'react-router-dom';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';


export default function ProductInquiryViewComponent (props){

    return (
        <>
            <HeaderComponent/>
                <div id='productView'>
                    <div className="container">
                        <div className="title">
                            <h2>상품문의</h2>
                        </div>
                        <div className="content">
                            <div className="board-view-box">
                                <div className="board_view_tit">
                                    <h3>[배송]상품문의</h3>
                                </div>
                                <div className="board_view_info">
                                    <ul>
                                        <li><p>seulki4994@naver.com</p></li>
                                        <li><em>2022.01.28 15:00:01</em></li>
                                        <li><p>조회수 158</p></li>
                                    </ul>
                                </div>
                                <div className="board_view_content">
                                    <div className="seem_cont">
                                        <ul>
                                            <li><b>Q.</b></li>
                                            <li><span>반갑습니다.</span></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn_right_box">
                            <button><Link to='/상품문의글수정폼'>수정</Link> </button>
                            <button><Link to='/*'></Link> 삭제</button>
                            <button><Link to='/상품문의글목록'>목록</Link> </button>
                        </div>
                    </div>
                </div>
            <FooterComponent/>
        </>
    );
};

