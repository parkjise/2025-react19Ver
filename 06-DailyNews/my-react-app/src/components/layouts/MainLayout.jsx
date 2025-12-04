import { Container } from "react-bootstrap";

const MainLayout = ({ children }) => {
  return <Container className="mt-5 mb-5">{children}</Container>;
};

export default MainLayout;
