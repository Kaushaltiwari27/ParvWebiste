import { trainingData } from "@/data/pages";
import DynamicPageTemplate from "@/components/DynamicPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = trainingData[params.slug];
  if (!data) return {};
  return {
    title: `${data.title} | ParvInfoSoft Training`,
    description: data.description,
  };
}

export function generateStaticParams() {
  return Object.keys(trainingData).map((slug) => ({
    slug,
  }));
}

export default function TrainingPage({ params }: { params: { slug: string } }) {
  const data = trainingData[params.slug];
  
  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <DynamicPageTemplate data={data} category="Training" />
      <Footer />
    </>
  );
}
