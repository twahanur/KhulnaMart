"use client"

import { useState } from "react"
import { Gift, Mail, Clock, CreditCard, RefreshCw, Smartphone } from "lucide-react"
import PageHeader from "../../components/page-header"
import GiftCardSelector from "../../components/gift-card-selector"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import { giftCardOptions, giftCardFeatures, giftCardFAQ } from "../../fakedata/gift-cards-data"

const iconMap = {
  Clock,
  Smartphone,
  CreditCard,
  RefreshCw,
}

export default function GiftCardsPage() {
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [giftCardData, setGiftCardData] = useState({
    recipientEmail: "",
    recipientName: "",
    senderName: "",
    message: "",
    deliveryDate: "",
  })

  const handleInputChange = (e) => {
    setGiftCardData({
      ...giftCardData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePurchase = (e) => {
    e.preventDefault()
    // Handle gift card purchase
    console.log("Gift card purchase:", { amount: selectedAmount, ...giftCardData })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Gift Cards"
        subtitle="Give the perfect gift with our digital gift cards"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gift Cards", href: "/gift-cards" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Gift className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Perfect for Any Occasion</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shopping for someone else but not sure what to give them? Give them the gift of choice with a ShopEase gift
            card.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Gift Card Purchase Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Purchase Gift Card
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePurchase} className="space-y-6">
                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Select Amount</label>
                    <GiftCardSelector
                      options={giftCardOptions}
                      selectedValue={selectedAmount}
                      onSelect={setSelectedAmount}
                    />
                  </div>

                  {/* Recipient Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Recipient Name *</label>
                      <Input
                        name="recipientName"
                        value={giftCardData.recipientName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Recipient Email *</label>
                      <Input
                        type="email"
                        name="recipientEmail"
                        value={giftCardData.recipientEmail}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <Input name="senderName" value={giftCardData.senderName} onChange={handleInputChange} required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Personal Message (Optional)</label>
                    <Textarea
                      name="message"
                      value={giftCardData.message}
                      onChange={handleInputChange}
                      placeholder="Write a personal message for the recipient..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Date (Optional)</label>
                    <Input
                      type="date"
                      name="deliveryDate"
                      value={giftCardData.deliveryDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                    />
                    <p className="text-xs text-gray-500 mt-1">Leave blank for immediate delivery</p>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-medium">Total:</span>
                      <span className="text-2xl font-bold text-blue-600">${selectedAmount}</span>
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                      Purchase Gift Card
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Gift Card Preview */}
          <div>
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Gift Card Preview</h3>
              <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-2xl font-bold">ShopEase</h4>
                      <p className="text-blue-100">Gift Card</p>
                    </div>
                    <Gift className="w-8 h-8 text-blue-200" />
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-bold mb-2">${selectedAmount}</div>
                    <div className="text-blue-100 text-sm">Gift Card Value</div>
                  </div>

                  {giftCardData.recipientName && (
                    <div className="mb-4">
                      <div className="text-blue-100 text-sm">To:</div>
                      <div className="font-semibold">{giftCardData.recipientName}</div>
                    </div>
                  )}

                  {giftCardData.senderName && (
                    <div className="mb-4">
                      <div className="text-blue-100 text-sm">From:</div>
                      <div className="font-semibold">{giftCardData.senderName}</div>
                    </div>
                  )}

                  {giftCardData.message && (
                    <div className="mb-4">
                      <div className="text-blue-100 text-sm">Message:</div>
                      <div className="text-sm italic">"{giftCardData.message}"</div>
                    </div>
                  )}

                  <div className="text-xs text-blue-200 mt-6">Code: GIFT-XXXX-XXXX-XXXX</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Choose Our Gift Cards?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {giftCardFeatures.map((feature, index) => {
              const IconComponent = iconMap[feature.icon]
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            {giftCardFAQ.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
