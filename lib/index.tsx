import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Routes,Route, Link} from 'react-router-dom';
import LayoutExample from './Layout/layout.example';
import IconExample from './Icon/icon.example';
import DialogExample from './Dialog/Dialog.example';
import Layout, {Content, Footer, Sider} from './Layout/layout';
import logo from './assets/SweetUILogo.png'


ReactDOM.render(
    <Router>
        <Layout>
            <Sider>
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
            </Sider>
            <Layout>
                <header>
                    <div className="logo">
                        <img src={logo} alt='pic' />
                    </div>
                </header>
                <Content>
                    <main>
                        <Routes>
                            <Route path="/icon" element={<IconExample/>}/>
                            <Route path="/dialog" element={<DialogExample/>}/>
                            <Route path="/layout" element={<LayoutExample/>}/>
                        </Routes>
                    </main>
                </Content>
                <Footer>
                    footer
                </Footer>
            </Layout>
        </Layout>
    </Router>
    ,
    document.getElementById('root')
)

