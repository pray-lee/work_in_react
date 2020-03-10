import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setAsRead, setAllAsRead} from "../../actions/notification";
import {Card, Badge, Button, List, Spin} from 'antd'

const Notification = () => {
    const notifications = useSelector(state => state.notifications.list)
    const isLoading = useSelector(state => state.notifications.isLoading)
    const dispatch = useDispatch()
    return (
        <Spin spinning={isLoading}>
            <Card title="通知中心"
                  extra={
                      <Badge>
                          <Button
                              disabled={notifications.every(item => !!item.hasRead)}
                              onClick={() => dispatch(setAllAsRead())}
                          >全部标记为已读</Button></Badge>}
                  bordered={false}>
                <List
                    itemLayout="horizontal"
                    dataSource={notifications}
                    renderItem={item => (
                        <List.Item extra={item.hasRead
                            ?
                            null
                            :
                            <Button
                                disabled={item.hasRead}
                                onClick={() => dispatch(setAsRead(item.id))}
                            >
                                标记为已读
                            </Button>}>
                            <List.Item.Meta
                                title={<a href="!#">{<Badge dot={!item.hasRead}>{item.title}</Badge>}</a>}
                                description={item.desc}
                            />
                        </List.Item>
                    )}
                />
            </Card>
        </Spin>
    )
}
export default Notification
