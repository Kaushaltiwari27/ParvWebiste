import { solutionsData } from "@/data/pages";
import DynamicPageTemplate from "@/components/DynamicPageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = solutionsData[params.slug];
  if (!data) return {};
  return {
    title: `${data.title} | ParvInfoSoft Solutions`,
    description: data.description,
  };
}

export function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({
    slug,
  }));
}

export default function SolutionsPage({ params }: { params: { slug: string } }) {
  const data = solutionsData[params.slug];
  
  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <DynamicPageTemplate data={data} category="Solutions" />
      <Footer />
    </>
  );
}
