import Layout from "../components/common/layout/Layout";
import Logo from "../components/common/Logo";
import Cv from "../components/Cv/Cv";

export default function CvPage() {
  return (
    <Layout>
      <Cv />

      <div className="no-print">
        <Logo></Logo>
      </div>
    </Layout>
  );
}
