import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { coupons } from './api/coupons';

const categories = [
  { name: 'Food', emoji: '🍔' },
  { name: 'Shopping', emoji: '🛍️' },
  { name: 'Travel', emoji: '✈️' },
  { name: 'Tech', emoji: '💻' },
  { name: 'Fashion', emoji: '👕' },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedCode, setCopiedCode] = useState(null);

  const filteredCoupons = useMemo(() => {
    return coupons.filter((coupon) => {
      const matchesSearch =
        coupon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coupon.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coupon.code.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || coupon.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <>
      <Head>
        <title>Kupon - Best Coupons & Deals</title>
        <meta name="description" content="Discover amazing coupons and save more on your favorite brands" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                ✨ Kupon
              </h1>
              <nav className="hidden sm:flex gap-6">
                <a
                  href="/"
                  className="hover:text-purple-100 transition-colors font-medium"
                >
                  Coupons
                </a>
                <a
                  href="/referrals"
                  className="hover:text-purple-100 transition-colors font-medium"
                >
                  Referrals
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 animate-slideUp">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                Save Big on Everything
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Discover verified coupons and exclusive deals from your favorite brands
              </p>

              {/* Search Bar */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-2xl relative">
                  <input
                    type="text"
                    placeholder="Search coupons, brands, or codes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-transparent shadow-md focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition-all"
                  />
                  <span className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 text-gray-400">
                    🔍
                  </span>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === cat.name
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Coupons Grid */}
        <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600 text-sm sm:text-base">
              Showing <span className="font-bold text-purple-600">{filteredCoupons.length}</span> coupons
            </p>
          </div>

          {filteredCoupons.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredCoupons.map((coupon, index) => (
                <div
                  key={coupon.id}
                  className="bg-white rounded-xl border border-gray-200 hover:shadow-xl hover:border-purple-300 transition-all duration-300 overflow-hidden animate-fadeIn"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 text-white">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{coupon.name}</h3>
                        <p className="text-sm text-purple-100">{coupon.description}</p>
                      </div>
                      <span className="text-2xl flex-shrink-0">
                        {categories.find((c) => c.name === coupon.category)?.emoji || '🎯'}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4">
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        {coupon.discount}
                      </div>
                      <p className="text-xs text-gray-500">
                        Expires: {new Date(coupon.expiry).toLocaleDateString()}
                      </p>
                    </div>

                    {/* Code Section */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-xs text-gray-600 mb-1">Code:</p>
                      <div className="flex items-center justify-between">
                        <code className="font-mono font-bold text-gray-900">
                          {coupon.code}
                        </code>
                        <button
                          onClick={() => copyToClipboard(coupon.code)}
                          className={`ml-2 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                            copiedCode === coupon.code
                              ? 'bg-green-500 text-white'
                              : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                          }`}
                        >
                          {copiedCode === coupon.code ? '✓ Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={coupon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors"
                    >
                      Get Offer →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">
                😔 No coupons found for "{searchQuery}"{' '}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* Referral Highlights */}
        <section className="bg-gradient-to-r from-purple-100 to-indigo-100 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                💰 Earn with Referrals
              </h2>
              <p className="text-gray-600">
                Share Kupon with friends and earn rewards
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <span className="text-4xl mb-3 inline-block">🎁</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Invite Friends</h3>
                <p className="text-gray-600">Share your unique referral link</p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <span className="text-4xl mb-3 inline-block">💸</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Earn Rewards</h3>
                <p className="text-gray-600">Get $5 for each friend who signs up</p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <span className="text-4xl mb-3 inline-block">🏆</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Unlock Badges</h3>
                <p className="text-gray-600">Earn exclusive badges & perks</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/referrals"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Explore Referral Programs →
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 sm:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-4">About</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Follow</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2026 Kupon. All rights reserved. Built with ✨ for savvy shoppers.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
