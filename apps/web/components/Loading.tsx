import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export function Loading() {
  return <Spin size="large" indicator={<LoadingOutlined spin />} />;
}
