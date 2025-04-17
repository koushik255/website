import React from 'react';
import { getPostData, getAllPostSlugs } from '../../../lib/posts.js';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    return `<pre class="bg-zinc-800 p-4"><code>${str}</code></pre>`;
  }
});

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

async function getPost(slug) {
  const postData = getPostData(slug);
  return postData;
}

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const htmlContent = post.content ? md.render(post.content) : '<p>Content not available.</p>';
  const formattedDate = post.date || 'Date unavailable';

  return (
    <div className="min-h-screen bg-zinc-900">
      <div className="p-6">
        {/* Simple header */}
        <header className="py-8 text-center">
          <h1 className="text-4xl font-bold text-red-500 uppercase">
            {post.title}
          </h1>
          <div className="text-red-400 mt-2">
            {formattedDate}
          </div>
        </header>

        {/* Simple content */}
        <main className="prose prose-invert text-amber-50 max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: htmlContent }} 
          />
        </main>

        {/* Simple footer */}
        <footer className="mt-10 text-center">
          <Link 
            href="/blog"
            className="text-red-500 hover:text-red-400 font-bold uppercase"
          >
            BACK TO BLOG
          </Link>
        </footer>
      </div>
    </div>
  );
}
