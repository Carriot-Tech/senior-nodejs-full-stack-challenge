import { BellOutlined, DashboardOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import getConfig from "next/config";
import { useRouter } from "next/router";
import { URL_DASHBOARD, URL_LOGOUT } from "../routes";
import { Layout } from "./Layout";
import { Logo } from "./Logo";

export default function DashboardLayout({ children }: any) {
  const router = useRouter();

  const AUTHENTICATED_MENUS = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      url: URL_DASHBOARD,
      onClick: () => {
        router.push(URL_DASHBOARD);
      },
    },
  ];

  const headerMenuItems = [
    {
      key: "notifications",
      label: (
        <Badge count={1}>
          <BellOutlined />
        </Badge>
      ),
    },
    {
      key: "profile",
      label: <Avatar />,
      children: [
        {
          label: "Logout",
          key: "profile:logout",
          onClick: () => {
            router.push(URL_LOGOUT);
          },
        },
      ],
    },
  ];

  const selectedMenu = AUTHENTICATED_MENUS.find(
    (menu: any) => menu.url === router?.pathname
  );

  const {
    publicRuntimeConfig: { VERSION },
  } = getConfig();

  return (
    <Layout
      menus={AUTHENTICATED_MENUS}
      className={"layout"}
      logo={<Logo />}
      selectedMenu={selectedMenu}
      headerMenuItems={headerMenuItems}
      version={VERSION}
    >
      {children}
    </Layout>
  );
}
