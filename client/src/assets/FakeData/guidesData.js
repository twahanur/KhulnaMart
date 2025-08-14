export const sizeGuides = {
  clothing: {
    women: {
      title: "Women's Clothing Size Guide",
      sizes: [
        { size: "XS", bust: "32-34", waist: "24-26", hips: "34-36" },
        { size: "S", bust: "34-36", waist: "26-28", hips: "36-38" },
        { size: "M", bust: "36-38", waist: "28-30", hips: "38-40" },
        { size: "L", bust: "38-40", waist: "30-32", hips: "40-42" },
        { size: "XL", bust: "40-42", waist: "32-34", hips: "42-44" },
        { size: "XXL", bust: "42-44", waist: "34-36", hips: "44-46" },
      ],
    },
    men: {
      title: "Men's Clothing Size Guide",
      sizes: [
        { size: "XS", chest: "34-36", waist: "28-30", neck: "14-14.5" },
        { size: "S", chest: "36-38", waist: "30-32", neck: "15-15.5" },
        { size: "M", chest: "38-40", waist: "32-34", neck: "16-16.5" },
        { size: "L", chest: "40-42", waist: "34-36", neck: "17-17.5" },
        { size: "XL", chest: "42-44", waist: "36-38", neck: "18-18.5" },
        { size: "XXL", chest: "44-46", waist: "38-40", neck: "19-19.5" },
      ],
    },
  },
  shoes: {
    title: "Shoe Size Guide",
    conversions: [
      { us: "5", uk: "3", eu: "35.5", cm: "22" },
      { us: "6", uk: "4", eu: "37", cm: "23" },
      { us: "7", uk: "5", eu: "38", cm: "24" },
      { us: "8", uk: "6", eu: "39", cm: "25" },
      { us: "9", uk: "7", eu: "40.5", cm: "26" },
      { us: "10", uk: "8", eu: "42", cm: "27" },
      { us: "11", uk: "9", eu: "43", cm: "28" },
      { us: "12", uk: "10", eu: "44.5", cm: "29" },
    ],
  },
}

export const productGuides = [
  {
    id: 1,
    title: "How to Care for Your Leather Products",
    category: "Care Instructions",
    content: [
      "Clean regularly with a soft, dry cloth",
      "Use leather conditioner every 3-6 months",
      "Store in a cool, dry place away from direct sunlight",
      "Avoid exposure to water and harsh chemicals",
      "Use cedar shoe trees for leather shoes",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Washing Instructions for Different Fabrics",
    category: "Care Instructions",
    content: [
      "Cotton: Machine wash in cold water, tumble dry low",
      "Wool: Hand wash or dry clean, lay flat to dry",
      "Silk: Hand wash in cold water, air dry",
      "Polyester: Machine wash warm, tumble dry medium",
      "Denim: Wash inside out in cold water, air dry",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Choosing the Right Fit",
    category: "Sizing",
    content: [
      "Measure yourself regularly as sizes can change",
      "Check the size chart for each brand",
      "Consider the fabric stretch and fit preference",
      "Read customer reviews for fit insights",
      "When in doubt, size up for comfort",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
]
