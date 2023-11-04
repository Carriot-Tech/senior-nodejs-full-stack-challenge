import { Button, Card, Space } from "antd";
import { withAuth } from "../components/withAuth";

function HomePage() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Button type="primary">New</Button>
      <Card>add here ...</Card>
    </Space>
  );
}

export default withAuth(HomePage);
