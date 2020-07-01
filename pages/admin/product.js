import { useContext } from "react";
// import Link from "next/link";
import Router from "next/router";
import { Button } from "antd";
import UserContext from "../../components/UserContext";
import { Layout, Menu, Table, Tag, Space } from "antd";
import {
  UserOutlined,
  PieChartOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import data from "../../components/data.json";

const { Header, Content, Sider } = Layout;
const columns = [
  {
    title: "Kategori",
    dataIndex: "product",
    key: "category",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Nama Produk",
    dataIndex: "product_title",
    key: "product_title",
  },
  {
    title: "Merek",
    dataIndex: "brand",
    key: "brand",
  },
  {
    title: "Ketersediaan",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Button>Edit</Button>
        <Button type="primary">Delete</Button>
      </Space>
    ),
  },
];

const Product = () => {
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
              defaultSelectedKeys={["3"]}
              style={{ height: "100%" }}
            >
              <Menu.Item
                key="1"
                icon={<UserOutlined />}
                onClick={() => Router.push("/admin")}
              >
                Dashboard
              </Menu.Item>

              <Menu.Item
                key="2"
                icon={<PieChartOutlined />}
                onClick={() => Router.push("/admin/statistics")}
              >
                Statistics
              </Menu.Item>

              <Menu.Item
                key="3"
                icon={<DesktopOutlined />}
                onClick={() => Router.push("/admin/product")}
              >
                Product
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <p>Welcome {user} to product</p>
            <Table columns={columns} dataSource={data} />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Product;
