import React, {useCallback, useState} from 'react'
import {Tabs} from 'antd'
import Tab1 from './Fanhexiao-1'
// import Tab2 from './Fanhexiao-2'
const {TabPane} = Tabs
function callback(key) {
    console.log(key);
}
export default React.memo(props => {
    const {tab} = props
    return (
        <>
        {tab == 0 ?
            <Tab1/>
            :
            <div>ahahah</div>
        }
        </>
    )
})


