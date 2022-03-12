import React, {Fragment} from 'react';
import './Dialog.scss';
import Icon from '../Icon';
import {scopedClassMaker} from '../utils';


interface PropsType {
    visible: boolean
}

const scopedClass = scopedClassMaker('sweetui-dialog')
const sc = scopedClass;

const Dialog: React.FC<PropsType> =
    ({visible, children}) => {
        return visible ?
            <Fragment>
                <div className={sc('mask')}></div>
                <div className={sc()}>
                    <div className={sc('close')}>
                        <Icon icon='close'/>
                    </div>
                    <header className={sc('header')}>标题</header>
                    <main className={sc('main')}>
                        {children}
                    </main>
                    <footer className={sc('footer')}>
                        footer
                    </footer>
                </div>
            </Fragment> :
            null;
    };

export default Dialog;
