import React from 'react';
import $ from 'jquery';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';


function SignupComponent(props) {

    const onClickAgr =(e,value) =>{
        if(value==='email'){
            $('#signup .agr1').toggleClass(' on');
        }
        if(value==='sms'){
            $('#signup .agr2').toggleClass(' on');
        }
        
    }
    return (
        <>
        <HeaderComponent/>
        <div id='signup'>
            <div className="container">
                <div className="gap">
                    <div className="link-box">
                        <ul>
                            <li><a href="!#">HOME</a></li>
                            <li>회원가입</li>
                            <li>정보입력</li>
                        </ul>
                    </div>
                    <div className="title">
                        <h1>정보입력</h1>
                    </div>
                    <div className="content">
                        <form id='signupForm' action="" method='post'>
                        <div className="sub-title">
                            <h3>기본정보</h3>
                            <p>표시는 반드시 입력하셔야 하는 항목입니다.</p>
                        </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th className='important'><span>아이디</span></th>
                                        <td>
                                            <input type="text" />
                                            <p className='err'>아이디는 영문, 숫자, 특수문자(-),(_),(.),(@)만 입력하실 수 있습니다.(@는 1개만 입력 가능합니다.)</p>
                                            <p className='possible'>사용가능한 아이디입니다.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='important'><span>비밀번호</span></th>
                                        <td><input type="text" /></td>
                                    </tr>
                                    <tr>
                                        <th className='important'><span>비밀번호 확인</span></th>
                                        <td><input type="text" /></td>
                                    </tr>
                                    <tr>
                                        <th className='important'><span>이름</span></th>
                                        <td><input type="text" /></td>
                                    </tr>
                                    <tr>
                                        <th className='important'><span>이메일</span></th>
                                        <td className='email'>
                                            <input type="text" />
                                            <select name="" id="">
                                                <option value="직접입력">직접입력</option>
                                                <option value="naver.com">naver.com</option>
                                                <option value="hanmail.net">hanmail.net</option>
                                                <option value="daum.net">daum.net</option>
                                                <option value="nate.com">nate.com</option>
                                                <option value="hotmail.com">hotmail.com</option>
                                                <option value="gmail.com">gmail.com</option>
                                                <option value="icloud.com">icloud.com</option>                                          
                                            </select>
                                            <label className='agr1' htmlFor="" onClick={(e)=>onClickAgr(e,'email')}>정보/이벤트 메일 수신에 동의합니다.</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className='important'><span>휴대폰번호</span></th>
                                        <td>
                                            <input type="text" />
                                            <label className='agr2' htmlFor="" onClick={(e)=>onClickAgr(e,'sms')}>정보/이벤트 SMS 수신에 동의합니다.</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><span>전화번호</span></th>
                                        <td>
                                            <input type="text" placeholder=' - 없이 입력하세요.'/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><span>주소</span></th>
                                        <td className='addr'>
                                            <input type="text"/><button>우편번호검색</button>
                                            <input type="text"/>
                                            <input type="text"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="sub-title">
                                <h3>부가 정보</h3>
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th className='important'><span>생일</span></th>
                                        <td className='birth'>
                                            <input type="text" placeholder='4자리 입력'/>
                                            <select name="" id="">
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                                <option value="04">04</option>
                                                <option value="05">05</option>
                                                <option value="06">06</option>
                                                <option value="07">07</option>
                                                <option value="08">08</option>
                                                <option value="09">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                            <select name="" id="">
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                                <option value="04">04</option>
                                                <option value="05">05</option>
                                                <option value="06">06</option>
                                                <option value="07">07</option>
                                                <option value="08">08</option>
                                                <option value="09">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="btn-box">
                                <button>취소</button>
                                <button type='submit'>회원가입</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent/>
        </>
    );
}

export default SignupComponent;