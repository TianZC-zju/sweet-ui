import React from 'react';


interface PropsType {
    visible: boolean
}

const Dialog: React.FC<PropsType> = ({visible}) => {
    return visible ?
        <div>'我是Dialog'</div> :
        null;
};

export default Dialog;
