import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import useSWR from "swr";
import PostCard from "../../components/PostCard";

export default function Sub() {
  const router = useRouter();

  const subName = router.query.sub;

  const { data: sub, error } = useSWR(subName ? `/subs/${subName}` : null);

  if (error) router.push("/");

  let postMarkup;
  if (!sub) {
    <p className="text-lg text-center">Loading...</p>;
  } else if (sub.posts.length === 0) {
    <p className="text-lg text-center">No posts submitted yet</p>;
  } else {
    postMarkup = sub.posts.map((post) => (
      <PostCard key={post.identifier} post={post} />
    ));
  }

  return (
    <div className="container flex pt-5">
      {sub && (
        <div className="w-160">
          {sub.posts.map((post) => (
            <PostCard key={post.identifier} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
