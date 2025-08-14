"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import PageHeader from "../../components/page-header"
import BlogCard from "../../components/blog-card"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { blogPosts, blogCategories } from "../../fakedata/blog-data"

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
