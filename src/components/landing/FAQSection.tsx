'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqItems = [
        {
            question: "How does Twenlo discover profitable startup ideas?",
            answer: "Twenlo uses advanced AI to analyze millions of Reddit discussions, identifying real pain points and unmet needs. We then transform these insights into validated startup opportunities with comprehensive market data to support each idea."
        },
        {
            question: "What makes these ideas different from random brainstorming?",
            answer: "Unlike traditional brainstorming, every idea from Twenlo is backed by real customer conversations and market validation. We provide actual quotes from users expressing their problems, along with market size, competition analysis, and demand metrics."
        },
        {
            question: "How do I navigate from broad markets to specific niches?",
            answer: "Our Interactive Market Explorer lets you start with broad categories like 'fitness' or 'productivity' and drill down through sub-markets and micro-niches. Each level provides real-time metrics on competition, volume, and market potential."
        },
        {
            question: "Can I generate multiple ideas for the same market?",
            answer: "Absolutely! Once you find a promising market or niche, you can generate 5, 10, or 15 different startup ideas tailored to that specific market. Each idea comes with supporting data and user pain points."
        },
        {
            question: "How current is the Reddit discussion data?",
            answer: "Our AI continuously monitors Reddit discussions 24/7, updating our database with new pain points and market opportunities in real-time. You're seeing the latest conversations and emerging trends as they happen."
        },
        {
            question: "What if I want to explore markets outside my expertise?",
            answer: "That's one of Twenlo's strengths! Our platform covers hundreds of markets and industries. You can safely explore completely new territories with data-backed insights, making it perfect for discovering opportunities you might never have considered."
        }
    ]

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        Everything you need to know about discovering startup ideas with Twenlo
                    </p>
                </div>

                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="bg-muted/30 rounded-lg overflow-hidden hover:bg-muted/40 transition-all duration-300">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center transition-colors duration-200"
                            >
                                <span className="font-semibold pr-4">{item.question}</span>
                                <div className="flex-shrink-0">
                                    {openFaq === index ? (
                                        <ChevronUp className="h-5 w-5 text-primary" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                                    )}
                                </div>
                            </button>
                            {openFaq === index && (
                                <div className="px-6 pb-4 border-t border-border/50">
                                    <p className="text-muted-foreground leading-relaxed pt-3 text-sm">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}