import React, {Fragment, MouseEventHandler, ReactElement} from 'react';
import './Dialog.scss';
import Icon from '../Icon';
import {scopedClassMaker} from '../utils';


interface PropsType {
    visible: boolean;
    onClose: MouseEventHandler;
    buttons?: Array<ReactElement>;
    closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker('sweetui-dialog')
const sc = scopedClass;

const Dialog: React.FC<PropsType> =
    ({
         visible,
         children,
         buttons,
        onClose,
        closeOnClickMask,
    }) => {
        const closeOnMask: MouseEventHandler = (e)=>{
            if(closeOnClickMask){
                onClose(e)
            }
        }

        return visible ?
            <Fragment>
                <div className={sc('mask')} onClick={closeOnMask}> </div>
                <div className={sc()}>
                    <div className={sc('close')} onClick={onClose}>
                        <Icon icon='close' />
                    </div>
                    <header className={sc('header')}>标题</header>
                    <main className={sc('main')}>
                        {children}
                    </main>
                    <footer className={sc('footer')}>
                        {buttons && buttons.map((button, index) =>
                            React.cloneElement(button, {key: index})
                        )}
                    </footer>
                </div>
            </Fragment> :
            null;
    };

export default Dialog;
