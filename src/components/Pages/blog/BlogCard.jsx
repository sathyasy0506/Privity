import { Clock, Calendar } from "lucide-react";

export function BlogCard({ blog, onClick }) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={blog.image_url}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-semibold rounded-full shadow-lg">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>
              {new Date(blog.published_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{blog.read_time} min read</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[--color-primary] transition-colors duration-300">
          {blog.title}
        </h3>

        <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
          {blog.excerpt}
        </p>

        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <img
            src={
              blog.author_avatar ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                blog.author
              )}&background=101827&color=fff`
            }
            alt={blog.author}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
          />
          <div>
            <p className="font-semibold text-gray-900">{blog.author}</p>
            <p className="text-sm text-gray-500">Author</p>
          </div>
        </div>
      </div>
    </article>
  );
}
