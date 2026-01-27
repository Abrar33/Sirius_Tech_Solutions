import React from 'react';
import { getAllBlogs } from '@/app/data/blog';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <main className="bg-black min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-12">Latest <span className="text-teal-400">Insights</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
              <article className="bg-gray-900/40 border border-gray-800 rounded-3xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-teal-400 text-sm font-semibold mb-3 uppercase tracking-wider">{post.category}</span>
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">{post.title}</h2>
                  <p className="text-gray-400 mb-6 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="mt-auto flex items-center justify-between border-t border-gray-800 pt-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    </div>
                    <ArrowRight size={18} className="text-teal-500 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}