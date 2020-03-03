import React from 'react';

// 按需加载组件和组件的样式，不用单独再引入了
import {
    Button
} from 'antd'

//test HOC
const wrapperComponent = WrappedComponent => {
    return function() {
        return (
            <>
                <h1>高阶组件</h1>
                <WrappedComponent></WrappedComponent>
            </>
        )
    }
}

@wrapperComponent
class App extends React.Component{
    render() {
        return (
            <div className="App">
                App
                <Button type="primary" size="small" style={{marginLeft: '10px'}}>财咖-demo</Button>
            </div>
        );
    }

}

export default App;
