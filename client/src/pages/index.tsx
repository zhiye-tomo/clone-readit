import Head from "next/head";
import Axios from "axios";
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useSWR from "swr";

import { Post } from "../types";

import PostCard from "../components/PostCard";

dayjs.extend(relativeTime);

export default function Home() {
  const { data: posts } = useSWR<Post[]>("/posts");
  return (
    <Fragment>
      <Head>
        <title>readit: the front page of the internet</title>
      </Head>
      <div className="container flex pt-4">
        {/* Post feed */}
        <div className="w-160">
          {posts?.map((post) => (
            <PostCard post={post} key={post.identifier} />
          ))}
        </div>
        {/* Sidebar */}
      </div>
    </Fragment>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     const res = await Axios.get('/posts')

//     return { props: { posts: res.data } }
//   } catch (err) {
//     return { props: { error: 'Something went wrong' } }
//   }
// }
