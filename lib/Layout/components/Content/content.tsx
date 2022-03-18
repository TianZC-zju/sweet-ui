import * as React from 'react';
import {HTMLAttributes} from 'react';
import {scopedClassMaker} from '../../../utils';
import classNames from 'classnames';
import './content.scss'


interface propsType extends HTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker('sweetui-layout');
const Content: React.FC<propsType> =
    ({
         children,
         className,
         ...restProps
     }) => {
        return (
            <div
                className={classNames(className, sc('content'))}
                {...restProps}
            >{children}</div>
        );
    };
export default Content;
