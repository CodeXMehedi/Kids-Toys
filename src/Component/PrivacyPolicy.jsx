import React from "react";
import DocumentMeta from "react-document-meta";
import Navbar from "./Navbar";
import Footer from "./Footer";


const PrivacyPolicy = () => {
  const meta = {
    title: "Privacy Policy | Cats Eye Toy Market",
    description: "Privacy Policy for Cats Eye Toy Market. How we collect, use and protect your data.",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "privacy, data protection, toy market"
      }
    }
  };

  return (
    <DocumentMeta {...meta}>
      <div className="min-h-screen bg-white">
        <Navbar></Navbar>
        <main className="w-11/12 lg:w-8/12 mx-auto py-12">
          <h1 className="text-4xl font-bold text-[#B8860B] mb-6">Privacy Policy</h1>

          <p className="mb-4 text-gray-700">
            Last updated: <strong>{new Date().toLocaleDateString()}</strong>
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p className="text-gray-700">
              Welcome to <strong>Cats Eye Toy Market</strong>. We are committed to protecting your
              personal information and your right to privacy. This policy explains how we collect,
              use, share and protect your personal information when you use our website.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Personal Information:</strong> name, email, phone, shipping address, account details.</li>
              <li><strong>Payment Information:</strong> card or payment details are processed by third-party gateways.</li>
              <li><strong>Automatic Info:</strong> IP address, browser type, device info, cookies, usage data.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
            <p className="text-gray-700">
              We use your data to process orders, manage your account, send notifications, improve our
              service, prevent fraud and provide customer support. We do not sell your personal data.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">4. Cookies & Tracking</h2>
            <p className="text-gray-700">
              We use cookies to keep items in your cart, remember login sessions and gather anonymous
              analytics. You can disable cookies in your browser, but some functionality may break.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">5. Sharing Your Data</h2>
            <p className="text-gray-700">
              We share information only with necessary third parties: payment processors, delivery partners
              and analytics providers. These partners follow strict security requirements.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">6. Data Security</h2>
            <p className="text-gray-700">
              We use SSL encryption and secure servers. While we take reasonable measures to protect your data,
              no online service is 100% secure.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">7. Children’s Privacy</h2>
            <p className="text-gray-700">
              Our site is family-friendly. Accounts are not intended for children under 13 without parental consent.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">8. Your Rights</h2>
            <p className="text-gray-700">
              You can request access, correction, or deletion of your personal data. You may also unsubscribe from
              marketing communications at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
            <p className="text-gray-700">
              For privacy questions: <a className="text-blue-600 underline" href="mailto:support@toymarket.com">support-catseye@toymarket.com</a>
            </p>
          </section>

          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Cats Eye Toy Market. All rights reserved.</p>
        </main>
        <Footer></Footer>
      </div>
    </DocumentMeta>
  );
};

export default PrivacyPolicy;
