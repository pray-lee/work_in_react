import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {adminRouter} from './routes'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/*导航部分*/}
                这里是导航部分
                {/*右边视图部分*/}
                <Switch>
                    {
                        adminRouter.map(item => {
                            return <Route
                                exact
                                key={item.pathname}
                                path={item.pathname}
                                component={item.component}
                            />
                        })
                    }
                    <Redirect to={adminRouter[0].pathname} from="/admin" exact/>
                    <Redirect to="/admin/404" />
                </Switch>
            </div>
        );
    }

}

export default App;
