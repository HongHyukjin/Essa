import React from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import $ from 'jquery';
import axios from 'axios';

function IdSearchComponent(props) {

    const [state,setState] = React.useState({
        userName1 : '',
        userEmail : '',
        userName2 : '',
        userHp : ''
    })
    const [isTab, setIsTab] = React.useState(true);
    const [isBtn, setIsBtn] = React.useState(false);
    const [isBtn2, setIsBtn2] = React.useState(false);

    // const [userName, setUserName] = React.useState('');
    // const [userHp, setUserHp] = React.useState('');

    // const [userName2, setUserName2] = React.useState('');
    // const [userEmail, setUserEmail] = React.useState('');

    const onChangeName1 = (e) => {
        setState({
            ...state,
            userName1 : e.target.value
        })
    }

    const onChangeEmail = (e) => {
        setState({
            ...state,
            userEmail : e.target.value
        })
    }
    const onChangeHp = (e) => {
        setState({
            ...state,
            userHp : e.target.value
        })
    }

    const onChangeName2 = (e) => {
        setState({
            ...state,
            userName2 : e.target.value
        })
    }

    const onClickTabBtn = (e, value) => {

        if (value === "휴대폰") {
            setIsTab(true);
        }
        else {
            setIsTab(false);
        }
    }
    React.useEffect(() => {
        (state.userName1 !== '' && state.userHp !== '') ? setIsBtn(true) : setIsBtn(false);
        (state.userName2 !== '' && state.userEmail !== '') ? setIsBtn2(true) : setIsBtn2(false);

    }, [state]);

    const onSubmitIdSearch = (e) => {
        e.preventDefault();
        const formData = {
            "user_name" : state.userName1,
            "user_email" : state.userEmail
        }

        // axios({
        //     url : 'http://localhost:8080/JSP/essa/idSearch_action.jsp',
        //     method : 'POST',
        //     data : {},
        //     params : {
        //         "userName1" : state.userName1,
        //         "userEmail" : state.userEmail
        //     }
        // })
        // .then((res)=>{
        //     console.log("성공" + res );
        // })
        // .catch((err)=>{
        //     console.log("실패" + err);
        // })

        $.ajax({
            url : 'http://localhost:8080/JSP/essa/idSearch_action.jsp',
            type : 'post',
            data : formData,
            dataType : 'json',
            success(res){
                console.log('Ajax 성공')
                console.log(res);
                console.log(res.result);
            },  
            error(err){
                console.log('Ajax 실패')
                console.log(err);
            }
        })
    }


    return (
        <>
            <HeaderComponent />
            <div id='idsearch'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h1>아이디 찾기</h1>
                        </div>
                        <div className="content">
                            <form action="formFindId" method='post' onSubmit={onSubmitIdSearch} >
                                <div className="find-id-box">
                                    <div className="choose-btn">
                                        <input type="radio" id='radiotab1' name='radiotab' onClick={(e) => onClickTabBtn(e, "휴대폰")} className={isTab ? 'on' : ''} defaultChecked/><label htmlFor="radiotab1" >이메일</label>
                                        <input type="radio" id='radiotab2' name='radiotab' onClick={(e) => onClickTabBtn(e, "이메일")} className={isTab ? '' : 'on'} /><label htmlFor="radiotab2">휴대폰번호</label>
                                    </div>
                                    {
                                        isTab ? 
                                        (
                                            <>
                                                <div className="idsearch-main-box">
                                                    <div className="idsearch-box">
                                                        <ul>
                                                            <li><input onChange={onChangeName1} type="text" className='input-name' name='user_name' id='user_name' value={state.userName1} placeholder='이름' /></li>
                                                            <li><input onChange={onChangeEmail} type="text" className='input-email' name='user_email' id='user_email' value={state.userEmail} placeholder='가입메일주소' /></li>
                                                        </ul>
                                                    </div>
                                                    <button  className='idsearch-btn' >아이디 찾기</button>
                                                </div>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                            <div className="idsearch-main-box">
                                                <div className="idsearch-box">
                                                    <ul>
                                                        <li><input type="text" onChange={onChangeName2} className='input-name' name='userName2' id='userName2' value={state.userName2} placeholder='이름' /></li>
                                                        <li><input type="text" onChange={onChangeHp} className='input-email' name='userHp' id='userHp' value={state.userHp} placeholder='가입휴대폰번호' /></li>
                                                    </ul>
                                                </div>
                                                <button className='idsearch-btn'>아이디 찾기</button>
                                            </div>
                                            </> 
                                        )
                                    }

                                </div>
                                <div className="btn-member-sec">
                                    <ul>
                                        <li><button className='pwsearch-btn'>비밀번호 찾기</button></li>
                                        <li><button className='login-btn'>로그인하기</button></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    );
}

export default IdSearchComponent;