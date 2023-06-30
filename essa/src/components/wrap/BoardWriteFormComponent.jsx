import React from 'react';
import './scss/board_write.scss';

export default function BoardWriteFormComponent (){
    return (
        <div id='BoardWrite'>
            <div className="container">
                <div className="title">
                    <h2>상품문의</h2>
                </div>
                <div className="content">
                    <form action="">
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
                                                    <select name="category" id="category">
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
                                                <input type="text" name='writerNm'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>제목</th>
                                            <td>
                                                <input type="text" name='subject' />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>본문</th>
                                            <td className='write_editor'>
                                               <input type="text" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
