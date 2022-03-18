import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Routes,Route, Link} from 'react-router-dom';
import LayoutExample from './Layout/layout.example';
import IconExample from './Icon/icon.example';
import DialogExample from './Dialog/Dialog.example';
import Layout, {Content, Footer, Header, Sider} from './Layout/layout';
import logoCandy from './assets/logo/logoCandy.png'
import logoText from './assets/logo/logoText.png'
import './index.scss'


ReactDOM.render(
    <Router>
        <Layout className="site-page">
            <Header className="site-header">
                <div className="logo">
                    <img src={logoCandy} width="48"  alt='pic' />
                    <img src={logoText} width="140"  alt='pic' />
                </div>
            </Header>
            <Layout>
                <Sider className="site-aside">
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
                <Content className="site-main">
                    <Routes>
                        <Route path="/icon" element={<IconExample/>}/>
                        <Route path="/dialog" element={<DialogExample/>}/>
                        <Route path="/layout" element={<LayoutExample/>}/>
                    </Routes>
                </Content>
            </Layout>
            <Footer className="site-footer">
                &copy; ttc
            </Footer>
        </Layout>
    </Router>
    ,
    document.getElementById('root')
)

