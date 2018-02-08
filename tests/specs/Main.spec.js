import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('Component FullHeader', () => {
    context('title', () => {
        it('should have header tag when mount', function () {
            const wrapper = shallow(<FullHeader/>);
            expect(wrapper.find('header')).to.have.length(1);
        });

        it('should have h1 tag when mount', function () {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });

        it('should not have h1 tag when not have title', function () {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });

        it('should have h1 tag with the title passed', function () {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.have.equal('TDD');
        });
    });

    context('subtitle', () => {
        it('should have h2 tag when mount', function () {
            const wrapper = shallow(<FullHeader subtitle="JSTDD" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });

        it('should not have h2 tag when not have subtitle', function () {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h2')).to.have.length(0);
        });

        it('should have h2 tag with the title passed', function () {
            const wrapper = shallow(<FullHeader subtitle="JSTDD" />);
            expect(wrapper.find('h2').props().children).to.have.equal('JSTDD');
        });
    });

    context('bgColor', () => {
        it('should have background color as #CCC if none is passed', function () {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('background-color').equal('#CCC');
        });


    });
});
