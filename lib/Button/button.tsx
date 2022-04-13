import React, {HTMLAttributes} from 'react';
import {scopedClassMaker} from '../utils';
import classNames from 'classnames';
import './button.scss'


export const tuple = <T extends string[]>(...args: T) => args;

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');

export type ButtonType = typeof ButtonTypes[number];
interface propsType extends HTMLAttributes<HTMLElement>{
    type?: ButtonType,

    /** @default default */
    block?: boolean,
}

const scopedClass = scopedClassMaker('sweetui-btn');
const sc = scopedClass;


const  Button:React.FC<propsType> =({children, type, className,block=false}) => {

    const classname = classNames(sc(),{
        [sc(type)]: type,
        [sc('block')]: block,
    }, className)

    return (
        <button className={classname}>{children}</button>
    )
}

export default Button
