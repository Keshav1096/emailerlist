import "./App.css";
import Home from "./views/Home";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div>
      {/*<Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        ></Header>
        <Content
          style={{
            margin: "0 16px",
            paddingLeft: "200px",
            paddingTop: "84px",
            paddingRight: "200px",
          }}
        >
          <Home />
        </Content>
        <Footer></Footer>
        </Layout>*/}
      <Home />
    </div>
  );
}

export default App;
