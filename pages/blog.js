import Head from "../components/Head";
import { Link } from "../server/routes";
import Section from "../components/Section";
import PageTitleHeading from "../components/PageTitleHeading";
import BlogLayout from "../containers/BlogLayout";
import styled from "styled-components";
import isThisMonth from "date-fns/is_this_month";
import FeaturedPost from "../components/FeaturedPost";
import RecentPosts from "../components/RecentPosts";
import PostCategories from "../components/PostCategories";
import Subscribe from "../components/Subscribe";
import SocialContacs from "../components/SocialContacts";

const CategoriesContainer = styled(Section)`
    padding-top: 0;
    padding-bottom: 0;
`;

export default function BlogHomePage({ posts, metadata, data }) {
    const { description, title, keywords, content } = data;
    const tags = { description, title, keywords };
    const orderedPosts = posts.sort(
        (a, b) => new Date(b.publish_date) - new Date(a.publish_date)
    );
    const featuredPost = orderedPosts[0];
    const postsThisMonth = orderedPosts
        .slice(1, orderedPosts.length)
        .filter(post => isThisMonth(new Date(post.publish_date)));
    const recentPosts =
        postsThisMonth.length > 0 ? postsThisMonth : orderedPosts.slice(1, 6);
    const recentPostsHeading =
        (postsThisMonth.length > 0 && "This Month") || "Recent";
    return (
        <BlogLayout metadata={metadata}>
            <Head tags={tags} />
            <Section>
                <div className="is-flex is-justify-content-center">
                    <figure className="">
                        <img src="https://www.roarafrica.com/wp-content/uploads/2017/11/sample-logo.png" />
                    </figure>
                </div>
            </Section>
            <CategoriesContainer>
                <PostCategories />
            </CategoriesContainer>
            <Section>
                <div className="columns">
                    <div className="column is-8">
                        <div className="content">
                            <p>
                                Two Goats, frisking gayly on the rocky steeps of
                                a mountain valley, chanced to meet, one on each
                                side of a deep chasm through which poured a
                                mighty mountain torrent. The trunk of a fallen
                                tree formed the only means of crossing the
                                chasm, and on this not even two squirrels could
                                have passed each other in safety. The narrow
                                path would have made the bravest tremble. Not so
                                our Goats. Their pride would not permit either
                                to stand aside for the other.
                            </p>
                            <p>
                                One set her foot on the log. The other did
                                likewise. In the middle they met horn to horn.
                                Neither would give way, and so they both fell,
                                to be swept away by the roaring torrent below.
                            </p>
                            <p>
                                It is better to yield than to come to misfortune
                                through stubbornness.
                            </p>
                        </div>
                        <FeaturedPost {...featuredPost} />
                    </div>
                    <div className="column">
                        <SocialContacs />
                        <Subscribe />
                        {/* <PostCategories /> */}
                        <RecentPosts
                            posts={recentPosts}
                            heading={recentPostsHeading}
                        />
                    </div>
                </div>
            </Section>
        </BlogLayout>
    );
}

BlogHomePage.getInitialProps = async () => {
    const asyncPosts = import("../_data/_posts.json");
    const asyncMetadata = import("../_data/_metadata.json");
    const asyncData = import("../_data/_pages/_blog.json");

    const posts = await asyncPosts;
    const metadata = await asyncMetadata;
    const data = await asyncData;

    return {
        posts: posts.default,
        metadata: metadata.default,
        data: data.default
    };
};
