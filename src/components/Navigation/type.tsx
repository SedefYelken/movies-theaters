import { Container, Nav, Navbar } from "react-bootstrap";
import "../style.css";
import "../../../src/App.css";
import { IUserInfo, userInfoValue } from "../../store/slices/userSlice";
import { useSelector } from "react-redux";

const Navigation = () => {
  const userInfoStoreValue: IUserInfo = useSelector(userInfoValue);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto ul-style">
          <p className="li-style">{userInfoStoreValue?.userInfo?.name}</p>
          <Nav.Link className="li-style" href="/movies">
            Movies
          </Nav.Link>
          <Nav.Link className="li-style" href="/theaters">
            Theaters
          </Nav.Link>
          <Nav.Link className="li-style" href="/edit-information">
            Edit Your Information
          </Nav.Link>
          <Nav.Link className="li-style sign-out" href="/">
            Sign out
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navigation;
