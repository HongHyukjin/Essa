import React from 'react';
import SigninComponent from './wrap/memberPage/SigninComponent';
import SignupComponent from './wrap/memberPage/SignupComponent';
import IntroComponent from './wrap/IntroComponent';
import NomemberComponent from './wrap/memberPage/NomemberComponent';
import { HashRouter, Routes , Route} from 'react-router-dom';
import EssaClubComponent from './wrap/subPage/EssaClubComponent';
import ProductComponent from './wrap/ProductComponent';
import ProductDetailComponent from './wrap/ProductDetailComponent';
import MypageComponent from './wrap/mypage/MypageComponent';
import ZzimComponent from './wrap/mypage/ZzimComponent';
import BoardComponent from './wrap/BoardComponent';
import BasketComponent from './wrap/mypage/BasketComponent';
import UpdateComponent from './wrap/mypage/UpdateComponent';

export default function WrapComponent ()  {
    return (
        <div id='wrap'>
            <HashRouter>
                <Routes>
                    <Route path='/*' element={<IntroComponent/>}/>
                    <Route path='/로그인' element={<SigninComponent/>}/>
                    <Route path='/회원가입' element={<SignupComponent/>}/>
                    <Route path='/로그인/비회원페이지' element={<NomemberComponent/>}/>
                    <Route path='/쇼핑' element={<ProductComponent />}/>
                    <Route path='/상세보기' element={<ProductDetailComponent />}/>
                    <Route path='/마이페이지' element={<MypageComponent/>}/>
                    <Route path='/찜페이지' element={<ZzimComponent/>}/>
                    <Route path='/쇼핑' element={<ProductComponent />}/>
                    <Route path='/상세보기' element={<ProductDetailComponent />}/>
                    <Route path='/고객센터' element={<BoardComponent/>}/>
                    <Route path='/장바구니' element={<UpdateComponent/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
};
