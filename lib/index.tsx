import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon';


const fn =(e: React.MouseEvent<SVGSVGElement>)=>{
    console.log('haha',e.currentTarget);
}

ReactDOM.render(
    <div>
        <Icon icon='wechat'
              onClick={fn}
              onMouseMove={()=>{console.log('move');}}
        />
        <Icon icon='alipay'/>
    </div>
    ,
    document.getElementById('root')
)

