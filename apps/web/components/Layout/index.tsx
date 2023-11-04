import { Layout as AntLayout, ConfigProvider, Menu } from "antd";
import classNames from "classnames";
import styles from "./style.module.scss";

const { Header, Sider, Content } = AntLayout;

export function Layout({
  sidebar = true,
  header = true,
  contentCenter = false,
  menus,
  selectedMenu,
  className,
  children,
  logo,
  headerMenuItems = [],
  headerMenuSelectedKeys = [],
}: any) {
  const selectedKey = selectedMenu?.key + "";

  const contentCenterClass = {} as any;
  contentCenterClass[styles.contentCenter] = contentCenter;

  return (
    <ConfigProvider>
      <AntLayout className={className}>
        {sidebar && (
          <Sider collapsible>
            <div className={styles.logo}>{logo}</div>
            <Menu
              theme="dark"
              mode="inline"
              items={menus}
              className={styles.menu}
              selectedKeys={[selectedKey]}
            />
          </Sider>
        )}
        <AntLayout className={styles.siteLayout}>
          {header && (
            <Header className={styles.header}>
              <Menu
                mode="horizontal"
                selectable={false}
                selectedKeys={headerMenuSelectedKeys}
                items={headerMenuItems}
              />
            </Header>
          )}
          <Content
            className={classNames(
              styles.siteLayoutBackground,
              contentCenterClass
            )}
          >
            {children}
          </Content>
        </AntLayout>
      </AntLayout>
    </ConfigProvider>
  );
}
