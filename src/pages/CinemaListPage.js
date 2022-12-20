import DisplayMovie from "../features/DisplayMovie";
import DisplyaCinemas from "../features/DisplayCinemas";
import { Divider } from "antd";
import { Layout } from "antd";

const { Footer, Content } = Layout;

export default function CinemaListPage() {
  return (
    <div>
      <Layout style={{ padding: "0 50px" }}>
        <Content className="site-layout" style={{ padding: "0 50px" }}>
          <DisplayMovie />
          <Divider></Divider>
          <DisplyaCinemas />
          <Footer style={{ textAlign: "center" }}>
            Team M Gogogo@2022 No time to die
          </Footer>
        </Content>
      </Layout>
    </div>
  );
}
