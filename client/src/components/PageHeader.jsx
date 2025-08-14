"use client"

import { ArrowLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

function PageHeader({ title, subtitle, onBack, showBackButton = true, breadcrumbs = [] }) {
  return (
    <div className="border-b bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-foreground transition-colors">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-4 mb-4">
          {showBackButton && (
            <Button variant="ghost" size="sm" onClick={onBack} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          )}
        </div>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight mb-2">{title}</h1>
          {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}

// Export both as named and default to satisfy different import patterns
export { PageHeader }
export default PageHeader
