import * as React from 'react';
import {HTMLAttributes} from 'react';
import {scopedClassMaker} from '../../../utils';
import './header.scss'
import classNames from 'classnames';


interface propsType extends HTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker('sweetui-layout');
const Header: React.FC<propsType> =
    ({
         children,
         className,
         ...restProps
     }) => {
        return (
            <div
                className={classNames(className, sc('header'))}
                {...restProps}
            >Header</div>
        );
    };
export default Header;
