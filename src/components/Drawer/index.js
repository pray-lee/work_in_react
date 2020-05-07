import React from 'react'
import {Drawer, Button} from 'antd'

const DrawerComponent = props => {
    const {visible, title, onClose, hasFooter, width} = props
    return (
        <Drawer
            title={title}
            width={width}
            onClose={onClose}
            visible={visible}
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
                <Button onClick={props.onSubmit} type="primary">
                    提交
                </Button>
            </div>) : null}
        >
            {props.children}
        </Drawer>
    )
}

DrawerComponent.defaultProps = {
    width: "70vw"
}

export default DrawerComponent
