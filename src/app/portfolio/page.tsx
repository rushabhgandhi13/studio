
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { portfolioSummary } from "@/ai/flows/portfolio-summary";

const portfolioItems = [
  {
    title: "AI-Powered Healthcare Platform",
    projectDetails: "Developed an AI-powered platform to improve patient outcomes and reduce healthcare costs. The platform uses machine learning algorithms to analyze patient data and provide personalized treatment recommendations.",
    technologiesUsed: "Python, TensorFlow, React, Node.js",
    clientTestimonials: "The AI-powered platform has significantly improved our patient outcomes and reduced our healthcare costs.",
    successMetrics: "Improved patient outcomes by 30% and reduced healthcare costs by 20%.",
    imageUrl: "https://picsum.photos/id/237/400/300",
  },
  {
    title: "Smart City Transportation System",
    projectDetails: "Designed and implemented a smart city transportation system that uses AI to optimize traffic flow and reduce congestion. The system uses real-time data to adjust traffic signals and provide commuters with personalized route recommendations.",
    technologiesUsed: "Java, Spring Boot, Angular, PostgreSQL",
    clientTestimonials: "The smart city transportation system has significantly reduced traffic congestion and improved the overall quality of life for our residents.",
    successMetrics: "Reduced traffic congestion by 40% and improved commuter satisfaction by 25%.",
    imageUrl: "https://picsum.photos/id/239/400/300",
  },
  {
    title: "AI-Driven E-Commerce Recommendation Engine",
    projectDetails: "Developed an AI-driven recommendation engine to provide personalized product recommendations to e-commerce customers. The engine uses machine learning algorithms to analyze customer behavior and provide relevant product suggestions.",
    technologiesUsed: "Python, scikit-learn, Flask, MongoDB",
    clientTestimonials: "The AI-driven recommendation engine has significantly increased our sales and improved customer satisfaction.",
    successMetrics: "Increased sales by 35% and improved customer satisfaction by 30%.",
    imageUrl: "https://picsum.photos/id/246/400/300",
  },
];

async function getSummary(item: any) {
  return await portfolioSummary({
    projectDetails: item.projectDetails,
    technologiesUsed: item.technologiesUsed,
    clientTestimonials: item.clientTestimonials,
    successMetrics: item.successMetrics,
  });
}

export default async function PortfolioPage() {
  return (
    <div className="container mx-auto py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Portfolio</h1>
        <p className="text-lg text-foreground mb-8">
          We have a proven track record of delivering innovative AI solutions and software outsourcing services to businesses across a variety of industries.
          Our portfolio showcases some of our most successful projects and case studies.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {await Promise.all(
          portfolioItems.map(async (item, index) => {
            const summary = await getSummary(item);
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <img src={item.imageUrl} alt={item.title} className="rounded-md w-full h-48 object-cover mb-4" />
                  <CardDescription>{item.projectDetails.substring(0, 100)}...</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold text-primary mb-2">Summary</h3>
                  <p className="text-foreground mb-4">{summary?.summary}</p>
                  <h3 className="text-xl font-semibold text-primary mb-2">Technologies Used</h3>
                  <p className="text-foreground">{item.technologiesUsed}</p>
                  <h3 className="text-xl font-semibold text-primary mb-2">Client Testimonials</h3>
                  <p className="text-foreground">{item.clientTestimonials.substring(0, 100)}...</p>
                  <h3 className="text-xl font-semibold text-primary mb-2">Success Metrics</h3>
                  <p className="text-foreground">{item.successMetrics}</p>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
}
