import { Link } from "../server/routes";
import styled from "styled-components";
import format from "date-fns/format";
import slugify from "slugify";

const categories = [
    { type: "Professional", image: "https://picsum.photos/id/117/536/354" },
    { type: "Style", image: "https://picsum.photos/id/216/536/354" },
    { type: "Hair & Makeup", image: "https://picsum.photos/id/307/536/354" },
    { type: "Mommyhood", image: "https://picsum.photos/id/807/536/354" }
];

const Category = styled.div`
    height: 100px;
    ${"" /* margin: 1rem 0; */}
    position: relative;
`;

export default function PostCategories() {
    return (
        <div>
            <p className="heading is-family-primary has-text-link has-text-weight-bold">
                Categories
            </p>
            <div className="columns">
                {categories.map((category, i) => {
                    const q = slugify(category.type, {
                        replacement: "-",
                        remove: /[*+~.()'"!:@]/g,
                        lower: true
                    });
                    return (
                        <div className="column">
                            <Link
                                key={i}
                                prefetch
                                // href={`/archive?q=${q}`}
                                // as={`/blog?q=${q}`}
                                to={`/archive?q=${q}`}>
                                <a>
                                    <Category className="is-clipped">
                                        <figure className="image is-3by2">
                                            <img
                                                className="is-object-fit-cover"
                                                src={category.image}
                                                alt={`${
                                                    category.type
                                                } category`}
                                            />
                                        </figure>
                                        <div className="is-overlay">
                                            <p
                                                style={{ padding: "0.5rem" }}
                                                className="title is-size-4 has-text-weight-bold has-text-light">
                                                {category.type}
                                            </p>
                                        </div>
                                    </Category>
                                </a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
