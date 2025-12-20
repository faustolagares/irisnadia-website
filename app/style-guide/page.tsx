import Link from "next/link"

export default function StyleGuidePage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-medium mb-8 font-heading">Juliana Duran Website Style Guide</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-medium mb-4 font-heading border-b pb-2">Layout Structure</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2 font-heading">Container Layout</h3>
              <p className="mb-4">All page content should be wrapped in the standard container layout:</p>
              <div className="bg-gray-100 p-4 rounded-md">
                <code className="text-sm font-mono">
                  &lt;div className="container mx-auto px-4 md:px-8"&gt;
                  <br />
                  &nbsp;&nbsp;{/* Content goes here */}
                  <br />
                  &lt;/div&gt;
                </code>
              </div>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <code className="text-sm font-mono">container</code> - Sets the max-width at various breakpoints
                </li>
                <li>
                  <code className="text-sm font-mono">mx-auto</code> - Centers the container horizontally
                </li>
                <li>
                  <code className="text-sm font-mono">px-4 md:px-8</code> - Adds consistent horizontal padding
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2 font-heading">Page Structure</h3>
              <p>Each page should follow this general structure:</p>
              <ol className="mt-4 list-decimal pl-6 space-y-2 text-gray-700">
                <li>Header (with navigation)</li>
                <li>Hero section (using appropriate hero component)</li>
                <li>Page content (wrapped in container)</li>
                <li>Footer</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2 font-heading">Section Spacing</h3>
              <p>Use consistent vertical spacing between sections:</p>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Large sections: <code className="text-sm font-mono">py-16 md:py-20</code>
                </li>
                <li>
                  Medium sections: <code className="text-sm font-mono">py-12 md:py-16</code>
                </li>
                <li>
                  Small sections: <code className="text-sm font-mono">py-8 md:py-12</code>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-medium mb-4 font-heading border-b pb-2">Component Structure</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2 font-heading">Hero Components</h3>
              <p>All hero components should:</p>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                <li>Be wrapped in the standard container</li>
                <li>Include the border and rounded corners</li>
                <li>Use the pixel grid animation effect</li>
                <li>Have appropriate responsive heights</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2 font-heading">Content Sections</h3>
              <p>Content sections should:</p>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                <li>Be wrapped in the standard container</li>
                <li>Use consistent spacing (margins and padding)</li>
                <li>Follow the responsive grid system</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-medium mb-4 font-heading border-b pb-2">Example Implementation</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <code className="text-sm font-mono whitespace-pre-line">
              {`export default function ExamplePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <AnimatedHero title="Page Title" />

      {/* Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          {/* Content goes here */}
        </div>
      </section>

      {/* Another Content Section */}
      <section className="py-16 md:py-20 bg-[#f5f2ee]">
        <div className="container mx-auto px-4 md:px-8">
          {/* More content goes here */}
        </div>
      </section>
    </main>
  )
}`}
            </code>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t">
        <Link href="/" className="text-[#A17840] hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export const metadata = {
  title: "Style Guide | Juliana Duran",
  description: "Layout and design guidelines for the Juliana Duran website.",
}
