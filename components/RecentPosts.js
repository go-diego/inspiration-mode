import { Link } from "../server/routes";
import styled from "styled-components";
import PostMediaObject from "./PostMediaObject";
import format from "date-fns/format";
import MarkedContent from "./MarkedContent";

const Container = styled.div`
    padding-bottom: 2.5rem 0;
`;

const Posts = styled.div`
    padding: 1.5rem 0;
`;

export default function RecentPosts({ posts, heading }) {
    return (
        <Container>
            <p className="heading is-family-primary has-text-link has-text-weight-bold">
                {heading}
            </p>
            <Posts>
                {posts &&
                    posts.map((post, i) => (
                        <PostMediaObject key={i} {...post} />
                    ))}
            </Posts>
            <div className="is-flex is-justify-content-center">
                <Link prefetch href="/archive">
                    <a className="is-size-6 is-flex button is-link heading has-text-weight-bold">
                        View All &nbsp;
                        <span className="icon is-small">
                            <i className="fas fa-arrow-right" />
                        </span>
                    </a>
                </Link>
            </div>
        </Container>
    );
}
