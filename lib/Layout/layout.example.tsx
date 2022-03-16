import * as React from 'react';
import Layout, {Content, Footer, Header, Sider} from './layout';

interface propsType {

}

const LayoutExample: React.FC<propsType> = () => {
    return (
        <div>
            <h1>------第一个例子------</h1>
            <Layout style={{height: '500px'}}>
                <Header style={{height: '50px'}}/>
                <Content/>
                <Footer style={{height: '50px'}}/>
            </Layout>

            <h1>------第二个例子------</h1>
            <Layout style={{height: '500px'}}>
                <Header style={{height: '50px'}}/>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer style={{height: '50px'}}/>
            </Layout>

            <h1>------第三个例子------</h1>
            <Layout style={{height: '500px'}}>
                <Header style={{height: '50px'}}/>
                <Layout>
                    <Content>Content</Content>
                    <Sider>Sider</Sider>
                </Layout>
                <Footer style={{height: '50px'}}/>
            </Layout>
        </div>
    );
};
export default LayoutExample;
