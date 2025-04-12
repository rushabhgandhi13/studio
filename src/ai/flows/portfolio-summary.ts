'use server';
/**
 * @fileOverview A portfolio item summarization AI agent.
 *
 * - portfolioSummary - A function that handles the portfolio item summarization process.
 * - PortfolioSummaryInput - The input type for the portfolioSummary function.
 * - PortfolioSummaryOutput - The return type for the portfolioSummary function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const PortfolioSummaryInputSchema = z.object({
  projectDetails: z.string().describe('Detailed description of the project.'),
  technologiesUsed: z.string().describe('List of technologies used in the project.'),
  clientTestimonials: z.string().describe('Client testimonials about the project.'),
  successMetrics: z.string().describe('Data on project success metrics and achievements.'),
});
export type PortfolioSummaryInput = z.infer<typeof PortfolioSummaryInputSchema>;

const PortfolioSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the project, highlighting key achievements and client satisfaction.'),
});
export type PortfolioSummaryOutput = z.infer<typeof PortfolioSummaryOutputSchema>;

export async function portfolioSummary(input: PortfolioSummaryInput): Promise<PortfolioSummaryOutput> {
  return portfolioSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioSummaryPrompt',
  input: {
    schema: z.object({
      projectDetails: z.string().describe('Detailed description of the project.'),
      technologiesUsed: z.string().describe('List of technologies used in the project.'),
      clientTestimonials: z.string().describe('Client testimonials about the project.'),
      successMetrics: z.string().describe('Data on project success metrics and achievements.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A concise summary of the project, highlighting key achievements and client satisfaction.'),
    }),
  },
  prompt: `You are an AI expert specializing in summarizing portfolio items for a tech company called Thinknexus.

You will use the following information to generate a concise summary of the project, highlighting key achievements and client satisfaction metrics.

Project Details: {{{projectDetails}}}
Technologies Used: {{{technologiesUsed}}}
Client Testimonials: {{{clientTestimonials}}}
Success Metrics: {{{successMetrics}}}

Generate a summary that is no more than 150 words.
`,
});

const portfolioSummaryFlow = ai.defineFlow<
  typeof PortfolioSummaryInputSchema,
  typeof PortfolioSummaryOutputSchema
>({
  name: 'portfolioSummaryFlow',
  inputSchema: PortfolioSummaryInputSchema,
  outputSchema: PortfolioSummaryOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
