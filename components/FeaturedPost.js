import { Link } from "../server/routes";
import styled from "styled-components";
import format from "date-fns/format";
import MarkedContent from "../components/MarkedContent";
import slugify from "slugify";

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
`;

export default function FeaturedPost({
    image,
    title,
    publish_date,
    description
}) {
    const slug = slugify(title, {
        replacement: "-",
        remove: /[*+~.()'"!:@]/g,
        lower: true
    });
    return (
        <div className="card ">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img
                        className="is-object-fit-cover"
                        src={image}
                        alt={title}
                    />
                </figure>
            </div>
            <div className="card-content">
                <Row>
                    <span className="is-size-6">
                        {format(new Date(publish_date), "MMM M, YYYY")}
                    </span>
                    <div className="heading is-size-6">
                        <span className="icon is-small">
                            <i className="fas fa-fire-alt" />
                        </span>
                        New
                    </div>
                </Row>
                <p className="title is-4">
                    <Link prefetch to={`/blog/${slug}`}>
                        <a className="is-family-primary is-stretched-link">
                            {title}
                        </a>
                    </Link>
                </p>
                <div className="content">
                    <MarkedContent source={description} />
                </div>
            </div>
        </div>
    );
}
