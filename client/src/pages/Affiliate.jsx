"use client"

import { useState } from "react"
import { DollarSign, Users, BarChart, Gift, CheckCircle, Star } from "lucide-react"
// import PageHeader from "../../components/page-header"
// import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
// import { Button } from "../../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
// import { Badge } from "../../components/ui/badge"
// import { partnerProgram, testimonials } from "../../fakedata/affiliate-data"
import PageHeader from './../components/PageHeader';
import { Button } from "../components/ui/button";
import { partnerProgram, testimonials } from './../assets/FakeData/affiliateData';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const iconMap = {
  DollarSign,
  Users,
  BarChart,
  Gift,
}

export default function AffiliatePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    audience: "",
    experience: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Partner Program"
        subtitle="Join our affiliate program and start earning commissions today"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Affiliate Program", href: "/affiliate" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{partnerProgram.title}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{partnerProgram.description}</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Apply Now
          </Button>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Partner With Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerProgram.benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon]
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Commission Structure */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Commission Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnerProgram.commissionStructure.map((tier, index) => (
              <Card
                key={index}
                className={`text-center ${tier.tier === "Gold" ? "ring-2 ring-yellow-400 bg-yellow-50" : ""}`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    {tier.tier === "Gold" && <Star className="w-5 h-5 text-yellow-500" />}
                    {tier.tier}
                    {tier.tier === "Gold" && <Badge className="bg-yellow-500">Popular</Badge>}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{tier.commission}</div>
                  <p className="text-gray-600 text-sm">{tier.sales} sales/month</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Program Requirements</h3>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {partnerProgram.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">What Our Partners Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Apply to Join Our Program</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website/Social Media URL *</label>
                  <Input type="url" name="website" value={formData.website} onChange={handleInputChange} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Describe Your Audience</label>
                  <Textarea
                    name="audience"
                    value={formData.audience}
                    onChange={handleInputChange}
                    placeholder="Tell us about your audience demographics, interests, and size..."
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Previous Affiliate Experience</label>
                  <Textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Share your experience with affiliate marketing..."
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
