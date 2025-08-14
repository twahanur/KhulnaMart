import { PageHeader } from "../../components/page-header"
// Fixed import path to use ui/card
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card"
import { termsOfSale } from "../../fakedata/policies"
import { Package, Truck, RotateCcw, Shield, Clock, Phone, Mail } from "lucide-react"

export default function TermsOfSalePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Terms of Sale"
        subtitle="Important information about purchasing from our store"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Sale", href: "/terms-of-sale" },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Highlights */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800">Key Purchase Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Package className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-purple-800 mb-2">Free Shipping</h4>
                  <p className="text-purple-700 text-sm">On orders over $75</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <RotateCcw className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-purple-800 mb-2">30-Day Returns</h4>
                  <p className="text-purple-700 text-sm">Easy return process</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-purple-800 mb-2">Secure Payment</h4>
                  <p className="text-purple-700 text-sm">SSL encrypted checkout</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Purchase Process Overview */}
        <div className="mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">How Purchasing Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    1
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Browse & Select</h4>
                  <p className="text-blue-700 text-sm">Choose your products and add to cart</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    2
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Secure Checkout</h4>
                  <p className="text-blue-700 text-sm">Enter shipping and payment details</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    3
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Order Processing</h4>
                  <p className="text-blue-700 text-sm">We prepare and package your order</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    4
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Fast Delivery</h4>
                  <p className="text-blue-700 text-sm">Track your package to your door</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Last Updated */}
        <div className="mb-8 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-orange-600" />
            <p className="text-sm text-orange-800">
              <strong>Last updated:</strong> {termsOfSale.lastUpdated}
            </p>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-10">
          {termsOfSale.sections.map((section, index) => (
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
                <div className="space-y-3">
                  {Array.isArray(section.content) ? (
                    section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed text-sm">{item}</p>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed text-sm">{section.content}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Service Contact */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Need Help with Your Order?</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">Customer Service</h4>
                  <div className="space-y-3 text-blue-700">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      <a href="mailto:orders@shopease.com" className="hover:underline">
                        orders@shopease.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <a href="tel:+15551234567" className="hover:underline">
                        +1 (555) 123-4567
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5" />
                      <span>Live chat available 9 AM - 6 PM EST</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">Business Hours</h4>
                  <div className="space-y-1 text-blue-700 text-sm">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                    <p>Sunday: Closed</p>
                    <p className="mt-2 font-medium">Emergency support available 24/7</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
