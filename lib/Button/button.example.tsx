import * as React from 'react';
import Button from './button';

interface propsType {

}

const ButtonExample: React.FC<propsType> = () => {
    return (
        <div>
            <Button type='text'>按钮</Button>
            <div>-------</div>
            <Button type='primary'>按钮</Button>

            <Button block={true}>100%</Button>
        </div>
    );
};
export default ButtonExample;
