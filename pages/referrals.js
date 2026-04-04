import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const referralPrograms = [
  {
    id: 1,
    name: 'Cashback Kings',
    description: 'Get 10% cashback on every purchase made through your referral link',
    badges: ['💎 Diamond', '👑 Platinum', '🥇 Gold'],
    earnings: '$100+',
    emoji: '💰',
    badge: 'CASHBACK_KING',
    badgeEmoji: '👑',
    link: '#',
  },
  {
    id: 2,
    name: 'Uber Eats Rewards',
    description: 'Earn $15 credit for each friend who signs up and places first order',
    badges: ['🍔 Foodie', '🥗 Healthy Eater', '🍕 Party Master'],
    earnings: '$250+',
    emoji: '🍕',
    badge: 'UBER_EXPERT',
    badgeEmoji: '🎯',
    link: '#',
  },
  {
    id: 3,
    name: 'Airbnb Host Network',
    description: 'Share your property and earn $200 per booking through referral',
    badges: ['✈️ Globetrotter', '🏠 Host Pro', '🌍 Explorer'],
    earnings: '$500+',
    emoji: '✈️',
    badge: 'AIRBNB_HOST',
    badgeEmoji: '🏆',
    link: '#',
  },
  {
    id: 4,
    name: 'Adobe Creator Fund',
    description: 'Refer creative professionals and earn monthly recurring commission',
    badges: ['🎨 Creative', '💻 Pro Designer', '🌟 Master'],
    earnings: '$300+',
    emoji: '🎨',
    badge: 'ADOBE_CREATOR',
    badgeEmoji: '✨',
    link: '#',
  },
  {
    id: 5,
    name: 'Spotify Premium Partners',
    description: 'Earn $2 for each new Premium subscriber from your referral',
    badges: ['🎵 Music Lover', '🎧 Playlist Pro', '🔥 Trending'],
    earnings: '$150+',
    emoji: '🎵',
    badge: 'SPOTIFY_PARTNER',
    badgeEmoji: '🎶',
    link: '#',
  },
  {
    id: 6,
    name: 'Amazon Associate Network',
    description: 'Earn 4-15% commission on every purchase through your unique link',
    badges: ['📦 Seller', '🛒 Commerce Expert', '💼 Business'],
    earnings: '$1000+',
    emoji: '📦',
    badge: 'AMAZON_ASSOCIATE',
    badgeEmoji: '💎',
    link: '#',
  },
];

