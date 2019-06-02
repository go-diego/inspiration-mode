import Head from "../components/Head";
import AttentionBanner from "../components/AttentionBanner";
import Section from "../components/Section";
import PageTitleHeading from "../components/PageTitleHeading";
import BlogLayout from "../containers/BlogLayout";
import PostMediaObject from "../components/PostMediaObject";

export default function BlogArchivePage({ posts, metadata, data, q }) {
    const { description, title, content, keywords } = data;
    const orderedPosts = posts.sort(
        (a, b) => new Date(b.publish_date) - new Date(a.publish_date)
    );
    const tags = {
        description,
        title: `${title} | Inspiration Mode`,
        keywords
    };
    return (
        <BlogLayout metadata={metadata}>
            <Head tags={tags} />

            <PageTitleHeading title={title} />
            {q && (
                <p className="is-size-6 has-text-link heading has-text-centered">
                    {`Category: ${q}`}
                </p>
            )}
            <Section>
                {orderedPosts.map((post, i) => (
                    <PostMediaObject key={i} {...post} />
                ))}
            </Section>
        </BlogLayout>
    );
}

BlogArchivePage.getInitialProps = async ({ query: q }) => {
    const asyncPosts = import("../_data/_posts.json");
    const asyncMetadata = import("../_data/_metadata.json");
    const asyncData = import("../_data/_pages/_archive.json");

    const posts = await asyncPosts;
    const metadata = await asyncMetadata;
    const data = await asyncData;

    return {
        posts: posts.default,
        metadata: metadata.default,
        data: data.default,
        q: q.q
    };
};
