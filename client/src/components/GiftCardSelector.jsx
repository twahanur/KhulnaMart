"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"

export default function GiftCardSelector({ options, onSelect, selectedValue }) {
  const [customAmount, setCustomAmount] = useState("")
  const [showCustom, setShowCustom] = useState(false)

  const handlePresetSelect = (value) => {
    setShowCustom(false)
    setCustomAmount("")
    onSelect(value)
  }

  const handleCustomSelect = () => {
    const amount = Number.parseInt(customAmount)
    if (amount >= 10 && amount <= 1000) {
      onSelect(amount)
      setShowCustom(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {options.map((option) => (
          <Card
            key={option.value}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedValue === option.value ? "ring-2 ring-blue-500 bg-blue-50" : "hover:bg-gray-50"
            }`}
            onClick={() => handlePresetSelect(option.value)}
          >
            <CardContent className="p-4 text-center relative">
              {option.popular && (
                <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs">Popular</Badge>
              )}
              <div className="text-2xl font-bold text-gray-800">${option.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" onClick={() => setShowCustom(!showCustom)} className="mb-4">
          Custom Amount
        </Button>

        {showCustom && (
          <div className="flex gap-2 max-w-xs mx-auto">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <Input
                type="number"
                placeholder="10-1000"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="pl-8"
                min="10"
                max="1000"
              />
            </div>
            <Button onClick={handleCustomSelect} disabled={!customAmount}>
              Select
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
