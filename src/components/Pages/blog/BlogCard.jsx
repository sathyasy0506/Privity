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
      </div>
    </article>
  );
}
