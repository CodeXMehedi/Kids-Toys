import React from "react";
import DocumentMeta from "react-document-meta";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Terms = () => {
  const meta = {
    title: "Terms & Conditions | Cats Eye Toy Market",
    description: "Terms & Conditions for using Cats Eye Toy Market website.",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "terms, conditions, toy market"
      }
    }
  };

  return (
    <DocumentMeta {...meta}>
      <div className="min-h-screen bg-white">
        <Navbar></Navbar>
        <main className="w-11/12 lg:w-8/12 mx-auto py-12">
          <h1 className="text-4xl font-bold text-[#B8860B] mb-6">Terms & Conditions</h1>

          <p className="mb-4 text-gray-700">
            Last updated: <strong>{new Date().toLocaleDateString()}</strong>
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">1. Agreement to Terms</h2>
            <p className="text-gray-700">By using this site or ordering, you agree to these Terms & Conditions.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">2. Use of Website</h2>
            <p className="text-gray-700">You must not misuse the site, attempt hacking, or copy content without permission.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">3. Product Information</h2>
            <p className="text-gray-700">We try to show accurate product info. Colors and pricing may vary slightly.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">4. Orders & Payment</h2>
            <p className="text-gray-700">Orders must be paid using supported methods. We reserve the right to cancel suspicious orders.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">5. Shipping & Delivery</h2>
            <p className="text-gray-700">Delivery times vary by location. We are not responsible for delays caused by couriers.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">6. Returns & Refunds</h2>
            <p className="text-gray-700">Returns accepted for defective or wrong items. Change-of-mind returns may not be accepted.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">7. Account Responsibilities</h2>
            <p className="text-gray-700">You are responsible for keeping your account credentials safe.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">8. Limitation of Liability</h2>
            <p className="text-gray-700">We are not liable for indirect or incidental damages. Use the site at your own risk.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">9. Changes to Terms</h2>
            <p className="text-gray-700">We may update these terms. Updated terms will be posted here.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">10. Contact</h2>
            <p className="text-gray-700">For questions: <a className="text-blue-600 underline" href="mailto:legal@toymarket.com">legal@toymarket.com</a></p>
          </section>

          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Cats Eye Toy Market. All rights reserved.</p>
        </main>
        <Footer></Footer>
      </div>
    </DocumentMeta>
  );
};

export default Terms;
