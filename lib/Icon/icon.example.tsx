import * as React from 'react';
import Icon from './index';

interface propsType {

}

const IconExample: React.FC<propsType> = () => {
    return (
        <div>
            <Icon icon="alipay"/>
            <Icon icon="wechat"/>
            <Icon icon="close"/>
        </div>
    );
};
export default IconExample;
