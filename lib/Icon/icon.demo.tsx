import * as React from 'react';
import IconExample from './icon.example';
import Demo from '../Components/Demo/demo';

interface propsType {

}
const x = require('!!raw-loader!./icon.example')

const IconDemo: React.FC<propsType> = () => {
    return (
        <Demo code={x.default}>
            <IconExample/>
        </Demo>
    );
};
export default IconDemo;
