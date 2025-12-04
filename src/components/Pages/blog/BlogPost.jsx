import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Bookmark,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";
import { ENDPOINTS } from "../../../config/api2";

const BLOGS_API_URL = ENDPOINTS.GET_BLOGS();

export function BlogPost({ slug, onBack }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    loadBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const loadBlog = async () => {
    try {
      setLoading(true);

      const response = await fetch(BLOGS_API_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch blogs: ${response.statusText}`);
      }

      const data = await response.json();

      const mappedBlogs = (data || []).map((post) => {
        const slugFromLink = post.link
          ? post.link.replace(/\/$/, "").split("/").pop()
          : "";

        const categoryNames = (post.categories || []).map((c) => c.name);

        const primaryCategory =
          categoryNames.find(
            (name) => name && name.toLowerCase() !== "featured"
          ) ||
          categoryNames[0] ||
          "Uncategorized";

        const parsedReadTime = parseInt(post.reading_time, 10);
        const readTime = Number.isNaN(parsedReadTime) ? 1 : parsedReadTime;

        return {
          id: post.id,
          title: post.title,
          content: post.content,
          excerpt: post.excerpt,
          link: post.link,
          image_url: post.featured_image,
          categories: categoryNames,
          category: primaryCategory,

          published_at: post.date, // "YYYY-MM-DD"
          read_time: readTime,
          slug: slugFromLink,
        };
      });

      const found = mappedBlogs.find((b) => b.slug === slug);
      setBlog(found || null);
    } catch (error) {
      console.error("Error loading blog:", error);
      setBlog(null);
    } finally {
      setLoading(false);
    }
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      shareUrl
    )}&text=${encodeURIComponent(blog?.title || "")}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[--color-primary]"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Blog not found
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top hero / cover */}
      <div className="relative h-[55vh] overflow-hidden">
        <img
          src={blog.image_url}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[--color-primary] text-white text-sm font-semibold rounded-full mb-4">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">


              <div className="h-12 w-px bg-white/30 hidden md:block" />

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-5 h-5" />
                  <span>
                    {new Date(blog.published_at).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="w-5 h-5" />
                  <span>{blog.read_time} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-12 pb-8 border-b border-gray-200">
          <p className="text-xl text-gray-700 italic">{blog.excerpt}</p>
        </div>

        {/* Floating share bar */}
        <div className="sticky top-8 float-right ml-8 mb-8">
          <div className="flex flex-col gap-3 bg-gray-50 p-4 rounded-2xl shadow-sm">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="p-3 hover:bg-blue-100 rounded-full transition-colors relative group"
              title="Share"
            >
              <Share2 className="w-5 h-5 text-gray-700 group-hover:text-[--color-primary]" />
            </button>

            {showShareMenu && (
              <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 hover:bg-sky-100 rounded-full transition-colors"
                  title="Share on Twitter"
                >
                  <Twitter className="w-5 h-5 text-gray-700 hover:text-sky-600" />
                </a>

                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 hover:bg-blue-100 rounded-full transition-colors"
                  title="Share on Facebook"
                >
                  <Facebook className="w-5 h-5 text-gray-700 hover:text-[--color-primary]" />
                </a>

                <a
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 hover:bg-blue-100 rounded-full transition-colors"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 hover:text-blue-700" />
                </a>
              </div>
            )}

            <button
              className="p-3 hover:bg-amber-100 rounded-full transition-colors group"
              title="Bookmark"
            >
              <Bookmark className="w-5 h-5 text-gray-700 group-hover:text-amber-600" />
            </button>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <div className="text-gray-800 leading-relaxed whitespace-pre-line">
            {blog.content}
          </div>
        </article>

      </div>
    </div>
  );
}
