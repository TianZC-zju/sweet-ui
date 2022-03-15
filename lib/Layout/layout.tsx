import * as React from 'react';
import {HTMLAttributes } from 'react';
import classNames from 'classnames';
import Header from './components/Header/header';
import Content from './components/Content/content';
import Footer from './components/Footer/footer';
import {scopedClassMaker} from '../utils';
import './layout.scss'

interface propsType extends HTMLAttributes<HTMLElement>{

}
const sc = scopedClassMaker('sweetui-layout')

const Layout: React.FC<propsType> =
    ({children,
         className,
         ...restProps}) => {
    return (
        <div
            className={classNames(className,sc())}
            {...restProps}
        >
            Layout
            {children}
        </div>
    );
};

export {Header, Content, Footer}

export default Layout;
