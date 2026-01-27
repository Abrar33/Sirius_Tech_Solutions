import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '../types/blog';

// Use path.join without the leading slash for better compatibility
const blogDirectory = path.join(process.cwd(), 'content', 'blog');

export function getAllBlogs(): BlogPost[] {
  // 1. Check if directory exists to prevent crash
  if (!fs.existsSync(blogDirectory)) {
    console.warn("Blog directory not found at:", blogDirectory);
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  
  // 2. Filter for ONLY .md files to prevent 500 errors on hidden system files
  const mdFiles = fileNames.filter(fn => fn.endsWith('.md'));

  return mdFiles.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title || "Untitled",
      excerpt: data.excerpt || "",
      date: data.date || new Date().toISOString(),
      author: data.author || "Admin",
      category: data.category || "General",
      coverImage: data.coverImage || "/fallback-image.jpg",
    };
  }).sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}