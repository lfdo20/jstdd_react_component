import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('FullHeader Component', module)
    .add('with title', () => (
        <FullHeader title="Título" />
    ))
    .add('with title and subtitle', () => (
        <FullHeader
            title="Título"
            subtitle="Teste de react component"
        />
    ))
    .add('with title and subtitle font', () => (
        <FullHeader
            title="Título"
            subtitle="Teste de react component"
            font="cursive"
        />
    ))
    .add('with title, subtitle and bgcolor', () => (
        <FullHeader
            title="Título"
            subtitle="Teste de react component"
            font="cursive"
            bgColor="blue"
        />
    ))
    .add('with title, subtitle, bgcolor, text color', () => (
        <FullHeader
            title="Título"
            csubtitle="Teste de react component"
            font="cursive"
            bgColor="blue"
            textColor="orange"
        />
    ))
    .add('with title, subtitle, bgImage', () => (
        <FullHeader
            title="Título"
            csubtitle="Teste de react component"
            bgImage="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
        />
    ))
    .add('with title, subtitle, bgVideo', () => (
        <FullHeader
            title="Título"
            csubtitle="Teste de react component"
            bgVideo="http://callmenick.com/_development/video/full-screen-background-video/media/demo.mp4"
        />
    ))

