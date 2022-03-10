import * as React from 'react';
import './importAllIcons';
import './icon.scss'


interface IconType {
    icon: string
}

const Icon: React.FC<IconType> =({icon})=>{

    return<svg className='sweetui-icon'>
            <use xlinkHref={ `#${icon}` }></use>
        </svg>

}
export default Icon;
