import * as React from 'react';
import {HTMLAttributes} from 'react';
import {scopedClassMaker} from '../../../utils';
import './sider.scss'
import classNames from 'classnames';

interface propsType extends HTMLAttributes<HTMLElement>{

}

const sc = scopedClassMaker('sweetui-layout');

const Sider: React.FC<propsType> =
    ({
         children,
         className,
         ...restProps
     }) => {
    return (
        <div
            className={classNames(className, sc('sider'))}
            {...restProps}
        >Sider</div>
    );
};
export default Sider;
