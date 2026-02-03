 // Remove this if you are using it as a Server Component

import { getAllBlogs } from '@/app/data/blog';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { SocialShare } from './share';

// 1. Notice the type change: params is now a Promise
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const posts = getAllBlogs();
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  // Construct current URL for sharing
  const currentUrl = `https://yourdomain.com/blog/${slug}`;

  return (
    <main className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content (Left) */}
        <article className="lg:col-span-2">
          <header className="mb-8">
             <span className="bg-teal-500 text-black px-3 py-1 rounded-md text-sm font-bold uppercase">Blog</span>
             <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">{post.title}</h1>
          </header>
          
          <img src={post.coverImage} className="w-full rounded-3xl mb-10" alt={post.title} />
          
          <div className="prose prose-invert prose-teal max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </article>

        {/* Sidebar Sharing (Right) */}
        <aside className="hidden lg:block">
          <SocialShare title={post.title} url={currentUrl} />
        </aside>
      </div>
    </main>
  );
}