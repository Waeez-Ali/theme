import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import Layout from "./components/Layout";

function App() {
  return (
    <>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
    </>
  );
}

export default App;