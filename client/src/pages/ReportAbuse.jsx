"use client"

import { useState } from "react"
import { PageHeader } from "../../components/page-header"
import { reportAbusePolicy } from "../../fakedata/policies"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { AlertTriangle, Shield, FileText, Phone, Mail, Clock, Users, Eye, Flag } from "lucide-react"

export default function ReportAbusePage() {
  const [reportForm, setReportForm] = useState({
    type: "",
    description: "",
    url: "",
    email: "",
    urgent: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setReportForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Abuse report submitted:", reportForm)
    // Handle form submission
  }

  const abuseTypes = [
    "Fraudulent Activity",
    "Harassment or Bullying",
    "Spam or Unwanted Content",
    "Copyright Infringement",
    "Prohibited Items",
    "Fake Reviews",
    "Identity Theft",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Report Abuse Policy"
        subtitle="Help us maintain a safe and trustworthy marketplace"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Report Abuse", href: "/report-abuse" },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Emergency Alert */}
        <div className="mb-8">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <AlertTriangle className="h-6 w-6" />
                Report Abuse Immediately
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 mb-4">
                If you've encountered abusive behavior, illegal content, or safety concerns, report it immediately using
                our form below or contact us directly.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-red-600 hover:bg-red-700">
                  <FileText className="h-4 w-4 mr-2" />
                  File Report Below
                </Button>
                <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent">
                  <Phone className="h-4 w-4 mr-2" />
                  Call 24/7 Hotline
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Report Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="w-5 h-5" />
                  Submit Abuse Report
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type of Abuse *</label>
                    <select
                      name="type"
                      value={reportForm.type}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select abuse type...</option>
                      {abuseTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">URL or Location</label>
                    <Input
                      name="url"
                      value={reportForm.url}
                      onChange={handleInputChange}
                      placeholder="https://example.com/page or describe location"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Description *</label>
                    <Textarea
                      name="description"
                      value={reportForm.description}
                      onChange={handleInputChange}
                      placeholder="Please provide as much detail as possible about the abusive behavior or content..."
                      rows={5}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Email (Optional)</label>
                    <Input
                      type="email"
                      name="email"
                      value={reportForm.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                    <p className="text-xs text-gray-500 mt-1">We may contact you for additional information</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="urgent"
                      checked={reportForm.urgent}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <label className="text-sm text-gray-700">This is an urgent safety concern</label>
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Submit Report
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Policy Information */}
          <div className="space-y-6">
            {/* What We Investigate */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <Eye className="w-5 h-5" />
                  What We Investigate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Fraudulent transactions and scams
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Harassment, bullying, or threats
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Spam and unwanted communications
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Copyright and trademark violations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Sale of prohibited or illegal items
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Fake reviews and ratings manipulation
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Clock className="w-5 h-5" />
                  Response Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                    <span className="font-medium text-red-800">Urgent Safety Issues</span>
                    <span className="text-red-600">Within 1 hour</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                    <span className="font-medium text-orange-800">High Priority</span>
                    <span className="text-orange-600">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                    <span className="font-medium text-blue-800">Standard Reports</span>
                    <span className="text-blue-600">Within 3-5 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Users className="w-5 h-5" />
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <a href="mailto:abuse@shopease.com" className="text-blue-600 hover:underline">
                      abuse@shopease.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">24/7 Emergency Hotline Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Abuse Policy Details</h2>
          <div className="space-y-8">
            {reportAbusePolicy.sections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50">
                  <CardTitle className="text-lg text-gray-800 flex items-center gap-3">
                    <span className="w-7 h-7 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
