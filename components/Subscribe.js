import { Link } from "../server/routes";
import styled from "styled-components";

const Container = styled.div`
    padding-bottom: 2.5rem;
`;

export default function Subscribe() {
    return (
        <Container>
            <p className="heading is-family-primary has-text-link has-text-weight-bold">
                Subscribe
            </p>
            <p>Want to be notified when new content is available?</p>
            <div className="is-flex">
                <input
                    className="input is-radiusless"
                    type="text"
                    placeholder="Your email here"
                />
                <a className="button is-dark is-radiusless">
                    {" "}
                    <span className="icon is-small">
                        <i className="fas fa-arrow-right" />
                    </span>
                </a>
            </div>
        </Container>
    );
}
