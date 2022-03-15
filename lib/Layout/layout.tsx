import * as React from 'react';
import Header from './components/Header/header';
import Content from './components/Content/content';
import Footer from './components/Footer/footer';


interface propsType {

}

const Layout: React.FC<propsType> = ({children}) => {
    return (
        <div>
            Layout
            {children}
        </div>
    );
};

export {Header, Content, Footer}

export default Layout;
