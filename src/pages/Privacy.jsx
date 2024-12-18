import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  FaBuilding,
  FaCookieBite,
  FaDatabase,
  FaFlagUsa,
} from "react-icons/fa6";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      {/* 
      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-12 md:text-start text-center">
              <div className=" text-4xl font-bold text-center">
                <h1>LM Club Privacy Statement</h1>
              </div>

              <div className="space-y-2 text-[#2b2a35] font-light mt-8 text-center">
                <p>Last Updated: October 10, 2024 (Version 0.0.1)</p>
                <p>
                  This privacy policy informs you about LM Club's data
                  processing.
                </p>
              </div>

              <div className="mt-8 font-semibold text-xl">
                <h1>1. General Information regarding Privacy Policy</h1>
              </div>

              <div className=" text-[#2ba35] font-light">
                <p className="mt-4">
                  The Laoe Maom Group LLC – Corporate and each of our
                  subsidiaries and affiliated entities under common ownership
                  and control (collectively, “LM Club” or “we” or “us”) respects
                  your privacy and the information that you have entrusted to
                  us. This Privacy Policy describes our collection, use and
                  disclosure of the information we may collect from you whenever
                  you visit the LM Clubs physical location(s) or website(s)
                  (hereinafter a “Site” and collectively the “Sites”), or
                  otherwise access any of our other products, services, and
                  content (hereinafter “Services”).
                </p>
                <p className="mt-4">
                  This Privacy Policy applies to all visitors and members of our
                  Sites, including those businesses and/or members who apply for
                  and/or receive services for personal, family or household
                  purposes. If you become an inactive member, or if we close or
                  suspend your account, we will continue to adhere to the
                  Privacy Policy in place when we collected your personal
                  information as long as we retain it in our databases.
                </p>
                <p className="mt-4">
                  We may delete any or all of your information at any time
                  without notice to you or for any reason or no reason unless we
                  are otherwise required by law or retain it. You may have other
                  privacy protections under state laws and we will comply with
                  any applicable state laws when we disclose information about
                  you.
                </p>
                <p className="mt-4">
                  For more information, contact us at{" "}
                  <a
                    href="mailto: support@lmclub.com"
                    className="text-blue-500 underline"
                  >
                    support@lmclub.com
                  </a>
                </p>
              </div>

              <div className=" mt-8 flex justify-center items-center">
                <button
                  onClick={() => navigate("/consumer-privacy")}
                  class="bg-mainColor transition font-medium duration-1000 ease-in-out text-white shadow py-2 px-4 rounded-full"
                >
                  View Full Privacy Notice
                </button>
              </div>

              <div className="mt-8 font-semibold text-xl">
                <h1>
                  2. Categories of Personal Information Collected in the
                  preceding 12 months
                </h1>
              </div>

              <div className="md:mx-8 mx-6 mt-4">
                <ul className="list-disc space-y-2 text-[#2ba35] font-light">
                  <li>
                    Audio/Video/Visual such as photographs, recorded calls,
                    voicemails, and video.
                  </li>
                  <li>Biometric such as fingerprints.</li>
                  <li>
                    Commercial such as vehicles, products, services, and repairs
                    purchased, obtained or considered; personal property records
                    (e.g., vehicle titles and registration cards); or other
                    purchasing or consuming histories or tendencies.
                  </li>
                  <li>
                    Customer Records such as digital and electronic signatures,
                    telephone numbers, insurance policy numbers, credit and
                    debit card numbers, financial and credit-related
                    information, physical characteristics and descriptions
                    (e.g., government identification), bank account numbers, and
                    medical and health insurance information (in the context of
                    employment).
                  </li>
                  <li>
                    Education such as diplomas and transcripts for student
                    rebate eligibility.
                  </li>
                  <li>
                    Geolocation such as tracking and user-enabled location
                    identification.
                  </li>
                  <li>
                    Identifiers such as real name, postal address, IP address,
                    email address, SSN, driver’s license number, passport
                    number, cookies, pixel tags, and similar identifiers.
                  </li>
                  <li>
                    Inferences to create a profile about you reflecting your
                    product or vehicle preferences, purchasing tendencies and
                    behaviors.
                  </li>
                  <li>
                    Internet Activity such as interactions with our websites,
                    applications, and advertisements.
                  </li>
                  <li>
                    Professional/Employment such as job title, occupation,
                    company or business name, and employment history
                    information.
                  </li>
                  <li>
                    Protected Classes under state or federal law, such as
                    gender, age, and veteran status.
                  </li>
                </ul>
              </div>

              <div className="mt-8 font-semibold text-xl">
                <h1>
                  3. Categories of Sources from which the Personal Information
                  is Collected
                </h1>
              </div>

              <div className="md:mx-8 mx-6 mt-4">
                <ul className="list-disc space-y-2 text-[#2ba35] font-light">
                  <li>
                    Advertising Networks & Agencies such as digital advertising
                    companies and other marketing firms.
                  </li>
                  <li>
                    Data Brokers & Analytics Providers such as equity mining,
                    data mining, call tracking, and sales prospecting tools.
                  </li>
                  <li>
                    Directly from Consumers through our website forms and via
                    in-person applications, forms and contracts.
                  </li>
                  <li>
                    Online Lead Providers and third party websites that collect
                    and share data relating to consumers whose product
                    preferences or inquiries align with the offerings of our
                    membership.
                  </li>
                  <li>
                    Social Media Networks such as Facebook, Instagram, and other
                    platforms used to run various advertising campaigns.
                  </li>
                </ul>
              </div>

              <div className="mt-8 font-semibold  text-xl">
                <h1>
                  4. Business or Commercial Purposes for which the Personal
                  Information was Collected or Sold
                </h1>
              </div>

              <div className="md:mx-8 mx-6 mt-4">
                <ul className="list-disc space-y-2  text-[#2ba35] font-light">
                  <li>
                    Advertising & Marketing to send advertisements and marketing
                    material via physical and electronic mail relating to
                    product specials and other promotional events or offers,
                    perform marketing research and data analytics, and perform
                    similar activities.
                  </li>
                  <li>
                    Contextual and Behavioral Targeting to provide contextual
                    customization of ads shown as part of an interaction with
                    our website or application, such as through the use of
                    “first-party” or “session” cookies.
                  </li>
                  <li>
                    Counting Ad Impressions & Website Interactions to audit
                    interactions with our websites, applications, or
                    advertisements, count ad impressions to unique visitors,
                    verify position and quality of ad impressions, and perform
                    similar activities.
                  </li>
                  <li>
                    Customer Service to provide customer service, maintain and
                    service products and accounts, provide training for quality
                    assurance purposes, and perform similar activities.
                  </li>
                  <li>
                    Defending Against Claims & Litigation to defend against or
                    respond to potential or actual claims and litigation,
                    including, but not limited to, those against the membership
                    for a service we have sold.
                  </li>
                  <li>
                    Fraud Prevention to detect security incidents, protect
                    against malicious, deceptive, fraudulent, or illegal
                    activity, and to prosecute those responsible for that
                    activity.
                  </li>
                  <li>
                    Processing Transactions to process or fulfill orders and
                    transactions, verify customer information, process payments.
                  </li>
                </ul>
              </div>

              <div className="mt-8 font-semibold text-xl">
                <h1>5. Disclosure of Personal Data to Third Parties</h1>
              </div>

              <div className="md:mx-8 mx-6 mt-4">
                <ul className="list-disc space-y-2 text-[#2ba35] font-light">
                  <li>
                    Audio/Video/Visual such as photographs, recorded calls,
                    voicemails, and video.
                  </li>
                  <li>Biometric such as fingerprints.</li>
                  <li>
                    Commercial such as vehicles, products, services, and repairs
                    purchased, obtained or considered; personal property records
                    (e.g., vehicle titles and registration cards); or other
                    purchasing or consuming histories or tendencies.
                  </li>
                  <li>
                    Customer Records such as digital and electronic signatures,
                    telephone numbers, insurance policy numbers, credit and
                    debit card numbers, financial and credit-related
                    information, physical characteristics and descriptions
                    (e.g., government identification), bank account numbers, and
                    medical and health insurance information (in the context of
                    employment).
                  </li>
                  <li>
                    Education such as diplomas and transcripts for student
                    rebate eligibility.
                  </li>
                  <li>
                    Geolocation such as tracking and user-enabled location
                    identification.
                  </li>
                  <li>
                    Identifiers such as real name, postal address, IP address,
                    email address, SSN, driver’s license number, passport
                    number, cookies, pixel tags, and similar identifiers.
                  </li>
                  <li>
                    Inferences to create a profile about you reflecting your
                    product or vehicle preferences, purchasing tendencies and
                    behaviors.
                  </li>
                  <li>
                    Internet Activity such as interactions with our websites,
                    applications, and advertisements.
                  </li>
                  <li>
                    Professional/Employment such as job title, occupation,
                    company or business name, and employment history
                    information.
                  </li>
                  <li>
                    Protected Classes under state or federal law, such as
                    gender, age, and veteran status.
                  </li>
                  <li>
                    Software Vendors, Professional Service Companies, Attorneys
                    & Law Firms, Reputation Management Companies, Social Media
                    Networks
                  </li>
                  <li>Professional Service Companies, Attorneys & Law Firms</li>
                  <li>
                    Software Vendors, Professional Service Companies, Attorneys
                    & Law Firms, Auditors & Consultants, Website Providers,
                    Digital Retailers & eCommerce Platforms, Advertising
                    Networks & Marketing Agencies,
                  </li>
                </ul>
              </div>

              <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 pt-8 md:px-2 lg:px-1 px-4">
                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center w-12 h-12 border-2 border-green-100 bg-green-100 rounded-lg">
                          <FaDatabase size={24} className="text-mainColor" />
                        </div>
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-lg font-bold text-center">Requests</h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-700 text-center font-medium">
                        <p>Make a data request</p>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="/consumer-privacy#cookie-use-policy"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center w-12 h-12 border-2 border-green-100 bg-green-100 rounded-lg">
                          <FaCookieBite size={24} className="text-mainColor" />
                        </div>
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-lg font-bold text-center">
                          Cookie Policy
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center font-medium">
                        <p>Read our cookie policy</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center w-12 h-12 border-2 border-green-100 bg-green-100 rounded-lg">
                          <FaBuilding size={24} className="text-mainColor" />
                        </div>
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-lg font-bold text-center">
                          Who we are
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center font-medium">
                        <p>Learn more about us</p>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="/consumer-privacy#california_resident_policy"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center w-12 h-12 border-2 border-green-100 bg-green-100 rounded-lg">
                          <FaFlagUsa size={24} className="text-mainColor" />
                        </div>
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-lg font-bold text-center">
                          California Notices
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center font-medium">
                        <p>Read California Notices.</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-12 md:text-start text-center space-y-6">
              <div className=" text-4xl font-bold text-center text-headingColor">
                <h1>LM Club Privacy Statement</h1>
              </div>

              <div className="space-y-2 text-sideHeading mt-8 text-center">
                <p>Last Updated: October 10, 2024 (Version 0.0.1)</p>
                <p>
                  This privacy policy informs you about LM Club's data
                  processing.
                </p>
              </div>

              <div className="my-4">
                <img
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/privacy_landing_main_2800X1000?scl=1"
                  alt=""
                  className="rounded"
                />
              </div>

              <div className=" text-4xl font-bold text-center text-headingColor pt-8">
                <h1>Discover and control your data</h1>
              </div>

              <div className="space-y-2 text-sideHeading mt-8 text-center">
                <p>
                  Privacy is at the centre of how we build the products and
                  services that customers use every day. See privacy resources
                  and controls below where you can manage your data and how it
                  is used.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-8 md:px-2 lg:px-1 px-4">
                <a
                  href="/privacy-statement"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                         https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/privacy_dashboard_card_809X461?wid=517&hei=291&fit=crop"
                          alt=""
                          className="md:h-52 w-[100%] rounded"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl font-semibold text-center">
                          Visit privacy statement
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          The privacy statement is where you can manage your
                          privacy settings and manage your data for your LM Club
                          account.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="/privacy-report"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                            https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/privacy_account_checkup_card_809X461?wid=517&hei=291&fit=crop"
                          alt=""
                          //   className="md:h-52 md:w-[70%] w-[80%]"
                          className="md:h-52 w-[100%] rounded"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl font-semibold text-center">
                          Account check-up
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          The account check-up wizard is a tool where you can
                          review your account safety settings to strengthen your
                          online security. Do an account check-up
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>
                <a
                  href="/enroll-rewards"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                           https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/privacy_controls_card_809X461?wid=517&hei=291&fit=crop"
                          alt=""
                          className="md:h-52 w-[100%] rounded"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl font-semibold text-center">
                          Find your privacy controls
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Learn how to find your privacy settings and other
                          related information in LM Club products and services.
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>
              </div>

              <div className="grid lg:grid-cols-2 lg:mx-4 gap-6 pt-12 pb-8">
                <div className="flex flex-col gap-4 w-full space-y-2 ">
                  <div className=" flex items-center lg:justify-start justify-center ">
                    <h1 className="xl:text-5xl text-4xl font-semibold text-headingColor lg:text-start text-center">
                      Explores the powerful features of our Products
                    </h1>
                  </div>

                  <div className="text-sideHeading md:text-lg">
                    <p>
                      At LM Club, we value, protect, and defend your privacy.
                      Our approach is built on our long-standing privacy
                      principles of user control, transparency, security,
                      defending data from third party access, and using personal
                      data in ways that provide meaningful benefit to you.
                    </p>
                  </div>

                  <div>
                    <a
                      href="/products"
                      className="bg-mainColor hover:bg-white hover:text-mainColor hover:border-[1px] hover:border-mainColor font-medium outline-none hover:shadow-form rounded-full transition duration-1000 ease-in-out text-base text-white px-8 py-2.5 text-center"
                    >
                      What we offer
                    </a>
                  </div>
                </div>

                <div>
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/privacy_data_protection_1376X920:VP5-800x450"
                    alt=""
                    className="rounded"
                  />
                </div>
              </div>

              <div className=" text-4xl font-semibold text-center pt-12">
                <h1>Learn more about privacy at LM Club</h1>
              </div>

              <div className=" text-sideHeading text-center">
                <p>
                  Learn more about Privacy at LM Club and how we put our privacy
                  principles into practise in the following links and resources.
                </p>
              </div>

              <div className=" text-2xl text-blue-600 font-semibold underline pt-4">
                <h1>Privacy for Young People</h1>
              </div>

              <div className=" text-sideHeading mt-4">
                <p>
                  Privacy for young people is a page where young users can learn
                  about and understand LM Club privacy practises and how to use
                  our products in a way that protects their privacy. This page
                  also highlights topics that may be helpful for parents and
                  guardians.
                </p>
              </div>

              <div className=" text-2xl text-blue-600 font-semibold underline pt-5">
                <h1>Privacy Report</h1>
              </div>

              <div className=" text-sideHeading mt-4">
                <p>
                  The privacy report includes new developments in privacy at LM
                  Club. Find the latest information on what personal data we
                  collect, how it may be used, and how you can manage and
                  control your data.
                </p>
              </div>

              <div className=" text-2xl text-blue-600 font-semibold underline pt-8">
                <h1>Privacy Frequently Asked Questions</h1>
              </div>

              <div className=" text-sideHeading mt-4">
                <p>
                  Do you have a question about LM Club privacy? We explain how
                  customers can export or delete personal data and more in the
                  Privacy FAQs.
                </p>
              </div>

              <div className=" text-2xl text-blue-600 font-semibold underline pt-8">
                <h1>LM Club Corporate Social Responsibility</h1>
              </div>

              <div className=" text-sideHeading mt-4">
                <p>
                  Learn more about how LM Club approaches building a more
                  inclusive, equitable, sustainable, and trusted future for
                  everyone, and how technology can and must benefit the future
                  of humanity and our planet.
                </p>
              </div>

              <div className=" text-2xl text-blue-600 font-semibold underline pt-8">
                <h1>U.S. State Data Privacy Notice</h1>
              </div>

              <div className=" text-sideHeading mt-4">
                <p>
                  If you are in the U.S, please see our U.S State Data Privacy
                  Notice.
                </p>
              </div>

              <div className=" text-4xl font-semibold text-center pt-12">
                <h1>What's new?</h1>
              </div>

              <div className=" text-sideHeading mt-4 text-center">
                <p>
                  Check out the latest articles, blog posts, and news from LM
                  Club about protecting your privacy at home and at work.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 pt-8 md:px-2 lg:px-1 px-4">
                <a
                  href="mailto:info@laoemaom.com"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-2 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                           https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/GDPR_and_generative_AI_A%20guide_for_the_public_sector?wid=406&hei=230&fit=crop"
                          alt=""
                          className="md:h-52 w-[100%] rounded"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-2xl font-bold text-headingColor text-center">
                          GDPR and generative AI - a guide for the public sector
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          This whitepaper offers practical support for public
                          sector organisations as they consider generative AI
                          services such as Copilot for LM Club 365 and Azure
                          OpenAI Service.
                        </p>
                      </div>
                      {/* 
                      <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@laoemaom.com"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-2 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                          https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Protecting_the_data_of_our_commercial_and_public_sector_customers_in_the_AI_era?wid=380&hei=213&fit=crop"
                          alt=""
                          className="md:h-52 w-[100%] rounded"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-2xl font-bold text-headingColor text-center">
                          Protecting the data of our commercial
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Learn more about LM Club commitment to protecting the
                          data of our commercial and public sector customers and
                          how our approach to AI is built on a foundation of
                          privacy across all our AI products and solutions.
                        </p>
                      </div>
                      {/* 
                      <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@laoemaom.com"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-2 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                           https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Enhancing_trust_and_protecting_privacy_in_the_AI_era?wid=380&hei=213&fit=crop"
                          alt=""
                          //   className="md:h-52 md:w-[70%] w-[80%]"
                          className="md:h-52 w-[100%] rounded"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-2xl font-bold text-headingColor text-center">
                          Enhancing trust and protecting privacy
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Discover how LM Club privacy commitments apply to AI
                          and how LM Club empowers customers to use new AI
                          technologies while advancing trust and protecting
                          privacy.
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>
                <a
                  href="/enroll-rewards"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-2 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                        https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/EU-Data-Boundary-Blog-image-1-small?wid=380&hei=213&fit=crop"
                          alt=""
                          className="md:h-52 w-[100%] rounded"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-2xl font-bold text-headingColor text-center">
                          Enabling customers to keep personal data
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          LM Club EU Data Boundary enables customers to store
                          and process their data within the EU. Read about the
                          latest enhancements and new features building on prior
                          progress.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
