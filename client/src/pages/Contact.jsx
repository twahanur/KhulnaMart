// import { PageHeader } from "../../components/page-header"
// import { ContactForm } from "../../components/contact-form"
// import { SocialLinks } from "../../components/social-links"
// import { companyInfo } from "../../fakedata/company-info"
import PageHeader from "../components/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Clock, MessageCircle } from "lucide-react"
import { ContactForm } from './../components/ContactForm';
import { SocialLinks } from "../components/SocialLinks";
import { companyInfo } from "../assets/FakeData/companyInfo";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team - we're here to help!"
        onBack={() => window.history.back()}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <ContactForm />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">How long does shipping take?</h4>
                    <p className="text-sm text-muted-foreground">
                      Standard shipping takes 3-5 business days, express shipping takes 1-2 business days.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">What is your return policy?</h4>
                    <p className="text-sm text-muted-foreground">
                      Items can be returned within 30 days of delivery in original condition for a full refund.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Do you offer international shipping?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, we ship to over 50 countries worldwide. Shipping costs vary by location.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Response Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Email Support</h4>
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Available during business hours with immediate assistance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Live Chat</h4>
                    <p className="text-sm text-muted-foreground">
                      Coming soon! Real-time support for urgent inquiries.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <SocialLinks socialMedia={companyInfo.socialMedia} className="justify-center" />
          </div>
        </div>
      </div>
    </div>
  )
}
