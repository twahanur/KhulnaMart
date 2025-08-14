// import { PageHeader } from "../../components/page-header"
// import { PolicySection } from "../../components/policy-section"
import { csrPolicy } from "../assets/FakeData/policesData"
import PageHeader from "../components/PageHeader"
import { Card, CardContent } from "../components/ui/card"
import { Leaf, Heart, Users, Award } from "lucide-react"
import { PolicySection } from './../components/PolicySection';

export default function CSRPolicyPage() {
  const highlights = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Carbon-neutral shipping and sustainable packaging",
    },
    {
      icon: Heart,
      title: "Community Support",
      description: "Supporting local communities and charitable causes",
    },
    {
      icon: Users,
      title: "Ethical Sourcing",
      description: "Fair labor practices and ethical supply chain",
    },
    {
      icon: Award,
      title: "Employee Welfare",
      description: "Fair wages and inclusive work environment",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Corporate Social Responsibility"
        subtitle="Our commitment to making a positive impact on society and the environment"
        onBack={() => window.history.back()}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mb-6 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Last updated:</strong> {csrPolicy.lastUpdated}
            </p>
          </div>

          <div className="space-y-6">
            {csrPolicy.sections.map((section, index) => (
              <PolicySection key={index} title={section.title} content={section.content} />
            ))}
          </div>

          <div className="mt-8 p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">Our Impact</h3>
            <p className="text-green-700 dark:text-green-300">
              Since 2020, we've donated over $500,000 to community initiatives, achieved carbon-neutral shipping, and
              maintained partnerships with 50+ ethical suppliers worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
