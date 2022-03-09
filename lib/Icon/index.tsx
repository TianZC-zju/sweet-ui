import * as React from 'react';
import '../assets/icons/wechat.svg';
import '../assets/icons/alipay.svg';


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