export default function Referrals() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [earnedBadges, setEarnedBadges] = useState([]);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const earnBadge = (badgeId) => {
    if (!earnedBadges.includes(badgeId)) {
      setEarnedBadges([...earnedBadges, badgeId]);
    }
  };

  return (
    <>
      <Head>
        <title>Referral Programs - Kupon</title>
        <meta name="description" content="Earn rewards by referring friends to amazing deals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                <Link
                  href="/"
                  className="hover:text-purple-100 transition-colors font-medium"
                >
                  Coupons
                </Link>
                <Link
                  href="/referrals"
                  className="text-purple-100 transition-colors font-medium border-b-2 border-purple-300"
                >
                  Referrals
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              Share & Earn Rewards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our referral network and start earning money by sharing Kupon with friends
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$15,000+</div>
              <p className="text-gray-700 font-medium">Total Payouts</p>
              <p className="text-sm text-gray-600 mt-1">To our referral partners</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50K+</div>
              <p className="text-gray-700 font-medium">Active Members</p>
              <p className="text-sm text-gray-600 mt-1">Growing every day</p>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">6 Programs</div>
              <p className="text-gray-700 font-medium">Partner Networks</p>
              <p className="text-sm text-gray-600 mt-1">To choose from</p>
            </div>
          </div>
        </section>

        {/* Referral Programs Grid */}
        <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Featured Referral Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {referralPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-xl border border-gray-200 hover:shadow-xl hover:border-purple-300 transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 text-white flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{program.emoji}</span>
                      <h3 className="text-2xl font-bold">{program.name}</h3>
                    </div>
                    <p className="text-purple-100">{program.description}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Earnings */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Potential Earnings:</p>
                    <p className="text-3xl font-bold text-purple-600">{program.earnings}</p>
                  </div>

                  {/* Badges */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 font-medium mb-3">
                      Earn These Badges:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {program.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleCard(program.id)}
                    className="w-full mb-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
                  >
                    {expandedCard === program.id ? '▼ Hide Details' : '▶ Show Details'}
                  </button>

                  {/* Expanded Details */}
                  {expandedCard === program.id && (
                    <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-slideUp">
                      <h4 className="font-bold text-gray-900 mb-2">How It Works:</h4>
                      <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                        <li>Get your unique referral link</li>
                        <li>Share with friends & social media</li>
                        <li>Earn rewards for each signup</li>
                        <li>Unlock badges & exclusive perks</li>
                      </ol>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={program.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors"
                    >
                      Join Program
                    </a>
                    <button
                      onClick={() => earnBadge(program.badge)}
                      className={`flex-1 font-semibold py-2 px-4 rounded-lg transition-colors ${
                        earnedBadges.includes(program.badge)
                          ? 'bg-green-500 text-white'
                          : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                      }`}
                    >
                      {earnedBadges.includes(program.badge) ? '✓ Badge' : 'Earn Badge'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Earned Badges Display */}
        {earnedBadges.length > 0 && (
          <section className="bg-gradient-to-r from-yellow-50 to-orange-50 py-12 sm:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                🏆 Your Earned Badges
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {referralPrograms
                  .filter((p) => earnedBadges.includes(p.badge))
                  .map((program) => (
                    <div
                      key={program.badge}
                      className="bg-white rounded-xl p-6 shadow-lg border-2 border-yellow-300 animate-slideUp"
                    >
                      <div className="text-5xl mb-2 text-center">{program.badgeEmoji}</div>
                      <p className="font-bold text-gray-900 text-center mb-1">
                        {program.name}
                      </p>
                      <p className="text-xs text-gray-600 text-center">Badge Unlocked!</p>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        )}

        {/* How It Works Section */}
        <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Maximize Your Earnings
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Sign Up',
                description: 'Create your free Kupon account and choose your referral programs',
              },
              {
                step: '2',
                title: 'Share Your Link',
                description: 'Share your unique referral link on social media or with friends',
              },
              {
                step: '3',
                title: 'Track Earnings',
                description: 'Monitor clicks, signups, and earnings in your dashboard',
              },
              {
                step: '4',
                title: 'Get Paid',
                description: 'Reach payout threshold and receive rewards to your account',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'When do I get paid?',
                  a: 'Payments are processed monthly once you reach the $50 minimum. Payouts go to your registered PayPal or bank account.',
                },
                {
                  q: 'Is there a limit to how much I can earn?',
                  a: 'No! There\'s no earning limit. The more friends you refer, the more you earn. Top referrers make $1000+ monthly.',
                },
                {
                  q: 'Can I refer family members?',
                  a: 'Yes, but they must make independent purchase decisions. Artificial referral inflation violates our terms.',
                },
                {
                  q: 'How do I track my referrals?',
                  a: 'Your dashboard shows real-time tracking of clicks, signups, conversions, and earnings for each program.',
                },
                {
                  q: 'What if my referral completes a return?',
                  a: 'Commissions on returned items are reversed. You keep credits from completed purchases only.',
                },
                {
                  q: 'Are there any restrictions?',
                  a: 'We prohibit spam, paid ads without disclosure, and deceptive practices. Marketing through social media is encouraged!',
                },
              ].map((item, idx) => (
                <details
                  key={idx}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:border-purple-300 transition-colors cursor-pointer"
                >
                  <summary className="font-bold text-gray-900 flex justify-between items-center">
                    {item.q}
                    <span className="text-purple-600">+</span>
                  </summary>
                  <p className="text-gray-600 mt-3">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-lg text-purple-100 mb-8">
              Join thousands of partners earning passive income with Kupon
            </p>
            <button className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-purple-50 transition-colors">
              Get Started Today →
            </button>
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
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Partners</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Partner Portal</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Agreement</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Follow</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2026 Kupon Referral Network. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
