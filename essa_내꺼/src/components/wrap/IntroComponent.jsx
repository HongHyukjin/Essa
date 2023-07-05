import React from 'react';
import $ from 'jquery';
import { Routes, Route} from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import MainComponent from './MainComponent';
import EssaClubComponent from './subPage/EssaClubComponent';

function IntroComponent(props) {
    return (
        <>
            <HeaderComponent/>
                <Routes>
                    <Route index element={<MainComponent/>}/>
                    <Route path='/메인' element={<MainComponent/>}/>
                    <Route path='/클럽페이지' element={<EssaClubComponent/>}/>
                </Routes>           
            <FooterComponent/>
        </>
    );
}

export default IntroComponent;