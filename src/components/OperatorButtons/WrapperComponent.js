import React from 'react'

export default WrappedComponent => {
    return class extends React.Component {
        render() {
            // 数据重组一下,再返回
            return (
                <WrappedComponent {...this.props}/>
            )
        }
    }
}