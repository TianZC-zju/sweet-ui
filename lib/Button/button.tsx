import React from 'react';
import {scopedClassMaker} from '../utils';
import classNames from 'classnames';
import './button.scss'

type typeType = 'text' | 'primary' | undefined;

interface propsType {
    type?: typeType,
}

const scopedClass = scopedClassMaker('sweetui-btn');
const sc = scopedClass;


const  Button:React.FC<propsType> =({children, type}) => {
    const getTypeClass = (type: typeType)=>{
        if(typeof type === 'undefined'){
            return sc()
        }
        return classNames(sc(), sc(type))
    }
    return (
        <button className={getTypeClass(type)}>{children}</button>
    )
}

export default Button
