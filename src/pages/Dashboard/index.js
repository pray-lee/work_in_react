import React, {useEffect} from "react";
import OperatorButtons from "../../components/OperatorButtons";
import Table from '../../components/Table'
import axiosTest from '../../request/test'

export default props => {
    useEffect(() => {
        setTimeout(() => {
            axiosTest()
        }, 2000)
    }, [])
    console.log(props, 'Dashboard')
    return (
        <>
           <OperatorButtons/>
           <Table />
        </>
    )
}
