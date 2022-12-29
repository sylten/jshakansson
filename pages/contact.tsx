import BackButton from "../components/common/BackButton";
import Layout from "../components/common/layout/Layout";
import Logo from "../components/common/Logo";
import Contact from "../components/Contact/Contact";


export default function ContactPage() {
  return (
    <Layout>
      <Contact />

      <div className="logoContainer">
        <Logo></Logo>
      </div>
    </Layout>
  );
}
