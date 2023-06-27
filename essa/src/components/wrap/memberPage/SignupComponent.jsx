import React from 'react';
import $ from 'jquery';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';

export default function SignupComponent(props) {
 
    const [state,setState] = React.useState({
        user_id:"",
        user_pw:"",
        user_pw_ok:"",
        user_name:"",
        user_email:"",
        user_hp:"",
        user_ph:"",
        user_addr1:"",
        user_addr2:"",
        user_addr3:"",
        addrKey:"ESSAADDRESS",
        user_birth_year:"",
        user_birth_month:"",
        user_birth_date:"",
        user_agr1:"메일 수신 : 비동의",
        user_agr2:"SMS 수신 : 비동의",
        isClick1:false,
        isClick2:false
    });



    const onClickAgr1 =(e) =>{
        if(state.isClick1===false){
            $('#signup .agr1').addClass(' on');
            setState({
                ...state,
                isClick1:true,
                user_agr1:"메일 수신 : 동의"
            })
        }
        if(state.isClick1===true){
            $('#signup .agr1').removeClass(' on');
            setState({
                ...state,
                isClick1:false,
                user_agr1:"메일 수신 : 비동의"
            })
        }
    }
    const onClickAgr2 =(e) =>{
        if(state.isClick2===false){
            $('#signup .agr2').addClass(' on');
            setState({
                ...state,
                isClick2:true,
                user_agr2:"SMS 수신 : 동의"
            })
        }
        if(state.isClick2===true){
            $('#signup .agr2').removeClass(' on');
            setState({
                ...state,
                isClick2:false,
                user_agr2:"SMS 수신 : 비동의"
            })
        }
    }

    const onChangeuserId =(e)=>{
           setState({
            ...state,
            user_id:e.target.value
        })
    }
    const onChangeUserPw =(e)=>{
           setState({
            ...state,
            user_pw:e.target.value
        })
    }
    const onChangeUserPwOk =(e)=>{
           setState({
            ...state,
            user_pw_ok:e.target.value
        })
    }
    const onChangeUserName =(e)=>{
           setState({
            ...state,
            user_name:e.target.value
        })
    }
    const onChangeUserEmail =(e)=>{
           setState({
            ...state,
            user_email:e.target.value
        })
    }
    const onChangeUserHp =(e)=>{
           setState({
            ...state,
            user_hp:e.target.value
        })
    }
    const onChangeUserPh =(e)=>{
           setState({
            ...state,
            user_ph:e.target.value
        })
    }

    const onChangeUserAddr1 =(e)=>{
           setState({
            ...state,
            user_addr1:e.target.value
        })
    }
    const onChangeUserAddr2 =(e)=>{
           setState({
            ...state,
            user_addr2:e.target.value
        })
    }
    const onChangeUserAddr3 =(e)=>{
           setState({
            ...state,
            user_addr3:e.target.value
        })
    }
    const onChangeUserBirthYear =(e)=>{
           setState({
            ...state,
            user_birth_year:e.target.value
        })
    }
    const onChangeUserBirthMonth =(e)=>{
           setState({
            ...state,
            user_birth_month:e.target.value
        })
    }
    const onChangeUserBirthDate =(e)=>{
           setState({
            ...state,
            user_birth_date:e.target.value
        })
    }

    const onSubmitSignUp =(e)=>{
        e.preventDefault();

        const formData = {
            "user_id": state.user_id,
            "user_pw": state.user_pw,
            "user_name": state.user_name,
            "user_email": state.user_email,
            "user_hp": state.user_hp,
            "user_ph": state.user_ph,
            "user_addr1": state.user_addr1,
            "user_addr2": state.user_addr2,
            "user_addr3": state.user_addr3,
            "user_birth_year": state.user_birth_year,
            "user_birth_month": state.user_birth_month,
            "user_birth_date": state.user_birth_date,
            "user_agr1": state.user_agr1,
            "user_agr2": state.user_agr2
        }

        $.ajax({
            url: 'http://localhost:8080/JSP/essa/signup_action.jsp',
            type: 'POST',
            data: formData,
            success(res) {
                console.log('AJAX 성공!');
                console.log(res);
                console.log(JSON.parse(res));
            },
            error(err) {
                console.log('AJAX 실패!' + err);
            }
        });
    }

    const openPopupDaumPostApi=async()=>{
        const popupFile='http://127.0.0.1:5500/public/popup.html';
        const popupName='_popupAddressApi';
        const popupWidth=530;
        const popupHeight=570;
        const popupTop= (window.innerHeight-popupHeight)/2;  
        const popupLeft= (window.innerWidth-popupWidth)/2;
        // 자식 팝업창
        const childWindow = window.open(popupFile,popupName,`width=${popupWidth},height=${popupHeight},top=${popupTop},left=${popupLeft}`);
    }

    const onClickAddrPopupOpenApi=(e)=>{
        e.preventDefault();
        openPopupDaumPostApi();      
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
                                <form id='signupForm' action="" method='post' name='sign_up' onSubmit={onSubmitSignUp}>
                                <div className="sub-title">
                                    <h3>기본정보</h3>
                                    <p>표시는 반드시 입력하셔야 하는 항목입니다.</p>
                                </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th className='important'><span>아이디</span></th>
                                                <td>
                                                    <input type="text" name='user_id' id='userId' onChange={onChangeuserId}/>
                                                    <p className='err'>아이디는 영문, 숫자, 특수문자(-),(_),(.),(@)만 입력하실 수 있습니다.(@는 1개만 입력 가능합니다.)</p>
                                                    <p className='possible'>사용가능한 아이디입니다.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='important'><span>비밀번호</span></th>
                                                <td><input type="text" name='user_pw' id='userPw' onChange={onChangeUserPw}/></td>
                                            </tr>
                                            <tr>
                                                <th className='important'><span>비밀번호 확인</span></th>
                                                <td><input type="text" name='user_pw_ok' id='userPwOk' onChange={onChangeUserPwOk}/></td>
                                            </tr>
                                            <tr>
                                                <th className='important'><span>이름</span></th>
                                                <td><input type="text" name='user_name' id='userName' onChange={onChangeUserName}/></td>
                                            </tr>
                                            <tr>
                                                <th className='important'><span>이메일</span></th>
                                                <td className='email'>
                                                <input type="text" name='user_email' id='userEmail' onChange={onChangeUserEmail}/>
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
                                                    <label className='agr1' htmlFor="" onClick={onClickAgr1}>정보/이벤트 메일 수신에 동의합니다.</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='important'><span>휴대폰번호</span></th>
                                                <td>
                                                    <input type="text" name='user_hp' id='userHp' onChange={onChangeUserHp}/>
                                                    <label className='agr2' htmlFor="" onClick={onClickAgr2}>정보/이벤트 SMS 수신에 동의합니다.</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th><span>전화번호</span></th>
                                                <td>
                                                    <input type="text" placeholder=' - 없이 입력하세요.' name='user_ph' id='userPh' onChange={onChangeUserPh}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th><span>주소</span></th>
                                                <td className='addr'>
                                                    <input type="text" name='user_addr1' id='userAddr1' onChange={onChangeUserAddr1} value={state.user_addr1}/><button onClick={onClickAddrPopupOpenApi}>우편번호검색</button>
                                                    <input type="text" name='user_addr2' id='userAddr2' onChange={onChangeUserAddr2} value={state.user_addr2}/>
                                                    <input type="text" name='user_addr3' id='userAddr3' onChange={onChangeUserAddr3} value={state.user_addr3}/>
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
                                                    <input type="text" placeholder='4자리 입력' name='user_birth_year' id='userBirthYear' onChange={onChangeUserBirthYear}/>
                                                    <select name="user_birth_month" id="userBirthMonth" onChange={onChangeUserBirthMonth}>
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
                                                    <select name="user_birth_date" id="userBirthDate" onChange={onChangeUserBirthDate}>
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
