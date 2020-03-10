import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Card, Badge, Button, List} from 'antd'

const Notification = () => {
    const notifications = useSelector(state => state.notifications)
    return (
        <Card title="通知中心" extra={<Badge><Button disabled={notifications.every(item => !!item.hasRead)}>全部标记为已读</Button></Badge>} bordered={false}>
            <List
                itemLayout="horizontal"
                dataSource={notifications}
                renderItem={item => (
                    <List.Item actions={[<Button disabled={item.hasRead}>标记为已读</Button>]}>
                        <List.Item.Meta
                            title={<a href="!#">{<Badge dot={!item.hasRead}>{item.title}</Badge>}</a>}
                            description={item.desc}
                        />
                    </List.Item>
                )}
            />
        </Card>
    )
}
export default Notification
