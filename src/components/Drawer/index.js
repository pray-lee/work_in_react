import React, {useState} from 'react'
import {Drawer, Button} from 'antd'

export default props => {
    const {visible, title, onClose, hasFooter} = props
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
                    Cancel
                </Button>
                <Button onClick={onClose} type="primary">
                    Submit
                </Button>
            </div>) : null}
        >
            {props.children}
        </Drawer>
    )
}