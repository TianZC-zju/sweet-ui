import * as React from 'react';
import {HTMLAttributes} from 'react';
import {scopedClassMaker} from '../../../utils';
import './footer.scss'
import classNames from 'classnames';


interface propsType extends HTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker('sweetui-layout');
const Footer: React.FC<propsType> =
    ({
         children,
         className,
         ...restProps
     }) => {
        return (
            <div
                className={classNames(className, sc('footer'))}
                {...restProps}
            >Footer</div>
        );
    };
export default Footer;
