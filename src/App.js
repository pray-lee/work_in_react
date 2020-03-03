import React from 'react';

// 按需加载组件和组件的样式，不用单独再引入了
import {
    Button
} from 'antd'

function App(){
    return (
        <div className="App">
            App
            <Button type="primary" size="small" style={{marginLeft: '10px'}}>财咖-demo</Button>
        </div>
    );
}

export default App;
