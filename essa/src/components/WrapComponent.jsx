import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import Section4Component from './wrap/main/Section4Component';
import Section6Component from './wrap/main/Section6Component';
import Section11Component from './wrap/main/Section11Component';

export default function WrapComponent ()  {
    return (
        <div id='wrap'>
            <HeaderComponent/>
            <MainComponent/>
            <Section4Component/>
            <Section6Component/>
            <Section11Component/>
            <FooterComponent/>
        </div>
    );
};

