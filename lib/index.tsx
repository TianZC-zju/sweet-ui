import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Routes,Route, NavLink} from 'react-router-dom';
import LayoutExample from './Layout/layout.example';
import DialogExample from './Dialog/Dialog.example';
import Layout, {Content, Footer, Header, Sider} from './Layout/layout';
import logoCandy from './assets/logo/logoCandy.png'
import logoText from './assets/logo/logoText.png'
import './index.scss'
import IconDemo from './Icon/icon.demo';
import ButtonExample from './Button/button.example';


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
                            <NavLink to="/icon">Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dialog">对话框</NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">布局</NavLink>
                        </li>
                        <li>
                            <NavLink to="/button">按钮</NavLink>
                        </li>
                    </ul>
                </Sider>
                <Content className="site-main">
                    <Routes>
                        <Route path="/icon" element={<IconDemo/>}/>
                        <Route path="/dialog" element={<DialogExample/>}/>
                        <Route path="/layout" element={<LayoutExample/>}/>
                        <Route path="/button" element={<ButtonExample/>}/>
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

