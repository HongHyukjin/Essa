import React from 'react';
import SigninComponent from './wrap/memberPage/SigninComponent';
import SignupComponent from './wrap/memberPage/SignupComponent';
import IntroComponent from './wrap/IntroComponent';
import NomemberComponent from './wrap/memberPage/NomemberComponent';
import { HashRouter, Routes , Route} from 'react-router-dom';
import EssaClubComponent from './wrap/subPage/EssaClubComponent';
import ProductComponent from './wrap/ProductComponent';

export default function WrapComponent ()  {
    return (
        <div id='wrap'>
            <HashRouter>
                <Routes>
                    {/* <Route path='/*' element={<IntroComponent/>}/> */}
                    <Route path='/로그인' element={<SigninComponent/>}/>
                    <Route path='/회원가입' element={<SignupComponent/>}/>
                    <Route path='/로그인/비회원페이지' element={<NomemberComponent/>}/>
                    <Route path='/' element={<ProductComponent />}/>
                </Routes>
            </HashRouter>
        </div>
    );
};
