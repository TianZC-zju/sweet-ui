import * as React from 'react';
import {HTMLAttributes, ReactElement } from 'react';
import classNames from 'classnames';
import Header from './components/Header/header';
import Content from './components/Content/content';
import Footer from './components/Footer/footer';
import {scopedClassMaker} from '../utils';
import './layout.scss';
import Sider from './components/Sider/sider';

interface propsType extends HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const sc = scopedClassMaker('sweetui-layout');

const Layout: React.FC<propsType> =
    ({
         children,
         className,
         ...restProps
     }) => {
        const childrenAsArray = (children as Array<ReactElement>)
        const hasSider = childrenAsArray.length &&
            childrenAsArray.reduce(
                (previousValue, currentNode) =>
                    previousValue|| currentNode.type === Sider
                , false )

        return (
            <div
                className={classNames(className, sc(), hasSider && sc('has-sider'))}
                {...restProps}
            >
                {children}
            </div>
        );
    };

export {Header, Content, Footer, Sider};

export default Layout;
