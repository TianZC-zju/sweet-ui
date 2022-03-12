import React, {useState} from 'react';
import Dialog from './Dialog';

const DialogExample = () => {

    const [dialogVisible, setDialogVisible] = useState<boolean>(false);

    return (
        <div>
            <button onClick={()=>setDialogVisible(!dialogVisible)}>按钮</button>
            <Dialog
                visible={dialogVisible}
                buttons={[
                    <button onClick={()=>setDialogVisible(false)}>ok</button>,
                    <button  onClick={()=>setDialogVisible(false)}>cancle</button>
                ]}

            >
                <div>hi</div>
            </Dialog>
        </div>
    );
};

export default DialogExample;
