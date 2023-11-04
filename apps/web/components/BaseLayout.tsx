import { Layout } from "./Layout";

export default function BaseLayout({ children }: any) {
  return (
    <Layout
      className={"layout"}
      sidebar={false}
      header={false}
      contentCenter={true}
    >
      {children}
    </Layout>
  );
}
