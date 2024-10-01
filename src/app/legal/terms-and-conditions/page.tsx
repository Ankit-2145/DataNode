import React from "react";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="w-full dark:bg-black dark:bg-dot-white/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mt-14 bg-black shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-100 mb-6">
              Terms and Conditions
            </h1>
            <p className="text-sm text-gray-100 mb-4">
              Last updated: October 01, 2024
            </p>
            <p className="text-gray-100 mb-6">
              Please read these terms and conditions carefully before using Our
              Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-100 mt-8 mb-4">
              Interpretation and Definitions
            </h2>
            <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-2">
              Interpretation
            </h3>
            <p className="text-gray-100 mb-4">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>

            <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-2">
              Definitions
            </h3>
            <p className="text-gray-100 mb-4">
              For the purposes of these Terms and Conditions:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-100">
              <li className="mb-2">
                <strong>Affiliate</strong> means an entity that controls, is
                controlled by or is under common control with a party, where
                &quot;control&quot; means ownership of 50% or more of the
                shares, equity interest or other securities entitled to vote for
                election of directors or other managing authority.
              </li>
              <li className="mb-2">
                <strong>Country</strong> refers to: Himachal Pradesh, India
              </li>
              <li className="mb-2">
                <strong>Company</strong> (referred to as either &quot;the
                Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;
                in this Agreement) refers to DataNode.
              </li>
              <li className="mb-2">
                <strong>Device</strong> means any device that can access the
                Service such as a computer, a cellphone or a digital tablet.
              </li>
              <li className="mb-2">
                <strong>Service</strong> refers to the Website.
              </li>
              <li className="mb-2">
                <strong>Terms and Conditions</strong> (also referred as
                &quot;Terms&quot;) mean these Terms and Conditions that form the
                entire agreement between You and the Company regarding the use
                of the Service. This Terms and Conditions agreement has been
                created with the help of the{" "}
                <Link
                  href="https://www.termsfeed.com/terms-conditions-generator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Terms and Conditions Generator
                </Link>
                .
              </li>
              <li className="mb-2">
                <strong>Third-party Social Media Service</strong> means any
                services or content (including data, information, products or
                services) provided by a third-party that may be displayed,
                included or made available by the Service.
              </li>
              <li className="mb-2">
                <strong>Website</strong> refers to DataNode, accessible from{" "}
                <Link
                  href="https://www.data-node.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://www.data-node.vercel.app
                </Link>
              </li>
              <li className="mb-2">
                <strong>You</strong> means the individual accessing or using the
                Service, or the company, or other legal entity on behalf of
                which such individual is accessing or using the Service, as
                applicable.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-100 mt-8 mb-4">
              Acknowledgment
            </h2>
            <p className="text-gray-100 mb-4">
              These are the Terms and Conditions governing the use of this
              Service and the agreement that operates between You and the
              Company. These Terms and Conditions set out the rights and
              obligations of all users regarding the use of the Service.
            </p>
            <p className="text-gray-100 mb-4">
              Your access to and use of the Service is conditioned on Your
              acceptance of and compliance with these Terms and Conditions.
              These Terms and Conditions apply to all visitors, users and others
              who access or use the Service.
            </p>
            <p className="text-gray-100 mb-4">
              By accessing or using the Service You agree to be bound by these
              Terms and Conditions. If You disagree with any part of these Terms
              and Conditions then You may not access the Service.
            </p>
            <p className="text-gray-100 mb-4">
              Your access to and use of the Service is also conditioned on Your
              acceptance of and compliance with the Privacy Policy of the
              Company. Our Privacy Policy describes Our policies and procedures
              on the collection, use and disclosure of Your personal information
              when You use the Application or the Website and tells You about
              Your privacy rights and how the law protects You. Please read Our
              Privacy Policy carefully before using Our Service.
            </p>

            {/* Additional sections would be added here following the same pattern */}

            <h2 className="text-2xl font-semibold text-gray-100 mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-100 mb-4">
              If you have any questions about these Terms and Conditions, You
              can contact us:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-100">
              <li>By email: contact@datanode.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
