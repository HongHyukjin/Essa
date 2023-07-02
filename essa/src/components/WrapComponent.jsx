import React from 'react';
import SigninComponent from './wrap/memberPage/SigninComponent';
import SignupComponent from './wrap/memberPage/SignupComponent';
import IntroComponent from './wrap/IntroComponent';
import NomemberComponent from './wrap/memberPage/NomemberComponent';
import { HashRouter, Routes , Route} from 'react-router-dom';
import MypageComponent from './wrap/mypage/MypageComponent';
import ZzimComponent from './wrap/mypage/ZzimComponent';
import ProductComponent from './wrap/ProductComponent';
import ProductDetailComponent from './wrap/ProductDetailComponent';
import BasketComponent from './wrap/mypage/BasketComponent';
import UpdateComponent from './wrap/mypage/UpdateComponent';
import BoardComponent from './wrap/board/BoardComponent';
import ProductInquiryComponent from './wrap/board/ProductInquiryComponent.jsx';
import BoardWriteFormComponent from './wrap/board/BoardWriteFormComponent';
import BoardViewPageComponent from './wrap/board/BoardViewPageComponent';
import ProductInquiryViewPageComponent from './wrap/board/ProductInquiryViewPageComponent';

export default function WrapComponent ()  {
    return (
        <div id='wrap'>
            <HashRouter>
                <Routes>
                    <Route path='/*' element={<IntroComponent/>}/>
                    <Route path='/로그인' element={<SigninComponent/>}/>
                    <Route path='/회원가입' element={<SignupComponent/>}/>
                    <Route path='/로그인/비회원페이지' element={<NomemberComponent/>}/>
                    <Route path='/마이페이지' element={<MypageComponent/>}/>
                    <Route path='/찜페이지' element={<ZzimComponent/>}/>
                    <Route path='/쇼핑' element={<ProductComponent />}/>
                    <Route path='/상세보기' element={<ProductDetailComponent />}/>
                    <Route path='/고객센터' element={<BoardComponent/>}/>
                    <Route path='/공지사항글내용' element={<BoardViewPageComponent/>}/>
                    <Route path='/상품문의글목록' element={<ProductInquiryComponent/>}/>
                    <Route path='/상품문의글내용' element={<ProductInquiryViewPageComponent/>}/>
                    <Route path='/상품문의글작성' element={<BoardWriteFormComponent/>}/>
                    <Route path='/장바구니' element={<UpdateComponent/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
};
