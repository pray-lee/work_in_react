import React from 'react'
import OperatorButtons from "../OperatorButtons";
import Table from '../AgGrid'
import {useSelector} from "react-redux";
import {Spin} from 'antd'

const CommonLayout = props => {
    const {isLoading} = useSelector(state => state.tableData)
    const {tableAttr, operatorButtonAttr, showOperatorButtons} = props
    const {
        name,
        columns,
        rowData,
        getAgInstance,
    } = tableAttr
    const {
        events
    } = operatorButtonAttr
    console.log(isLoading, 'table loading ............................')
    return (
            <Spin spinning={isLoading}>
                {
                    showOperatorButtons ?
                        <OperatorButtons events={events}/>
                        :
                        null
                }
                <div style={{height: '65vh'}}>
                    <Table
                        name={name}
                        columns={columns}
                        getAgInstance={getAgInstance}
                    >
                    </Table>
                </div>
            </Spin>
    )
}

CommonLayout.defaultProps = {
    showOperatorButtons: true,
    operatorButtonAttr: {
        events: null
    }
}

export default CommonLayout
