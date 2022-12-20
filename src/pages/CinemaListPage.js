import { useEffect } from "react";
import DisplayMovie from "../features/DisplayMovie";
import DisplyaCinemas from "../features/DisplayCinemas";
import { addCinemas } from "../features/movieSlice";
import { useDispatch } from "react-redux";
import { Divider } from "antd";
import { Layout } from "antd";
import { getCinemas } from "../api/movies";

const { Footer, Content } = Layout;

export default function CinemaListPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCinemas().then((response) => {
      console.log(response.data);
      dispatch(addCinemas(response.data));
    });
  });

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
