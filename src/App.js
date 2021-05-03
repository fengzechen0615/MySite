import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Route exact path='/'>
                    <Home></Home>
                </Route>
                <Route exact path='/portfolio'>
                    <Portfolio></Portfolio>
                </Route>
                <Route exact path='/contact'>
                    <Contact></Contact>
                </Route>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
