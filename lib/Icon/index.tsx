import * as React from 'react';
import './importAllIcons';
import './icon.scss'
import classNames from 'classnames';


interface IconType extends React.SVGAttributes<SVGSVGElement>{
    icon: string
}

const Icon: React.FC<IconType> =
    ({className,icon, ...restProps})=>{
    return<svg
        className={classNames('sweetui-icon', className)}
        {...restProps}
    >
            <use xlinkHref={ `#${icon}` }></use>
        </svg>
}
export default Icon;
