import * as React from 'react';
import './importAllIcons';


interface IconType {
    icon: string
}

const Icon: React.FC<IconType> =({icon})=>{

    return<span>
        <svg>
            <use xlinkHref={ `#${icon}` }></use>
        </svg>
    </span>
}
export default Icon;
