import { termsOfUse } from "../assets/FakeData/policesData"
import PageHeader from "../components/PageHeader"
// import { PageHeader } from "../components/page-header"
// import { termsOfUse } from "../../fakedata/policies"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Terms of Use"
        subtitle="Rules and guidelines for using our website and services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Use", href: "/terms-of-use" },
        ]}
      />

      {/* Important Notice */}
      <div className="mb-12">
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">⚠️</span>
              </div>
              <div>
                <h3 className="font-bold text-red-800 text-lg mb-2">Important Legal Notice</h3>
                <p className="text-red-700">
                  By using our website, you acknowledge that you have read, understood, and agree to be bound by these
                  Terms of Use. If you do not agree with these terms, please discontinue use of our services
                  immediately.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Last Updated */}
      <div className="mb-8 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
        <p className="text-sm text-indigo-800">
          <strong>Last updated:</strong> {termsOfUse.lastUpdated}
        </p>
      </div>

      {/* Terms Sections */}
      <div className="space-y-10">
        {termsOfUse.sections.map((section, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
              <CardTitle className="text-lg text-gray-800 flex items-center gap-3">
                <span className="w-7 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Legal Contact */}
      <div className="mt-12">
        <Card className="bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-800">Legal Questions or Concerns?</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Legal Department</h4>
                <div className="space-y-2 text-gray-700">
                  <p>
                    📧{" "}
                    <a href="mailto:legal@shopease.com" className="hover:underline">
                      legal@shopease.com
                    </a>
                  </p>
                  <p>
                    📞{" "}
                    <a href="tel:+15551234567" className="hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </p>
                  <p>📍 123 Legal Avenue, Law City, LC 12345</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Dispute Resolution</h4>
                <div className="space-y-1 text-gray-700 text-sm">
                  <p>• Mediation services available</p>
                  <p>• Arbitration process outlined in terms</p>
                  <p>• Consumer protection compliance</p>
                  <p>• Governing law: [Your Jurisdiction]</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
