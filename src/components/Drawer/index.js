import React from 'react'
import {Drawer, Button} from 'antd'

export default props => {
    const {visible, title, onClose, hasFooter} = props
    const onClick = () => {
        console.log(props.children)
    }
    return (
        <Drawer
            title={title}
            width={"70vw"}
            onClose={onClose}
            visible={visible}
            bodyStyle={{paddingBottom: 80}}
            footer={hasFooter ? (<div
                style={{
                    textAlign: 'right',
                }}
            >
                <Button
                    onClick={onClose}
                    style={{marginRight: 8}}
                >
                    取消
                </Button>
                <Button onClick={onClick} type="primary">
                    提交
                </Button>
            </div>) : null}
        >
            {props.children}
        </Drawer>
    )
}