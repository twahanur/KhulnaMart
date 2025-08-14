import { Ruler, Shirt, ShoppingBag } from "lucide-react"
import PageHeader from "../../components/page-header"
import SizeChart from "../../components/size-chart"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { sizeGuides, productGuides } from "../../fakedata/guides-data"

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Size Guide & Product Information"
        subtitle="Find the perfect fit and learn how to care for your products"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Size Guide", href: "/size-guide" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Size Charts */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Ruler className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Size Charts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Use our comprehensive size charts to find your perfect fit. All measurements are in inches unless
              otherwise specified.
            </p>
          </div>

          <Tabs defaultValue="women" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="women">Women's</TabsTrigger>
              <TabsTrigger value="men">Men's</TabsTrigger>
              <TabsTrigger value="shoes">Shoes</TabsTrigger>
            </TabsList>

            <TabsContent value="women">
              <SizeChart
                title={sizeGuides.clothing.women.title}
                headers={["Size", "Bust", "Waist", "Hips"]}
                data={sizeGuides.clothing.women.sizes}
              />
            </TabsContent>

            <TabsContent value="men">
              <SizeChart
                title={sizeGuides.clothing.men.title}
                headers={["Size", "Chest", "Waist", "Neck"]}
                data={sizeGuides.clothing.men.sizes}
              />
            </TabsContent>

            <TabsContent value="shoes">
              <SizeChart
                title={sizeGuides.shoes.title}
                headers={["US", "UK", "EU", "CM"]}
                data={sizeGuides.shoes.conversions}
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Measuring Tips */}
        <div className="mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Shirt className="w-5 h-5" />
                How to Measure Yourself
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">For Clothing:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Measure over undergarments, not over clothes</li>
                    <li>• Keep the tape measure level and snug, not tight</li>
                    <li>• Bust: Measure around the fullest part</li>
                    <li>• Waist: Measure at the narrowest point</li>
                    <li>• Hips: Measure around the fullest part</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">For Shoes:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Measure feet at the end of the day</li>
                    <li>• Measure both feet and use the larger size</li>
                    <li>• Stand on a piece of paper and trace your foot</li>
                    <li>• Measure from heel to longest toe</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Guides */}
        <div>
          <div className="text-center mb-8">
            <ShoppingBag className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Care Guides</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn how to properly care for your products to ensure they last longer and maintain their quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productGuides.map((guide) => (
              <Card key={guide.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <p className="text-sm text-gray-500">{guide.category}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {guide.content.map((item, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
