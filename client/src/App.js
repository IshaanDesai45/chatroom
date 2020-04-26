import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';

import Join from './component/Join/Join';
import Chat from './component/Chat/Chat';

const App = ()=>(
    <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat"  component={Chat} />
    </Router>
)

export default App