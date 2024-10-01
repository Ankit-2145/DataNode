import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="w-full dark:bg-black dark:bg-dot-white/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mt-14 bg-black shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-100 mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-100 mb-4">
              Last updated: October 01, 2024
            </p>
            <p className="text-gray-100 mb-6">
              At DataNode, we are committed to protecting your privacy. This
              privacy policy outlines how we collect, use, and protect your
              personal information when you interact with our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-100 mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-100 mb-4">
              We collect personal data when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-100">
              <li>Register on our website (name, email, etc.).</li>
              <li>Use our website (IP address, device information, etc.).</li>
              <li>
                Voluntarily provide information (surveys, support requests).
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-100 mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-100 mb-4">We use the information to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-100">
              <li>Improve user experience and site functionality.</li>
              <li>Provide customer support.</li>
              <li>Communicate with you (e.g., newsletters).</li>
              <li>Analyze website traffic through cookies.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-100 mt-8 mb-4">
              3. Third-Party Services
            </h2>
            <p className="text-gray-100 mb-4">
              We may share your information with third-party services like:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-100">
              <li>Google Analytics for tracking user behavior.</li>
              <li>
                Payment processors (for financial transactions, if applicable).
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-100 mt-8 mb-4">
              4. Cookies
            </h2>
            <p className="text-gray-100 mb-4">
              DataNode uses cookies to enhance user experience. You may accept
              or refuse cookies by adjusting your browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-gray-100 mt-8 mb-4">
              5. Data Retention
            </h2>
            <p className="text-gray-100 mb-4">
              We retain personal data only as long as necessary to fulfill the
              purposes described. You can request deletion at any time.
            </p>

            <h2 className="text-2xl font-semibold text-gray-100 mt-8 mb-4">
              6. Data Protection
            </h2>
            <p className="text-gray-100 mb-4">
              We employ encryption, secure servers, and regular audits to
              safeguard your data.
            </p>

            <h2 className="text-2xl font-semibold text-gray-100 mt-8 mb-4">
              7. Your Rights
            </h2>
            <p className="text-gray-100 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-100">
              <li>Access your data.</li>
              <li>Request corrections or deletions.</li>
              <li>Withdraw consent.</li>
            </ul>
            <p className="text-gray-100 mb-4">
              To exercise your rights, contact us at{" "}
              <Link
                href="mailto:privacy@datanode.com"
                className="text-blue-600 hover:underline"
              >
                privacy@datanode.com
              </Link>
              .
            </p>

            <h2 className="text-2xl font-semibold text-gray-100 mt-8 mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-100 mb-4">
              We may update this policy occasionally. Significant changes will
              be communicated through email or our website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-100 mt-8 mb-4">
              9. Contact Us
            </h2>
            <p className="text-gray-100 mb-4">
              For questions regarding this policy, please contact:
            </p>
            <p className="text-gray-100">
              Email:{" "}
              <Link
                href="mailto:privacy@datanode.com"
                className="text-blue-600 hover:underline"
              >
                contact@datanode.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
