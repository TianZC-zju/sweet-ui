import React, {useState} from 'react';
import Dialog from './Dialog';

const DialogExample = () => {

    const [dialogVisible, setDialogVisible] = useState<boolean>(false);

    const closeDialog = ()=>setDialogVisible(false)
    return (
        <div>
            <button onClick={()=>setDialogVisible(!dialogVisible)}>按钮</button>
            <Dialog
                visible={dialogVisible}
                buttons={[
                    <button onClick={closeDialog}>ok</button>,
                    <button  onClick={closeDialog}>cancle</button>
                ]}
                onClose={closeDialog}
                closeOnClickMask={true}
            >
                <div>hi</div>
            </Dialog>
        </div>
    );
};

export default DialogExample;
