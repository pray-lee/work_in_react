import React from 'react'
import Table from '../AgGrid'
import { Pagination } from 'antd'

export default props => {
    const { currentPage, setCurrentPageFn, total } = props
    return (
        <>
            <Table {...props}/>
            <Pagination style={{paddingTop: 10}} current={currentPage} onChange={setCurrentPageFn} total={total}></Pagination>
        </>
    )
}

