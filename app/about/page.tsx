'use client';

import AboutHero from './AboutHero';
import CompanyHistory from './CompanyHistory';
import TeamSection from './TeamSection';
import QualityStandards from './QualityStandards';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Navigation />
      <AboutHero />
      <CompanyHistory />
      <TeamSection />
      <QualityStandards />
      <Footer />
    </div>
  );
}