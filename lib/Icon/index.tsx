import * as React from 'react';
import './importAllIcons';
import './icon.scss'


interface IconType extends React.SVGAttributes<SVGSVGElement>{
    icon: string
}

const Icon: React.FC<IconType> =(props)=>{

    return<svg
        className='sweetui-icon'
        {...props}
    >
            <use xlinkHref={ `#${props.icon}` }></use>
        </svg>

}
export default Icon;
