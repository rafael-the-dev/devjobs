import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loadable from '@loadable/component';
import Home from '../Home';

const App = () => {
    const DetailComponent = loadable(() => import('../Detail'));
    return (
        <Router>
            <Switch>
                <Route exact path="/jobs/:id" component={DetailComponent} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    );
};

export default App;