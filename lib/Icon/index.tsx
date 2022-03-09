import * as React from 'react';

interface IconType {
    icon: string
}

const Icon: React.FC<IconType> =({icon})=>{

    return<div>{icon}</div>
}
export default Icon;
