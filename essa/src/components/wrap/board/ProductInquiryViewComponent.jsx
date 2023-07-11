import React from 'react';
import './board_scss/product_inquiry_view.scss';
import { Link } from 'react-router-dom';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
<<<<<<< HEAD
import {useSearchParams} from 'react-router-dom';
import { json, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
=======
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe


export default function ProductInquiryViewComponent (props){

<<<<<<< HEAD
    const [param, setParam] = useSearchParams();
    const listNum = param.get('listNum');

    const [state, setState] = React.useState({
        notice: {}
    })
    
    const [data, setData] = useState({
        view:{}
       
    });

    const {view,updata}=data;
    const {user_id} = useParams();
    

    React.useEffect(()=>{
        if (localStorage.getItem('COMMUNITY') !== null) {
            let result = JSON.parse(localStorage.getItem('COMMUNITY'));
            setData({
                ...data,
                view: result[0]
                
            })
            console.log(data.view)
        }
    },[]);

    const getList= async()=>{
        try {
            axios({
                url:'http://localhost:8080/JSP/essa/product_inquiry_selectall.jsp',
                method:'GET',  
                dataType:'json'
            })
            .then((res)=>{
                setState({
                    ...state,
                    listData:res.data.result
                    
                });
                console.log(res);  
            })
            .catch((err)=>{
                console.log(err);  

            })
    
        } catch (err) {
            console.log(err);   

        }
    }
    React.useEffect(()=>{
        getList();
    },[]);

    const onClickDelete=(e)=>{
        e.preventDefault();
        console.log(view.idx);
        let formData = new URLSearchParams();
        formData.append("idx", view.idx);
        axios({
          url: 'http://localhost:8080/JSP/essa/product_delete_action.jsp',
          method: 'POST',
          data: formData, // 수정: formData를 data 속성에 전달
          params: formData
        })
          .then((res) => {
            console.log('AJAX 성공');
            console.log(res);
            alert('삭제되었습니다');
            // window.location.href = '/community';
          })
          .catch((err) => {
            console.log('AJAX 실패' + err);
          });
    }


=======
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe
    return (
        <>
            <HeaderComponent/>
                <div id='productView'>
<<<<<<< HEAD
                    <div className="container" key={user_id}>
=======
                    <div className="container">
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe
                        <div className="title">
                            <h2>상품문의</h2>
                        </div>
                        <div className="content">
                            <div className="board-view-box">
                                <div className="board_view_tit">
<<<<<<< HEAD
                                    <h3>{view.category}{view.subject}</h3>
                                </div>
                                <div className="board_view_info">
                                    <ul>
                                        <li><p>{view.user_id}</p></li>
                                        <li><em>{view.write_date}</em></li>
=======
                                    <h3>[배송]상품문의</h3>
                                </div>
                                <div className="board_view_info">
                                    <ul>
                                        <li><p>seulki4994@naver.com</p></li>
                                        <li><em>2022.01.28 15:00:01</em></li>
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe
                                        <li><p>조회수 158</p></li>
                                    </ul>
                                </div>
                                <div className="board_view_content">
                                    <div className="seem_cont">
                                        <ul>
                                            <li><b>Q.</b></li>
<<<<<<< HEAD
                                            <li><span>{view.content}</span></li>
=======
                                            <li><span>반갑습니다.</span></li>
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn_right_box">
                            <button><Link to='/상품문의글수정폼'>수정</Link> </button>
<<<<<<< HEAD
                            <button onClick={onClickDelete}>삭제</button>
=======
                            <button><Link to='/*'></Link> 삭제</button>
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe
                            <button><Link to='/상품문의글목록'>목록</Link> </button>
                        </div>
                    </div>
                </div>
            <FooterComponent/>
        </>
    );
};

