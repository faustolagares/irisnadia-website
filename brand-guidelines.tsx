"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function BrandGuidelines() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Juliana Duran Brand Guidelines</h1>
        <p className="text-lg text-darkGray max-w-3xl mx-auto">
          A comprehensive guide to ensure consistency and reinforce our brand's recognition across all communications.
        </p>
      </div>

      <Tabs defaultValue="brand-identity" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="brand-identity">Brand Identity</TabsTrigger>
          <TabsTrigger value="tone-of-voice">Tone of Voice</TabsTrigger>
          <TabsTrigger value="visual-style">Visual Style</TabsTrigger>
          <TabsTrigger value="messaging">Messaging</TabsTrigger>
        </TabsList>

        {/* Brand Identity Section */}
        <TabsContent value="brand-identity" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-light tracking-tight">Our Brand Essence</CardTitle>
              <CardDescription>The core values and principles that define Juliana Duran</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3 text-primary">Mission Statement</h3>
                <p className="text-darkGray">
                  To provide exceptional therapeutic massage experiences that promote wellness, rejuvenation, and
                  balance in a luxurious and tranquil environment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-primary">Brand Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-primary/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium">Excellence</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-darkGray">
                        We are committed to delivering the highest quality therapeutic services that exceed
                        expectations.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium">Authenticity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-darkGray">
                        We embrace genuine connections and honest approaches to wellness and self-care.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium">Transformation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-darkGray">
                        We believe in the power of therapeutic touch to transform both body and mind.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-primary">Brand Personality</h3>
                <p className="text-darkGray mb-4">Juliana Duran embodies a personality that is:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-secondary p-4 rounded-md text-center">
                    <p className="font-medium">Sophisticated</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-md text-center">
                    <p className="font-medium">Nurturing</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-md text-center">
                    <p className="font-medium">Knowledgeable</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-md text-center">
                    <p className="font-medium">Attentive</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tone of Voice Section */}
        <TabsContent value="tone-of-voice" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-light tracking-tight">Tone of Voice</CardTitle>
              <CardDescription>How we express ourselves across all communications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3 text-primary">Voice Characteristics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-2">Warm & Inviting</h4>
                    <p className="text-darkGray mb-4">
                      Our communication should feel welcoming and approachable, creating a sense of comfort and trust.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="text-green-600 mt-1 flex-shrink-0" size={18} />
                        <p className="text-sm">
                          "We welcome you to experience our signature therapeutic massage, designed to address your
                          unique needs."
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <X className="text-red-600 mt-1 flex-shrink-0" size={18} />
                        <p className="text-sm">"Our massage services are available for booking now."</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Knowledgeable & Professional</h4>
                    <p className="text-darkGray mb-4">
                      We demonstrate expertise and professionalism while remaining accessible and easy to understand.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="text-green-600 mt-1 flex-shrink-0" size={18} />
                        <p className="text-sm">
                          "Our deep tissue technique targets chronic tension patterns, promoting increased mobility and
                          pain relief."
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <X className="text-red-600 mt-1 flex-shrink-0" size={18} />
                        <p className="text-sm">
                          "We use advanced myofascial release and trigger point therapy to manipulate the fascial system
                          and release hypertonic muscle fibers."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-primary">Writing Guidelines</h3>
                <div className="space-y-4">
                  <div className="bg-secondary p-6 rounded-md">
                    <h4 className="font-medium mb-2">Be Concise & Clear</h4>
                    <p className="text-darkGray mb-3">
                      Use clear, straightforward language that conveys information efficiently. Avoid unnecessary jargon
                      or overly complex sentences.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-md border border-green-200">
                        <p className="text-sm font-medium text-green-600 mb-2">DO</p>
                        <p className="text-sm">
                          "Our 60-minute Swedish massage combines gentle strokes and moderate pressure to promote
                          relaxation and stress relief."
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-md border border-red-200">
                        <p className="text-sm font-medium text-red-600 mb-2">DON'T</p>
                        <p className="text-sm">
                          "Our extensive 60-minute Swedish massage therapy session utilizes a variety of techniques
                          including effleurage and petrissage to facilitate the reduction of stress and tension in the
                          body."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary p-6 rounded-md">
                    <h4 className="font-medium mb-2">Be Authentic & Personal</h4>
                    <p className="text-darkGray mb-3">
                      Write as if speaking directly to an individual. Use "you" and "your" to create a personal
                      connection.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-md border border-green-200">
                        <p className="text-sm font-medium text-green-600 mb-2">DO</p>
                        <p className="text-sm">
                          "Your wellness journey is unique, and we're here to support you every step of the way."
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-md border border-red-200">
                        <p className="text-sm font-medium text-red-600 mb-2">DON'T</p>
                        <p className="text-sm">
                          "Clients seeking wellness services can find appropriate treatments at our facility."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Visual Style Section */}
        <TabsContent value="visual-style" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-light tracking-tight">Visual Style</CardTitle>
              <CardDescription>Our visual identity elements and how to use them</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3 text-primary">Color Palette</h3>
                <p className="text-darkGray mb-4">
                  Our color palette reflects elegance, warmth, and tranquility. The primary gold/copper tone conveys
                  luxury while the neutral tones provide balance.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="space-y-2">
                    <div className="h-24 bg-[#A17840] rounded-md"></div>
                    <p className="font-medium">Primary</p>
                    <p className="text-sm text-darkGray">#A17840</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 bg-[#B89060] rounded-md"></div>
                    <p className="font-medium">Primary Light</p>
                    <p className="text-sm text-darkGray">#B89060</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 bg-[#D5B78C] rounded-md"></div>
                    <p className="font-medium">Primary Lighter</p>
                    <p className="text-sm text-darkGray">#D5B78C</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 bg-[#f5f2ee] rounded-md"></div>
                    <p className="font-medium">Secondary</p>
                    <p className="text-sm text-darkGray">#F5F2EE</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 bg-[#444444] rounded-md"></div>
                    <p className="font-medium">Dark Gray</p>
                    <p className="text-sm text-darkGray">#444444</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-primary">Typography</h3>
                <p className="text-darkGray mb-4">
                  Our typography system uses clean, elegant fonts with specific weights and spacing to convey
                  sophistication and readability.
                </p>
                <div className="space-y-6">
                  <div className="bg-secondary p-6 rounded-md">
                    <h4 className="font-medium mb-2">Headings</h4>
                    <p className="text-darkGray mb-4">
                      Headings use lighter weights with tight letter spacing to create an elegant, sophisticated
                      appearance.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h1 className="text-4xl font-light tracking-tight">Heading 1 (3.815rem)</h1>
                        <p className="text-sm text-darkGray mt-1">Font weight: 300, Letter spacing: -0.03em</p>
                      </div>
                      <div>
                        <h2 className="text-3xl font-light tracking-tight">Heading 2 (3.052rem)</h2>
                        <p className="text-sm text-darkGray mt-1">Font weight: 300, Letter spacing: -0.03em</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-light tracking-tight">Heading 3 (2.441rem)</h3>
                        <p className="text-sm text-darkGray mt-1">Font weight: 300, Letter spacing: -0.03em</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary p-6 rounded-md">
                    <h4 className="font-medium mb-2">Body Text</h4>
                    <p className="text-darkGray mb-4">
                      Body text uses a clean, readable font with appropriate line height for optimal readability.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <p className="text-base">Body Text (1rem / 16px)</p>
                        <p className="text-sm text-darkGray mt-1">Font weight: 400, Line height: 1.5</p>
                      </div>
                      <div>
                        <p className="text-sm">Small Text (0.875rem / 14px)</p>
                        <p className="text-sm text-darkGray mt-1">Font weight: 400, Line height: 1.5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-primary">Imagery Style</h3>
                <p className="text-darkGray mb-4">
                  Our imagery should evoke feelings of tranquility, luxury, and wellness. Images should be high-quality
                  and convey a sense of calm and rejuvenation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Do Use Images That:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-600 mt-1 flex-shrink-0" size={18} />
                        <p className="text-sm">Feature warm, natural lighting with soft shadows</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-600 mt-1 flex-shrink-0" size={18} />
                        <p className="text-sm">Showcase serene, elegant environments</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-600 mt-1 flex-shrink-0" size={18} />
                        <p className="text-sm">Include natural elements like stone, wood, and plants</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-600 mt-1 flex-shrink-0" size={18} />
                        <p className="text-sm">Depict authentic, diverse individuals experiencing wellness</p>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium">Don't Use Images That:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="text-red-600 mt-1 flex-shrink-0" size={18} />
                        <p className="text-sm">Appear overly processed or artificial</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="text-red-600 mt-1 flex-shrink-0" size={18} />
                        <p className="text-sm">Feature harsh lighting or strong shadows</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="text-red-600 mt-1 flex-shrink-0" size={18} />
                        <p className="text-sm">Look cluttered or chaotic</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="text-red-600 mt-1 flex-shrink-0" size={18} />
                        <p className="text-sm">Depict generic stock photo scenarios that lack authenticity</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Messaging Section */}
        <TabsContent value="messaging" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-light tracking-tight">Messaging Principles</CardTitle>
              <CardDescription>How to craft effective messages that align with our brand</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3 text-primary">Key Messages</h3>
                <p className="text-darkGray mb-4">
                  These core messages should be consistently communicated across all channels:
                </p>
                <div className="space-y-4">
                  <div className="bg-secondary p-4 rounded-md">
                    <h4 className="font-medium">Expertise & Professionalism</h4>
                    <p className="text-sm text-darkGray mt-1">
                      "With advanced training and years of experience, we provide therapeutic massage treatments
                      tailored to your unique needs."
                    </p>
                  </div>
                  <div className="bg-secondary p-4 rounded-md">
                    <h4 className="font-medium">Luxury Experience</h4>
                    <p className="text-sm text-darkGray mt-1">
                      "Indulge in a premium wellness experience where every detail is designed for your comfort and
                      rejuvenation."
                    </p>
                  </div>
                  <div className="bg-secondary p-4 rounded-md">
                    <h4 className="font-medium">Holistic Wellness</h4>
                    <p className="text-sm text-darkGray mt-1">
                      "Our therapeutic approach addresses both body and mind, promoting overall wellness and balance in
                      your life."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-primary">Message Framework</h3>
                <div className="space-y-4">
                  <div className="bg-secondary p-6 rounded-md">
                    <h4 className="font-medium mb-2">Problem → Solution → Benefit</h4>
                    <p className="text-darkGray mb-3">
                      Structure messages to acknowledge a challenge, present our solution, and highlight the resulting
                      benefit.
                    </p>
                    <div className="bg-white p-4 rounded-md border border-primary/20">
                      <p className="text-sm mb-2">
                        <span className="font-medium">Problem:</span> "Chronic tension and stress can impact your daily
                        life and wellbeing."
                      </p>
                      <p className="text-sm mb-2">
                        <span className="font-medium">Solution:</span> "Our therapeutic deep tissue massage targets
                        areas of persistent tension."
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Benefit:</span> "Experience improved mobility, reduced pain, and a
                        renewed sense of vitality."
                      </p>
                    </div>
                  </div>

                  <div className="bg-secondary p-6 rounded-md">
                    <h4 className="font-medium mb-2">Features → Advantages → Benefits</h4>
                    <p className="text-darkGray mb-3">
                      Highlight what we offer, why it matters, and how it improves the client's experience.
                    </p>
                    <div className="bg-white p-4 rounded-md border border-primary/20">
                      <p className="text-sm mb-2">
                        <span className="font-medium">Feature:</span> "Private treatment rooms with premium amenities."
                      </p>
                      <p className="text-sm mb-2">
                        <span className="font-medium">Advantage:</span> "Creates a serene, distraction-free
                        environment."
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Benefit:</span> "Allows you to fully relax and maximize the
                        therapeutic benefits of your treatment."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-primary">Content Examples</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Effective Content Examples</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-md border border-green-200">
                        <h5 className="text-sm font-medium text-green-600 mb-2">Social Media Post</h5>
                        <p className="text-sm">
                          "Discover the transformative power of our signature massage. Designed to release deep tension
                          and restore balance, this treatment combines expert techniques with a luxurious experience.
                          Your journey to wellness begins here. #JulianaDuran #LuxuryWellness"
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-md border border-green-200">
                        <h5 className="text-sm font-medium text-green-600 mb-2">Service Description</h5>
                        <p className="text-sm">
                          "Our Therapeutic Deep Tissue Massage targets chronic tension patterns using precise pressure
                          and specialized techniques. Perfect for those experiencing persistent discomfort or limited
                          mobility, this treatment promotes healing and restores function. 60 minutes of focused care
                          for lasting relief."
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium">Content to Avoid</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-md border border-red-200">
                        <h5 className="text-sm font-medium text-red-600 mb-2">Overly Clinical</h5>
                        <p className="text-sm">
                          "Our myofascial release therapy utilizes sustained pressure on the fascial restrictions to
                          eliminate pain and restore motion by manipulating the fascial system to release hypertonic
                          muscle fibers and increase sarcomere length."
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-md border border-red-200">
                        <h5 className="text-sm font-medium text-red-600 mb-2">Too Promotional</h5>
                        <p className="text-sm">
                          "BEST MASSAGE IN DENVER!!! Try our AMAZING deep tissue massage NOW and get INCREDIBLE
                          results!!! Limited time offer - DON'T MISS OUT!!!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
