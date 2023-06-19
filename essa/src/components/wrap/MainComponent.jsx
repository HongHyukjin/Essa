import React from 'react';
import $ from 'jquery';
import Section5Component from './main/Section5Component';
import Section7Component from './main/Section7Component';
import Section8Component from './main/Section8Component';
import Section9Component from './main/Section9Component';

export default function MainComponent () {
    return (
        <main id='main'>
            <Section5Component/>
            <Section7Component/>
            <Section8Component/>
            <Section9Component/>
        </main>
    );
};

