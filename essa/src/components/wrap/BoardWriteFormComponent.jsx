import React from 'react';
import './scss/board_write.scss';
import $ from 'jquery';

export default function BoardWriteFormComponent (){
    const [state, setState] = React.useState({
        category : '',
        user_name :'',
        subject: '',
        isSubjectError:false,
        content: ''
    })

    const onChangeCategory=(e)=>{
        let 카테고리 = e.target.value;
        setState({
            ...state,
            category: 카테고리
        })
    }

    const onChangeUserName=(e)=>{
        let 이름 = e.target.value;
        setState({
            ...state,
            user_name: 이름
        })
    }
    
    const onChangeSubject=(e)=>{
        let {value} = e.target.value;
        let isSubjectError=false;
        if(value===''){
            isSubjectError=true;
            $('.first-row').css({"border-bottom":"1px solid #ff7777"});
        }
        else {
            isSubjectError=false;
            $('.first-row').css({"border-bottom":"1px solid #ddd"});
        }
        setState({
            ...state,
            subject: value,
            isSubjectError:isSubjectError
        })
    }

    const onChangeContent=(e)=>{
        let 내용 = e.target.value;
        setState({
            ...state,
            content:내용
        })
    }

    const onSubmitProductInquiry=()=>{
        const formData = {
            
        }
    }

    return (
        <div id='BoardWrite'>
            <div className="container">
                <div className="title">
                    <h2>상품문의</h2>
                </div>
                <div className="content">
                    <form action="" name='product_inquiry' id='productInquiry' onSubmit={onSubmitProductInquiry}>
                        <div className="board_zone_write">
                            <div className="board_write_box">
                                <table className='board_write_table'>
                                    <colgroup>
                                        {/* <col style='width:15%'/>
                                        <col style='width:85%'/> */}
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th scope='row'>말머리</th>
                                            <td>
                                                <div className='category_select'>
                                                    <select name="category" id="category" onChange={onChangeCategory}>
                                                        <option value="">문의내용</option>
                                                        <option value="">상품</option>
                                                        <option value="">배송</option>
                                                        <option value="">반품/환불</option>
                                                        <option value="">기타</option>
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>작성자</th>
                                            <td>
                                                <input 
                                                    type="text" 
                                                    name='user_name'
                                                    onChange={onChangeUserName}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>제목</th>
                                            <td>
                                                <input 
                                                    type="text" 
                                                    name='subject' 
                                                    onChange={onChangeSubject}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>본문</th>
                                            <td className='write_editor'>
                                               <textarea 
                                                    type="text" 
                                                    name='content' 
                                                    onChange={onChangeContent}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="btn_center_box">
                                <button className='btn_before'><a href="!#">이전</a> </button>
                                <button className='btn_before'><a href="!#">저장</a> </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
