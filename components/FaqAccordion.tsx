'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

/** Accessible, keyboard-operable FAQ accordion. Pair with `faqSchema()` for AEO. */
export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-divider border-y border-divider">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`
        const buttonId = `faq-button-${index}`
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-main text-base sm:text-lg not-italic font-semibold">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 shrink-0 text-accent transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="brand-body text-secondary text-sm pb-5 pr-8"
            >
              {item.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}
