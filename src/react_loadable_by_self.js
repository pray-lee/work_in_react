import React, {Component} from "react";
// 实现一个简易的loadable

const Loadable = ({loader, loading: Loading}) => {
    return class extends Component {
        state = {
            LoadedComponent: null
        }

        componentDidMount() {
            loader()
                .then(res => {
                    this.setState({
                        LoadedComponent: res.default
                    })
                })
        }

        render() {
            const {
                LoadedComponent
            } = this.state
            return (
                LoadedComponent
                    ?
                    <LoadedComponent/>
                    :
                    <Loading/>
            )
        }
    }
}

export default Loadable
