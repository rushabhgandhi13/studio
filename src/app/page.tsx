'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {portfolioSummary} from '@/ai/flows/portfolio-summary';
import {useEffect, useState} from 'react';

interface PortfolioItem {
  title: string;
  projectDetails: string;
  technologiesUsed: string;
  clientTestimonials: string;
  successMetrics: string;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'AI-Powered Healthcare Platform',
    projectDetails:
      'Developed an AI-powered platform to improve patient outcomes and reduce healthcare costs. The platform uses machine learning algorithms to analyze patient data and provide personalized treatment recommendations.',
    technologiesUsed: 'Python, TensorFlow, React, Node.js',
    clientTestimonials:
      'The AI-powered platform has significantly improved our patient outcomes and reduced our healthcare costs.',
    successMetrics: 'Improved patient outcomes by 30% and reduced healthcare costs by 20%.',
    imageUrl: 'https://picsum.photos/id/237/400/300',
  },
  {
    title: 'Smart City Transportation System',
    projectDetails:
      'Designed and implemented a smart city transportation system that uses AI to optimize traffic flow and reduce congestion. The system uses real-time data to adjust traffic signals and provide commuters with personalized route recommendations.',
    technologiesUsed: 'Java, Spring Boot, Angular, PostgreSQL',
    clientTestimonials:
      'The smart city transportation system has significantly reduced traffic congestion and improved the overall quality of life for our residents.',
    successMetrics: 'Reduced traffic congestion by 40% and improved commuter satisfaction by 25%.',
    imageUrl: 'https://picsum.photos/id/239/400/300',
  },
  {
    title: 'AI-Driven E-Commerce Recommendation Engine',
    projectDetails:
      'Developed an AI-driven recommendation engine to provide personalized product recommendations to e-commerce customers. The engine uses machine learning algorithms to analyze customer behavior and provide relevant product suggestions.',
    technologiesUsed: 'Python, scikit-learn, Flask, MongoDB',
    clientTestimonials:
      'The AI-driven recommendation engine has significantly increased our sales and improved customer satisfaction.',
    successMetrics: 'Increased sales by 35% and improved customer satisfaction by 30%.',
    imageUrl: 'https://picsum.photos/id/246/400/300',
  },
];

async function summarizePortfolioItem(item: PortfolioItem) {
  try {
    const summary = await portfolioSummary({
      projectDetails: item.projectDetails,
      technologiesUsed: item.technologiesUsed,
      clientTestimonials: item.clientTestimonials,
      successMetrics: item.successMetrics,
    });
    return summary?.summary || 'Summary not available.';
  } catch (error) {
    console.error('Failed to generate summary:', error);
    return 'Summary not available.';
  }
}

export default function Home() {
  const [summaries, setSummaries] = useState<{[key: string]: string}>({});

  useEffect(() => {
    async function generateSummaries() {
      const summaryMap: {[key: string]: string} = {};
      for (const item of portfolioItems) {
        summaryMap[item.title] = await summarizePortfolioItem(item);
      }
      setSummaries(summaryMap);
    }

    generateSummaries();
  }, []);

  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-primary mb-4">
          Transforming Ideas into Intelligent Solutions
        </h1>
        <p className="text-lg text-foreground mb-8">
          We are Thinknexus, an AI-powered product development and software outsourcing company.
          Our mission is to transform your ideas into reality through cutting-edge technology and innovative
          solutions.
        </p>
        <Button className="bg-accent text-background hover:bg-accent-foreground">Explore Our Services</Button>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="rounded-md w-full h-48 object-cover mb-4"
                />
                <CardDescription>{item.projectDetails.substring(0, 100)}...</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-primary mb-2">Summary</h3>
                <p className="text-foreground mb-4">{summaries[item.title] || 'Loading summary...'}</p>
                <Button className="bg-accent text-background hover:bg-accent-foreground">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4">Ready to bring your vision to life?</h2>
        <p className="text-foreground mb-8">
          Contact us today to discover how Thinknexus can help you leverage the power of AI for your next
          project.
        </p>
        <Button className="bg-accent text-background hover:bg-accent-foreground">Get in Touch</Button>
      </section>
    </div>
  );
}
