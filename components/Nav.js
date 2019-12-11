import { Link } from "../server/routes";
import { withRouter } from "next/router";
import styled from "styled-components";

const Img = styled.img`
    height: 100%;
    max-height: 100% !important;
`;

const Navbar = styled.nav`
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
`;

class Nav extends React.Component {
    state = {
        isNavbarOpen: false
    };

    handleToggleNavbar = () => {
        const { isNavbarOpen } = this.state;
        this.setState({ isNavbarOpen: !isNavbarOpen });
    };

    render() {
        const { email, facebook_url, twitter_url, instagram_url } = this.props;
        const { isNavbarOpen } = this.state;
        const { router } = this.props;
        return (
            <Navbar
                className="navbar is-dark"
                role="navigation"
                aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item">
                            <figure className="image is-32x32">
                                <Img
                                    className="is-rounded is-object-fit-cover"
                                    src="/public/uploads/profile.jpg"
                                />
                            </figure>
                        </a>
                    </Link>
                    <a
                        onClick={this.handleToggleNavbar}
                        role="button"
                        className={`navbar-burger burger ${
                            isNavbarOpen ? "is-active" : ""
                        }`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarItemsWrapper">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>

                <div
                    id="navbarItemsWrapper"
                    className={`navbar-menu ${
                        isNavbarOpen ? "is-active" : ""
                    }`}>
                    <div className="navbar-start" />
                    <div className="navbar-end">
                        <Link prefetch to="/">
                            <a
                                className={`is-family-primary navbar-item ${
                                    router.pathname === "/" ? "is-active" : ""
                                }`}>
                                Home
                            </a>
                        </Link>
                        <Link prefetch route="about">
                            <a
                                className={`is-family-primary navbar-item ${
                                    router.pathname === "/about"
                                        ? "is-active"
                                        : ""
                                }`}>
                                About
                            </a>
                        </Link>
                    </div>
                </div>
            </Navbar>
        );
    }
}

export default withRouter(Nav);
