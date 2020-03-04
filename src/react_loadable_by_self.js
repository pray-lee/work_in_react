import React, {Component} from "react";
// 实现一个简易的loadable

const LoadableComponent = ({
                               loader,
                               loading: Loading
                           }) => {
    return class extends Component {
        state = {
            LoadedComponent: null
        }
        componentDidMount() {
            loader()
                .then(res => {
                    this.setState({
                        LoadableComponent: res.default
                    })
                })
        }

        render() {
            return (
                this.state.LoadedComponent
                    ?
                    <LoadableComponent/>
                    :
                    <Loading />
            )
        }
    }
}

export default LoadableComponent
