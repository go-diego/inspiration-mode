import { Link } from "../server/routes";
import styled from "styled-components";

const Container = styled.div`
    padding-bottom: 2.5rem;
`;

const Button = styled.a`
    margin-right: 0.5rem;
`;

export default function SocialContacs({ facebook_url, email, instagram_url }) {
    return (
        <Container>
            <p className="heading is-family-primary has-text-link has-text-weight-bold">
                Say Hello!
            </p>
            <div className="is-flex">
                <Button
                    rel="noopener"
                    target="_blank"
                    href={`${facebook_url}`}
                    className="button is-dark animated bounceIn">
                    <i className="fab fa-facebook-f" />
                </Button>
                <Button
                    rel="noopener"
                    target="_blank"
                    href={`${instagram_url}`}
                    className="button is-dark animated bounceIn delay-1s">
                    <i className="fab fa-instagram" />
                </Button>
                <Button
                    href={`mailto:${email}`}
                    className="button is-dark animated bounceIn delay-1-half-s">
                    <i className="fas fa-envelope" />
                </Button>
            </div>
        </Container>
    );
}
