import React, {useCallback, useState} from 'react'
import OperatorButtons from "../../../../components/OperatorButtons";
import Table from '../../../../components/AgGrid'

//columns
const columns = [
   {
      headerName: '',//选择列头部显示的文字，可以为空
      checkboxSelection: true,//设置为ture显示为复选框
      headerCheckboxSelection: true, //表头是否也显示复选框，全选反选用
      'pinned': 'left', //固定再左边
      width: 100 //列的宽度
   },
   {
      headerName: '流水号',
      field: 'a',
   },
   {
      headerName: '收付组织',
      field: 'b'
   },
   {
      headerName: '单据编号',
      field: 'c'
   },
   {
      headerName: '银行简称',
      field: 'd',
      colId: 'd'
   },
   {
      headerName: '提交人',
      field: 'e'
   },
   {
      headerName: '提交日期',
      field: 'f'
   },
   {
      headerName: '支出金额',
      field: 'g'
   },
   {
      headerName: '对方单位',
      field: 'h'
   },
   {
      headerName: '流水日期',
      field: 'i'
   },
   {
      headerName: '摘要',
      field: 'j'
   },
   {
      headerName: '待核销金额',
      field: 'k'
   },
]

export default () => {
   const [agInstance, setAgInstance] = useState(null)
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(false)
   const getAgInstance = useCallback(instance => {
      setAgInstance(instance)
   }, [])
   // 设置数据
   const setTableData = data => {
      setLoading(true)
      const t = setTimeout(() => {
         setLoading(false)
         setData(data)
         clearTimeout(t)
      }, 2000)
   }
   return (
       <>
         <OperatorButtons/>
            <Table
                name="FukuanhexiaoTab1"
                columns={columns}
                rowData={data}
                setTableData={setTableData}
                getAgInstance={getAgInstance}
                loading={loading}
            >
            </Table>
       </>
   )
}
