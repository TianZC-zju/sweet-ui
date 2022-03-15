import * as React from 'react';
import Layout, {Content, Footer, Header} from './layout';

interface propsType {

}

const LayoutExample: React.FC<propsType> = () => {
    return (
        <Layout className='wm'>
            <Header/>
            <Content/>
            <Footer/>
        </Layout>
    );
};
export default LayoutExample;
