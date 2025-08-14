import { PageHeader } from "../../components/page-header"
import { SocialLinks } from "../../components/social-links"
import { companyInfo } from "../../fakedata/company-info"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Building, Target, Eye, Heart, Users, Award, Truck, Shield } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { label: "Years in Business", value: "4+", icon: Building },
    { label: "Happy Customers", value: "50K+", icon: Users },
    { label: "Products Sold", value: "1M+", icon: Award },
    { label: "Countries Served", value: "25+", icon: Truck },
  ]

  const features = [
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Your data and transactions are protected with industry-leading security measures.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping options to get your orders to you as soon as possible.",
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Dedicated support team ready to help you with any questions or concerns.",
    },
    {
      icon: Award,
      title: "Quality Products",
      description: "Carefully curated selection of high-quality products from trusted brands.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="About Us"
        subtitle="Learn more about our story, mission, and the team behind ShopEase"
        onBack={() => window.history.back()}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Company Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in {companyInfo.founded}, {companyInfo.name} began with a simple vision:{" "}
                {companyInfo.vision.toLowerCase()}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {companyInfo.description} Our mission is {companyInfo.mission.toLowerCase()}
              </p>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{companyInfo.mission}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{companyInfo.vision}</p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Our Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {companyInfo.values.map((value, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {value}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Contact Information</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Email: {companyInfo.email}</p>
                    <p>Phone: {companyInfo.phone}</p>
                    <p>
                      Address: {companyInfo.address.street}, {companyInfo.address.city}, {companyInfo.address.state}{" "}
                      {companyInfo.address.zip}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Follow Us</h4>
                  <SocialLinks socialMedia={companyInfo.socialMedia} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
