"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
// import PageHeader from "../../components/page-header"
// import BlogCard from "../../components/blog-card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
// import { blogPosts, blogCategories } from "../assets/FakeData/blogData"
import PageHeader from "../components/PageHeader"
import BlogCard from './../components/BlogCard';

// fake data
//
//
//

export const blogPosts = [
  {
    id: 1,
    title: "10 Fashion Trends That Will Define 2024",
    excerpt: "Discover the hottest fashion trends that are taking the world by storm this year.",
    content:
      "Fashion is constantly evolving, and 2024 brings exciting new trends that blend comfort with style. From sustainable fabrics to bold color palettes, this year's fashion landscape is diverse and inclusive...",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Fashion",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["fashion", "trends", "style", "2024"],
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Sustainable Shopping",
    excerpt: "Learn how to make eco-friendly choices while building your perfect wardrobe.",
    content:
      "Sustainable shopping isn't just a trend—it's a lifestyle choice that benefits both you and the planet. By choosing quality over quantity and supporting ethical brands, you can create a wardrobe that lasts...",
    author: "Michael Chen",
    date: "2024-01-10",
    category: "Sustainability",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["sustainability", "eco-friendly", "shopping", "environment"],
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "How to Style Your Home Office for Maximum Productivity",
    excerpt: "Transform your workspace into a productivity powerhouse with these styling tips.",
    content:
      "Your home office environment significantly impacts your productivity and mood. From choosing the right lighting to organizing your space efficiently, small changes can make a big difference...",
    author: "Emma Davis",
    date: "2024-01-05",
    category: "Home & Office",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["home office", "productivity", "workspace", "organization"],
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Tech Gadgets That Will Change Your Daily Routine",
    excerpt: "Explore the latest tech innovations that are revolutionizing how we live and work.",
    content:
      "Technology continues to evolve at a rapid pace, bringing us gadgets that seamlessly integrate into our daily lives. From smart home devices to wearable tech, these innovations are making life easier...",
    author: "David Wilson",
    date: "2023-12-28",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["technology", "gadgets", "innovation", "smart home"],
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Gift Guide: Perfect Presents for Every Occasion",
    excerpt: "Find the perfect gift for your loved ones with our comprehensive gift guide.",
    content:
      "Finding the perfect gift can be challenging, but with the right guidance, you can choose presents that truly delight your recipients. Whether it's for birthdays, holidays, or special occasions...",
    author: "Lisa Thompson",
    date: "2023-12-20",
    category: "Gifts",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["gifts", "presents", "occasions", "shopping"],
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Seasonal Wardrobe Essentials: Winter Edition",
    excerpt: "Build the perfect winter wardrobe with these must-have pieces and styling tips.",
    content:
      "Winter fashion is all about layering, warmth, and style. From cozy sweaters to statement coats, building a winter wardrobe that keeps you comfortable and fashionable is an art...",
    author: "Rachel Green",
    date: "2023-12-15",
    category: "Fashion",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["winter", "fashion", "wardrobe", "essentials"],
    readTime: "6 min read",
  },
]

export const blogCategories = [
  { name: "All", count: 6 },
  { name: "Fashion", count: 2 },
  { name: "Sustainability", count: 1 },
  { name: "Home & Office", count: 1 },
  { name: "Technology", count: 1 },
  { name: "Gifts", count: 1 },
]




//
//
//
//
//

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  const handleSearch = (term) => {
    setSearchTerm(term)
    filterPosts(term, selectedCategory)
  }

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    filterPosts(searchTerm, category)
  }

  const filterPosts = (search, category) => {
    let filtered = blogPosts

    if (category !== "All") {
      filtered = filtered.filter((post) => post.category === category)
    }

    if (search) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase())),
      )
    }

    setFilteredPosts(filtered)
  }

  const featuredPost = blogPosts[0]
  const regularPosts = filteredPosts.slice(1)

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Our Blog"
        subtitle="Stay updated with the latest trends, tips, and insights"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 mr-4">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Categories:</span>
            </div>
            {blogCategories.map((category) => (
              <Badge
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "secondary"}
                className="cursor-pointer hover:bg-blue-100"
                onClick={() => handleCategoryFilter(category.name)}
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {selectedCategory === "All" && !searchTerm && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Article</h2>
            <BlogCard post={featuredPost} featured={true} />
          </div>
        )}

        {/* Regular Posts */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
            <span className="text-gray-500">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
            </span>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                  setFilteredPosts(blogPosts)
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
