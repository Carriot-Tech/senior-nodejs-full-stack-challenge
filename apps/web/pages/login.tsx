import { Button, Card, Form, Input } from "antd";
import router from "next/router";
import { useState } from "react";
import BaseLayout from "../components/BaseLayout";
import { withNoAuth } from "../components/withNoAuth";
import useUserClientSide from "../hooks/useUserClientSide";

export function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { login } = useUserClientSide();

  const handleFormFinish = (values: any) => {
    setLoading(true);
    login(values).then(() => {
      router.push("/");
    });
  };

  return (
    <Card>
      <Form layout="vertical" onFinish={handleFormFinish}>
        <Form.Item label="Email" name="email">
          <Input size="large" placeholder="example@example.com" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password size="large" placeholder="Password here" />
        </Form.Item>
        <Button
          block
          type="primary"
          shape="round"
          size={"large"}
          htmlType="submit"
          loading={loading}
          style={{ width: "100%" }}
        >
          {"Login"}
        </Button>
      </Form>
    </Card>
  );
}

const exp = withNoAuth(LoginPage) as any;
exp.layout = ({ children }: any) => <BaseLayout>{children}</BaseLayout>;

export default exp;
