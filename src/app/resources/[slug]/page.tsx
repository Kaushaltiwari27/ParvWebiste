import { resourcesData } from "@/data/pages";
import DynamicPageTemplate from "@/components/DynamicPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = resourcesData[params.slug];
  if (!data) return {};
  return {
    title: `${data.title} | ParvInfoSoft Resources`,
    description: data.description,
  };
}

export function generateStaticParams() {
  return Object.keys(resourcesData).map((slug) => ({
    slug,
  }));
}

export default function ResourcesPage({ params }: { params: { slug: string } }) {
  const data = resourcesData[params.slug];
  
  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <DynamicPageTemplate data={data} category="Resources" />
      <Footer />
    </>
  );
}
