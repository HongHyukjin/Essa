import React from 'react';
import './board_scss/board_write_update.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';

export default function ProductInquiryUpdateComponent (){
    const [state, setState] = React.useState({
        category : '',
        user_name :'',
        subject: '',
        isSubjectError:false,
        content: ''
    })

    const onChangeCategory=(e)=>{
        const {value} = e.target;
        setState({
            ...state,
            category: value
        })
    }

    const onChangeUserName = (e) => {
        const {value} = e.target;
        setState({
            ...state,
            user_name: value
          
        })
    }
    
    const onChangeSubject=(e)=>{
        const {value} = e.target;
        setState({
            ...state,
            subject: value
        })
    }

    

    const onChangeContent=(e)=>{
        const {value} = e.target;
        setState({
            ...state,
            content: value
        })
    }

    const getUserData = () => {
        const user_id = sessionStorage.getItem('user_id');
        const form_data = {
            "user_id" : user_id
        }
  
        $.ajax({
            url: 'http://localhost:8080/JSP/essa/product_update_getjoin_action.jsp',
            type:'POST',
            data:form_data, 
            dataType:'json',
            success(res) {
                console.log('AJAX 성공!');
                console.log('---------');
                console.log(res.result); // 결과 데이터 출력 
                setState((prevState) => ({
                    ...prevState,
                    category : res.result.카테고리 === "null" ? '' : res.result.카테고리,
                    user_name : res.result.이름 === "null" ? '' : res.result.이름,
                    subject : res.result.제목 === "null" ? '' : res.result.제목,
                    content : res.result.내용 === "null" ? '' :res.result.내용
                }))
            },
            error(err){
                console.log('AJAX 실패' + err);
            }
        })
    }

    React.useEffect(()=>{
        getUserData();
    },[])

    const onSubmitProductInquiryUpdate=(e)=>{
        e.preventDefault();
        const formData = {
            "ㅇㄴㅁㅇㅁㄴ":sessionStorage.getItem("ㅇㄴㅁㅇㅁㄴ"),
            "category":state.category,
            "ㅇㄴㅁㅇㅁㄴ":state.user_name,
            "subject":state.subject,
            "content":state.content
        }
        $.ajax({
            url:'http://localhost:8080/JSP/essa/product_inquiry_update_action.jsp',
            type:'POST',
            data:formData,
            success(res){
                console.log('AJAX 성공!');
                console.log(res);
                console.log(JSON.parse(res));
                alert('회원 정보가 성공적으로 바뀌었습니다.');
                // window.location.href = '/마이페이지/회원정보수정';
                window.location.href='/상품문의글목록';
            },
            error(err){
                console.log('AJAX 실패'+err);
            }
        });
    }


 
    return (
        <>
            <HeaderComponent/>
                <div id='BoardWriteUpdate'>
                    <div className="container">
                        <div className="title">
                            <h2>상품문의 수정</h2>
                        </div>
                        <div className="content">
                            <form action="" name='product_inquiry_update_form' id='productInquiryUpdateForm' onSubmit={onSubmitProductInquiryUpdate}>
                                <div className="board_zone_write">
                                    <div className="board_write_box">
                                        <table className='board_write_table'>
                                            <tbody>
                                                <tr>
                                                    <th scope='row'>말머리</th>
                                                    <td>
                                                        <div className='category_select'>
                                                            <select name="category" id="category" onChange={onChangeCategory} value={state.category}>
                                                                <option value="문의내용">문의내용</option>
                                                                <option value="상품">상품</option>
                                                                <option value="배송">배송</option>
                                                                <option value="반품/환불">반품/환불</option>
                                                                <option value="기타">기타</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope='row'>작성자</th>
                                                    <td>
                                                        <input 
                                                            type="text" 
                                                            id='user_name'
                                                            name='user_name'
                                                            onChange={onChangeUserName}
                                                            value={state.user_name}
                                                            disabled={true}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope='row'>제목</th>
                                                    <td>
                                                        <input 
                                                            type="text" 
                                                            id='subject'
                                                            name='subject' 
                                                            onChange={onChangeSubject}
                                                            value={state.subject}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope='row'>본문</th>
                                                    <td className='write_editor'>
                                                    <textarea 
                                                            type="text" 
                                                            id='content'
                                                            name='content' 
                                                            onChange={onChangeContent}
                                                            value={state.content}
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="btn_center_box">
                                        <button className='btn_before'><Link to="/상품문의글목록">이전</Link></button>
                                        <button className='btn_before' type='submit'><a href="!#" >저장</a> </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            <FooterComponent/>
        </>
    );
};
