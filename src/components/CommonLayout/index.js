import React from 'react'
import OperatorButtons from "../OperatorButtons";
import Table from '../AgGrid'
import {useSelector} from "react-redux";
import {Spin} from 'antd'

const CommonLayout = React.memo(props => {
    const {isLoading} = useSelector(state => state.tableData)
    const {tableAttr, operatorButtonAttr, showOperatorButtons} = props
    return (
        <Spin spinning={isLoading}>
            {
                showOperatorButtons ?
                    <OperatorButtons {...operatorButtonAttr}/>
                    :
                    null
            }
            <div style={{height: '65vh'}}>
                <Table
                    {...tableAttr}
                >
                </Table>
            </div>
        </Spin>
    )
})

CommonLayout.defaultProps = {
    showOperatorButtons: true,
    operatorButtonAttr: {
        events: null
    }
}

export default CommonLayout
