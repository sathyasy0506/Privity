import { useEffect, useState, useRef } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { BlogCard } from "./BlogCard";
import { ENDPOINTS } from "../../../config/api2";

const BLOGS_API_URL = ENDPOINTS.GET_BLOGS();

// breakpoints (matching Tailwind's lg: 1024px)
const MOBILE_PAGE_SIZE = 3;
const DESKTOP_PAGE_SIZE = 6;

export function BlogListing({ onBlogClick }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // 🔥 NEW: responsive blogs-per-page
  const [blogsPerPage, setBlogsPerPage] = useState(MOBILE_PAGE_SIZE);

  // 🔥 for featured slider
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  // ref to scroll to top of blog cards when page changes
  const blogTopRef = useRef(null);

  // 👉 detect screen width and set page size
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateBlogsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        // lg and above → desktop
        setBlogsPerPage(DESKTOP_PAGE_SIZE);
      } else {
        // mobile / tablet
        setBlogsPerPage(MOBILE_PAGE_SIZE);
      }
    };

    updateBlogsPerPage(); // initial
    window.addEventListener("resize", updateBlogsPerPage);

    return () => window.removeEventListener("resize", updateBlogsPerPage);
  }, []);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      setLoading(true);

      const response = await fetch(BLOGS_API_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch blogs: ${response.statusText}`);
      }

      const data = await response.json();

      const mappedBlogs = (data || []).map((post) => {
        // Derive slug from the WordPress link
        const slug = post.link
          ? post.link.replace(/\/$/, "").split("/").pop()
          : "";

        // post.categories from PHP is an array of objects: { id, name, slug }
        const categoryNames = Array.isArray(post.categories)
          ? post.categories.map((c) => c && c.name).filter(Boolean)
          : [];

        // Primary category (prefer non-"Featured")
        const primaryCategory =
          categoryNames.find(
            (name) => name && name.toLowerCase() !== "featured"
          ) ||
          categoryNames[0] ||
          "Uncategorized";

        // reading_time is like "1 min read" → we only want the number
        const parsedReadTime = parseInt(post.reading_time, 10);
        const readTime = Number.isNaN(parsedReadTime) ? 1 : parsedReadTime;

        return {
          id: post.id,
          title: post.title,
          content: post.content,
          excerpt: post.excerpt || "",
          link: post.link,
          image_url: post.featured_image,
          categories: categoryNames, // array of category names (strings)
          category: primaryCategory, // used on card pill (never "Featured" if another exists)
          author: post.author?.name || "",
          author_avatar: null, // not provided by API, will fallback to ui-avatars
          published_at: post.date, // "YYYY-MM-DD"
          read_time: readTime, // number (minutes)
          slug,
          isFeatured: categoryNames.some(
            (name) => name && name.toLowerCase() === "featured"
          ),
        };
      });

      // Sort newest first (in case API is not sorted)
      mappedBlogs.sort(
        (a, b) => new Date(b.published_at) - new Date(a.published_at)
      );

      setBlogs(mappedBlogs);
      setCurrentFeaturedIndex(0); // reset slider when blogs change
    } catch (error) {
      console.error("Error loading blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Build category filters from all category names (exclude "Featured", sort alphabetically)
  const categories = [
    "All",
    ...Array.from(
      new Set(
        blogs
          .flatMap((blog) => blog.categories || [])
          .filter((name) => name && name.toLowerCase() !== "featured")
      )
    ).sort((a, b) => a.localeCompare(b)),
  ];

  // Featured blogs array (for slider)
  const featuredBlogs = blogs.filter((b) => b.isFeatured);
  const hasMultipleFeatured = featuredBlogs.length > 1;
  const currentFeaturedBlog =
    featuredBlogs[currentFeaturedIndex] || featuredBlogs[0] || null;

  // Auto-change featured blog every 5s if two or more
  useEffect(() => {
    if (!hasMultipleFeatured) return;

    const interval = setInterval(() => {
      setCurrentFeaturedIndex((prev) => (prev + 1) % featuredBlogs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [hasMultipleFeatured, featuredBlogs.length]);

  // Filtered blogs for grid (does NOT affect the featured slider)
  const filteredBlogs = blogs.filter((blog) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      blog.title.toLowerCase().includes(search) ||
      (blog.excerpt || "").toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All"
        ? true
        : (blog.categories || []).some(
            (cat) => cat && cat.toLowerCase() === selectedCategory.toLowerCase()
          );

    return matchesSearch && matchesCategory;
  });

  // DO NOT remove featured blogs from the grid.
  const blogsForGrid = filteredBlogs;

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, blogsPerPage]);

  // If searching or filtering by category, don't paginate
  const isFiltered = searchTerm.trim() !== "" || selectedCategory !== "All";

  const totalPages = isFiltered
    ? 1
    : Math.ceil(blogsForGrid.length / blogsPerPage) || 1;

  const paginatedBlogs = isFiltered
    ? blogsForGrid // show ALL filtered blogs (ignore pagination)
    : blogsForGrid.slice(
        (currentPage - 1) * blogsPerPage,
        currentPage * blogsPerPage
      );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);

    // Scroll to top of blog cards
    if (blogTopRef.current) {
      blogTopRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[--color-primary]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Slider */}
        {currentFeaturedBlog && (
          <div
            onClick={() => onBlogClick(currentFeaturedBlog.slug)}
            className="mb-16 group cursor-pointer relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-[400px] overflow-hidden">
              <img
                src={currentFeaturedBlog.image_url}
                alt={currentFeaturedBlog.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="inline-block px-4 py-2 bg-[--color-primary] text-white text-sm font-semibold rounded-full mb-4">
                  Featured
                </span>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
                  {currentFeaturedBlog.title}
                </h2>

                <p className="text-lg text-gray-200 mb-6 max-w-2xl line-clamp-2">
                  {currentFeaturedBlog.excerpt}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={
                      currentFeaturedBlog.author_avatar ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        currentFeaturedBlog.author
                      )}&background=101827&color=fff`
                    }
                    alt={currentFeaturedBlog.author}
                    className="w-12 h-12 rounded-full ring-2 ring-white"
                  />

                  <div>
                    <p className="font-semibold text-white">
                      {currentFeaturedBlog.author}
                    </p>
                    <p className="text-sm text-gray-300">
                      {currentFeaturedBlog.read_time} min read
                    </p>
                  </div>
                </div>
              </div>

              {/* Dots for multiple featured blogs */}
              {hasMultipleFeatured && (
                <div className="absolute bottom-6 right-8 flex gap-2">
                  {featuredBlogs.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentFeaturedIndex(idx);
                      }}
                      className={`w-3 h-3 rounded-full border border-white transition-all ${
                        currentFeaturedIndex === idx
                          ? "bg-white scale-110"
                          : "bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Search + Categories */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative w-full md:w-96 flex-shrink-0">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-[--color-primary] focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white shadow-sm"
            />
          </div>

          {/* Categories */}
          <div className="w-full md:flex-1 min-w-0 relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#ffffff] to-transparent z-20" />

            <div className="relative z-10 flex overflow-x-auto whitespace-nowrap gap-2 py-1 no-scrollbar pl-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-[--color-primary] text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#ffffff] to-transparent z-20" />
          </div>
        </div>

        {/* Blog Grid + Pagination */}
        {paginatedBlogs.length > 0 ? (
          <div ref={blogTopRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  onClick={() => onBlogClick(blog.slug)}
                />
              ))}
            </div>

            {/* Only show pagination when NOT filtered */}
            {!isFiltered && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full border flex items-center justify-center transition-all ${
                    currentPage === 1
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-9 h-9 rounded-full text-sm font-medium flex items-center justify-center transition-all ${
                        currentPage === page
                          ? "bg-[--color-primary] text-white shadow-md"
                          : "bg-white border hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-full border flex items-center justify-center transition-all ${
                    currentPage === totalPages
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
