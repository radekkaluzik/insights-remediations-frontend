import { configure, mount, render, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import { enableFetchMocks } from 'jest-fetch-mock';

configure({ adapter: new Adapter() });

enableFetchMocks();

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.React = React;
global.insights = {};

window.HTMLElement.prototype.scrollTo = jest.fn();
