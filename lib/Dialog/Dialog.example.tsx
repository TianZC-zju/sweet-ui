import React, {useState, Fragment} from 'react';
import Dialog, {alert, confirm} from './Dialog';

const DialogExample = () => {

    const [dialogVisible, setDialogVisible] = useState<boolean>(false);

    const closeDialog = () => setDialogVisible(false);
    return (
        <Fragment>
            <button onClick={() => alert('1')}>alert</button>
            <div>-------</div>
            <button onClick={() => {
                const closeConfirm = confirm(
                'content',
                [
                    <button onClick={()=>closeConfirm()}>ok</button>,
                    <button onClick={()=>closeConfirm()}>cancle</button>
                ],
            )}}>
                confirm
            </button>
            <div>-------</div>
            <button
                onClick={() => setDialogVisible(!dialogVisible)}
            >按钮
            </button>
            <Dialog
                visible={dialogVisible}
                buttons={[
                    <button onClick={closeDialog}>ok</button>,
                    <button onClick={closeDialog}>cancle</button>
                ]}
                onClose={closeDialog}
                closeOnClickMask={true}
            >
                <div>hi</div>
            </Dialog>

        </Fragment>
    );
};

export default DialogExample;
