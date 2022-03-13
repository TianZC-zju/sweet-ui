import ReactDOM from 'react-dom';
import React, {Fragment, MouseEventHandler, ReactElement, ReactNode} from 'react';
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



        const dialogDom =  visible ?
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

            return(
                ReactDOM.createPortal(dialogDom,document.body)
            )
    };

export const alert = (content: ReactNode)  => {
    const close = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };
    const component =
        <Dialog
            visible={true}
            onClose={() => {
                close();
            }}>
            {content}
        </Dialog>;
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);
    return close;
};

export const confirm = (content: ReactNode, buttons: Array<ReactElement>)  => {
    const close = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };
    const component =
        <Dialog
            visible={true}
            onClose={() => {
                close();
            }}
            buttons={buttons}
        >
            {content}
        </Dialog>;
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);
    return close;
};





export default Dialog;
