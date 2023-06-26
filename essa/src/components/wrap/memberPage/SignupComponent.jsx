import React from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';


function SignupComponent(props) {
    return (
        <>
        <HeaderComponent/>
        <div id='signup'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="signup-title">
                            <h1>정보입력</h1>
                        </div>
                    </div>
                    <div className="content">
                        <form id='signupForm' action="" method='post'>
                            
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