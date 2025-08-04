"use client";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FaqItem[] = [
  {
    question: "When will my order be shipped?",
    answer: (
      <p>
        Our shipping time is between 10–50 business days, not exceeding 50
        business days. Thank you for your patience and understanding.
      </p>
    ),
  },
  {
    question: "How much shipping and customs duties do I need to pay?",
    answer: (
      <>
        <p>
          You can check the shipping amount you need to pay on the checkout
          page.
        </p>
        <p>
          You don`t need to pay customs duties at checkout, but customs duties
          may be incurred along the way, depending on your local customs policy,
          which we cannot determine.
        </p>
      </>
    ),
  },
  {
    question: "Can it be delivered to my country?",
    answer: (
      <p>
        We can deliver to most countries. You can check if your country is
        included on the checkout page.
      </p>
    ),
  },
  {
    question: "How do I track my order?",
    answer: (
      <p>
        You can track your order using the tracking link sent to your email
        after the package is shipped. If you haven`t received one, please check
        your spam folder or contact us directly.
      </p>
    ),
  },
  {
    question: "Can I change or cancel my order?",
    answer: (
      <p>
        If your order hasn`t been shipped yet, you can contact us to modify or
        cancel it. Once shipped, cancellations or changes are not possible.
      </p>
    ),
  },
  {
    question: "Do you offer returns or exchanges?",
    answer: (
      <p>
        Yes, we accept returns and exchanges within 14 days of delivery,
        provided the item is unused and in its original condition. Please read
        our Return Policy page for full details.
      </p>
    ),
  },
];

export default function FaqSection() {
  return (
    <section className=" bg-white">
      <h1 className="text-2xl font-bold border border-gray-400  rounded">
        Frequently Asked Questions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-gray-200">
            <details className="group">
              <summary className="font-medium cursor-pointer px-4 py-3 list-none marker:content-['▶'] group-open:marker:content-['▼']">
                {item.question}
              </summary>
              <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
            </details>
          </div>
        ))}
      </div>
      <div className="text-center border border-gray-400 rounded px-4 py-3">
        <a
          href="/pages/frequently-asked-questions"
          className="inline text-xl font-medium hover:text-gray-600 hover:underline transition"
        >
          View all FAQ
        </a>
      </div>
    </section>
  );
}
