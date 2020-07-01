import { useContext } from "react";
// import Link from "next/link";
import Router from "next/router";
import { Button } from "antd";
import UserContext from "../../components/UserContext";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  PieChartOutlined,
  DesktopOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

const Employee = () => {
  const { user, signOut } = useContext(UserContext);
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Awesome Menu</Menu.Item>
          <Button ghost onClick={signOut} style={{ marginLeft: "80%" }}>
            Sign Out
          </Button>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{ height: "100%" }}
            >
              <Menu.Item key="1" icon={<UserOutlined />}>
                Dashboard
              </Menu.Item>

              <Menu.Item
                key="2"
                icon={<DesktopOutlined />}
                onClick={() => Router.push("/employee/product")}
              >
                Product
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <p>
              Hello, <strong>{user}</strong>
            </p>
            <p>Welcome to our app</p>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Employee;
