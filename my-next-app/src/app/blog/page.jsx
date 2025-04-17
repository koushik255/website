import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '../../lib/posts.js'
import BackButton from './BackButton'

function BlogPage() {
  // This runs on the server
  const posts = getAllPosts()

  return (
    <div className="min-h-screen w-full bg-zinc-900">
      <div className="p-6">
        {/* Simple header */}
        <div className="py-8 text-center">
          <h1 className="text-4xl font-bold text-red-500 uppercase">
            BLOG
          </h1>
        </div>

        {/* Simple content */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl">
            {posts.length > 0 ? (
              <ul className="space-y-6">
                {posts.map(post => (
                  <li
                    key={post.id || post.slug}
                    className="bg-zinc-800 hover:bg-zinc-700 p-6"
                  >
                    <Link href={`/posts/${post.slug}`}>
                      <div className="cursor-pointer">
                        <h2 className="text-2xl font-bold text-white mb-2 uppercase">
                          {post.title}
                        </h2>
                        <p className="text-red-400">
                          {post.date}
                        </p>
                        {post.excerpt && (
                          <p className="mt-3 text-gray-400">
                            {post.excerpt}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-10 text-gray-400 uppercase font-bold">
                NO BLOG POSTS FOUND
              </div>
            )}
          </div>

          {/* Simple back button */}
          <div className="mt-10">
            <BackButton />
          </div>
        </div>

        {/* Simple footer */}
        <div className="py-4 text-center text-gray-500 text-sm uppercase font-bold">
          KOUSHIK'S DOMAIN
        </div>
      </div>
    </div>
  )
}

export default BlogPage
