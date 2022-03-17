import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Routes,Route, Link} from 'react-router-dom';
import LayoutExample from './Layout/layout.example';
import IconExample from './Icon/icon.example';
import DialogExample from './Dialog/Dialog.example';


ReactDOM.render(
    <Router>
        <div>
            <header>
                <div className="logo">
                    sweet-ui
                </div>

            </header>
            <div>
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to="/icon">Icon</Link>
                        </li>
                        <li>
                            <Link to="/dialog">对话框</Link>
                        </li>
                        <li>
                            <Link to="/layout">布局</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Routes>
                        <Route path="/icon" element={<IconExample/>}/>
                        <Route path="/dialog" element={<DialogExample/>}/>
                        <Route path="/layout" element={<LayoutExample/>}/>
                    </Routes>
                </main>
            </div>
        </div>
    </Router>
    ,
    document.getElementById('root')
)

