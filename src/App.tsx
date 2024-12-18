import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TweetGrid } from './components/TweetGrid';
import { Contact } from './pages/Contact';
import { useTwitterWidget } from './hooks/useTwitterWidget';
import { ThemeProvider } from './contexts/ThemeContext';
import { WOXSEN_TWEETS } from './config/constants';

function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Updates</h2>
        <div className="h-1 w-24 theme-gradient rounded-full"></div>
      </div>
      <TweetGrid tweets={WOXSEN_TWEETS} />
    </main>
  );
}

function App() {
  useTwitterWidget();

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;