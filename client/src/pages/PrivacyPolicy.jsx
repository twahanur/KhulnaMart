// import { PageHeader } from "../../components/page-header"
import { privacyPolicy } from "../assets/FakeData/policesData"
import PageHeader from "../components/PageHeader"
// Fixed import path to use ui/card
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Shield, Eye, Lock, Users, FileText, Phone, Mail, MapPin } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy is our priority. Learn how we protect and use your information."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Privacy Overview */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-3">
                <Shield className="w-6 h-6" />
                Privacy at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Secure Data</h4>
                  <p className="text-blue-700 text-sm">SSL encryption & secure storage</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Transparency</h4>
                  <p className="text-blue-700 text-sm">Clear data usage policies</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Your Rights</h4>
                  <p className="text-blue-700 text-sm">Control your personal data</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Compliance</h4>
                  <p className="text-blue-700 text-sm">GDPR & CCPA compliant</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Navigation */}
        <div className="mb-12">
          <Card className="bg-gray-50 border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-800">Quick Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {privacyPolicy.sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#section-${index}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium p-3 bg-white rounded-lg border hover:border-blue-200 transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Last Updated Notice */}
        <div className="mb-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <p className="text-sm font-medium text-yellow-800">
              <strong>Last updated:</strong> {privacyPolicy.lastUpdated}
            </p>
          </div>
          <p className="text-sm text-yellow-700 mt-2">
            We regularly review and update our privacy practices to ensure your data remains protected.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-12">
          {privacyPolicy.sections.map((section, index) => (
            <div key={index} id={`section-${index}`} className="scroll-mt-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-xl text-gray-800 flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {Array.isArray(section.content) ? (
                      section.content.map((paragraph, pIndex) => (
                        <div key={pIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{paragraph}</p>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{section.content}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 text-xl">Questions About Your Privacy?</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Contact Our Privacy Team</h4>
                  <div className="space-y-3 text-green-700">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      <a href="mailto:privacy@shopease.com" className="hover:underline">
                        privacy@shopease.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <a href="tel:+15551234567" className="hover:underline">
                        +1 (555) 123-4567
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      <span>123 Privacy Street, Data City, DC 12345</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Your Data Rights</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Request access to your personal data
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Update or correct your information
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Delete your account and data
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Export your data in portable format
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Opt-out of marketing communications
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
