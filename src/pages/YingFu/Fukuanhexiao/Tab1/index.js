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
   {
      headerName: '已付款金额',
      field: 'l'
   },
   {
      headerName: '未核销金额',
      field: 'm'
   },
   {
      headerName: '提交人',
      field: 'n'
   },
   {
      headerName: '是否有发票',
      field: 'o'
   },
   {
      headerName: '合同编号',
      field: 'p'
   },
]
// rowData
const rowData = []
for (var i = 0; i < 100; i++) {
   rowData.push({
      a: Math.random(),
      b: Math.random(),
      c: Math.random(),
      d: Math.random(),
      e: Math.random(),
      f: Math.random(),
      g: Math.random(),
      h: Math.random(),
      i: Math.random(),
      j: Math.random(),
      k: Math.random(),
      l: Math.random(),
      m: Math.random(),
      n: Math.random(),
      o: Math.random(),
      p: Math.random(),
   })
}
export default () => {
   const [agInstance, setAgInstance] = useState(null)
   const getAgInstance = useCallback(instance => {
      setAgInstance(instance)
   }, [])
   return (
       <>
         <OperatorButtons/>
         <div style={{height: '85vh'}}>
            <Table
                name="FukuanhexiaoTab1"
                columns={columns}
                rowData={rowData}
                getAgInstance={getAgInstance}
            >
            </Table>
         </div>
       </>
   )
}
