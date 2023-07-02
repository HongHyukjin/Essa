import React from 'react';
import './board_scss/board.scss'
import { Link } from 'react-router-dom';

export default function BoardComponent(){
    return (
        <div id='Board'>
            <div className="container">
                <div className="title">
                    <h2>공지사항</h2>
                </div>
                <div className="content">
                    <div className="board_nav">
                        <ul>
                            <li><a className='on' href="!#">공지사항</a></li>
                            <li><Link to="/상품문의글목록"  className='' >상품문의</Link></li>
                            <li><a className='' href="!#">자주하는 질문</a></li>
                            <li><a className='' href="!#">AS문의</a></li>
                            <li><a className='' href="!#">케어서비스</a></li>
                        </ul>
                    </div>
                    <div className="board_zone_cont">
                        <div className="board_zone_list" align="center">
                            <table className='board_list_table'>
                                <colgroup>
                                    <col Style ="width:6%"/>
                                    <col Style ="width:37%"/>
                                    <col Style ="width:7%"/>
                                    <col Style ="width:15%"/>
                                    <col Style ="width:6%"/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>제목</th>
                                        <th>날짜</th>
                                        <th>작성자</th>
                                        <th>조회</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>115</td>
                                        <td className='board_tit'>
                                            <Link to='/공지사항글내용'>
                                                <strong>에싸 백화점 구매 고객 2월 프로모션 이벤트 당첨자 안내</strong>
                                            </Link>
                                        </td>
                                        <td> 2023.05.08 </td>
                                        <td>  ESSA  </td>
                                        <td>   49   </td>
                                    </tr>
                                    <tr>
                                        <td>114</td>
                                        <td className='board_tit'>
                                            <a href="!#">
                                                <strong>에싸 현대 판교점 가죽소파 출시 프로모션 당첨자</strong>
                                            </a>
                                        </td>
                                        <td> 2023.05.08 </td>
                                        <td>  ESSA  </td>
                                        <td>   49   </td>
                                    </tr>
                                    <tr>
                                        <td>113</td>
                                        <td className='board_tit'>
                                            <a href="!#">
                                                <strong>에싸 백화점 구매 고객 2월 프로모션 이벤트 당첨자 안내</strong>
                                            </a>
                                        </td>
                                        <td> 2023.05.08 </td>
                                        <td>  ESSA  </td>
                                        <td>   49   </td>
                                    </tr>
                                    <tr>
                                        <td>113</td>
                                        <td className='board_tit'>
                                            <a href="!#">
                                                <strong>에싸 백화점 구매 고객 2월 프로모션 이벤트 당첨자 안내</strong>
                                            </a>
                                        </td>
                                        <td> 2023.05.08 </td>
                                        <td>  ESSA  </td>
                                        <td>   49   </td>
                                    </tr>
                                    <tr>
                                        <td>112</td>
                                        <td className='board_tit'>
                                            <a href="!#">
                                                <strong>에싸 백화점 구매 고객 2월 프로모션 이벤트 당첨자 안내</strong>
                                            </a>
                                        </td>
                                        <td> 2023.05.08 </td>
                                        <td>  ESSA  </td>
                                        <td>   49   </td>
                                    </tr>
                                    <tr>
                                        <td>111</td>
                                        <td className='board_tit'>
                                            <a href="!#">
                                                <strong>에싸 백화점 구매 고객 2월 프로모션 이벤트 당첨자 안내</strong>
                                            </a>
                                        </td>
                                        <td> 2023.05.08 </td>
                                        <td>  ESSA  </td>
                                        <td>   49   </td>
                                    </tr>
                                    <tr>
                                        <td>110</td>
                                        <td className='board_tit'>
                                            <a href="!#">
                                                <strong>에싸 백화점 구매 고객 2월 프로모션 이벤트 당첨자 안내</strong>
                                            </a>
                                        </td>
                                        <td> 2023.05.08 </td>
                                        <td>  ESSA  </td>
                                        <td>   49   </td>
                                    </tr>
                                    <tr>
                                        <td>109</td>
                                        <td className='board_tit'>
                                            <a href="!#">
                                                <strong>에싸 백화점 구매 고객 2월 프로모션 이벤트 당첨자 안내</strong>
                                            </a>
                                        </td>
                                        <td> 2023.05.08 </td>
                                        <td>  ESSA  </td>
                                        <td>   49   </td>
                                    </tr>
                                    <tr>
                                        <td>108</td>
                                        <td className='board_tit'>
                                            <a href="!#">
                                                <strong>에싸 백화점 구매 고객 2월 프로모션 이벤트 당첨자 안내</strong>
                                            </a>
                                        </td>
                                        <td> 2023.05.08 </td>
                                        <td>  ESSA  </td>
                                        <td>   49   </td>
                                    </tr>
                                    <tr>
                                        <td>107</td>
                                        <td className='board_tit'>
                                            <a href="!#">
                                                <strong>에싸 백화점 구매 고객 2월 프로모션 이벤트 당첨자 안내</strong>
                                            </a>
                                        </td>
                                        <td> 2023.05.08 </td>
                                        <td>  ESSA  </td>
                                        <td>   49   </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

