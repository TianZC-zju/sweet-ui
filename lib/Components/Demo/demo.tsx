import * as React from 'react';

interface propsType {
    code: string;
}

const Demo: React.FC<propsType> = (props) => {
    return (
        <div>
            {props.children}
            <pre>
                {props.code}
            </pre>
        </div>
    );
};
export default Demo;
