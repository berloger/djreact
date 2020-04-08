import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
                {/* <div className="logo" /> */}
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Гостевая книга</Menu.Item>
                    {/* <Menu.Item key="2">nav 2</Menu.Item> */}
                    {/* <Menu.Item key="3">nav 3</Menu.Item> */}
                </Menu>
            </Header>
            <Content style={{ padding: '10px 50px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>Guestbook</Breadcrumb.Item>
                </Breadcrumb> */}
                <div 
                    // className="site-layout-content"
                    style={{ background: '#fff', padding: 24, minHeight: 280 }}
                >
                    {props.children}
                </div>
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>2020 Created by Igor Bulygo</Footer> */}
        </Layout>
    );
}

export default CustomLayout;
