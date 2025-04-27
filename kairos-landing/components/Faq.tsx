const faqData = [
  {
    question: "How do I create an account?",
    answer:
      "To create an account, click on the 'Get started' button in the top right corner of our homepage. Fill in your details including your name, email address, and password. Once submitted, you'll receive a confirmation email to verify your account.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For enterprise customers, we also offer invoicing options with net-30 payment terms.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time from your account settings. Once cancelled, you'll continue to have access to your account until the end of your current billing period. We don't offer refunds for partial months.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Our customer support team is available 24/7. You can reach us via email at support@example.com, through the live chat on our website, or by phone at +1 (555) 123-4567. We typically respond to all inquiries within 2 hours.",
  },
  {
    question: "Is my data secure with your service?",
    answer:
      "Absolutely. We use industry-standard encryption and security practices to protect your data. All information is stored on secure servers with regular backups. We never share your personal information with third parties without your explicit consent.",
  },
];

import Faq_client from "./Client_Comp/Faq_client";

function Faq() {
  return (
    <div className="mx-3 md:px-12 py-12 max-w-7xl">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>
      <Faq_client farData={faqData} />
    </div>
  );
}

export default Faq;
