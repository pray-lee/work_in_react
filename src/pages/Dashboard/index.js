import React, {useEffect} from "react";
import axiosTest from '../../request/test'
export default () => {
    useEffect(() => {
        
        setTimeout(() => {
            axiosTest()
        }, 2000)
    }, [])
    return (
        <h1>dashboard</h1>
    )
}
