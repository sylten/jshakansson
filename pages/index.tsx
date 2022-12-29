import Layout from "../components/common/layout/Layout";
import Landing from "../components/Landing/Landing";

export default function LandingPage() {
  return (
    <Layout isLanding={true}>
      <Landing />
    </Layout>
  );
}
