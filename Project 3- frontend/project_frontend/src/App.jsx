import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./Navigation";
import {AuthProviderWrapper} from './context/auth.context'

function App() {
  return (
    <Layout>
     <AuthProviderWrapper>
      <BrowserRouter>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>
          <Navigation />
        </Layout.Content>
        <Layout.Footer>
          <div>&copy; {new Date().getFullYear()}</div>
        </Layout.Footer>
      </BrowserRouter>
      </AuthProviderWrapper>
    </Layout>
  );
}
export default App;


