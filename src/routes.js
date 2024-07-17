import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Sexo from './pages/Sexo'
import Nome from './pages/Nome'
import Nascimento from './pages/Nascimento'
import Doencas from './pages/Doencas'
import Home from './pages/Home'
import Calendar from './pages/Calendar'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={SignIn} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/nome" component={Nome} />
            <Route path="/birth-info" component={Nascimento} />
            <Route path="/doencas" component={Doencas} />
            <Route path="/sexo" component={Sexo} />
            <Route path="/" component={Home} />
            <Route path="*" component={() => <h1>Page not found</h1>} />{' '}
        </Switch>
    </BrowserRouter>
)

export default Routes
