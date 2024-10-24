import React, { useState, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PrivacyReport = () => {
  // State to manage selected heading for mobile
  const [selectedHeading, setSelectedHeading] = useState(0);

  // Refs to scroll to specific sections in the desktop view
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  // Handle select change for mobile
  const handleSelectChange = (event) => {
    setSelectedHeading(parseInt(event.target.value));
  };

  // Function to handle scroll on desktop
  const scrollToSection = (index) => {
    sectionRefs[index].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      {" "}
      <Navbar />
      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-12 md:text-start text-center space-y-6">
              <div className=" text-4xl font-bold text-center">
                <h1>LM Club Privacy Report</h1>
              </div>

              <div className="space-y-2 text-[#2b2a35] font-light mt-8 text-center">
                <p>Last Updated: October 10, 2024 (Version 0.0.1)</p>
              </div>

              <div className="my-4">
                <img
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/privacy_report_hero?scl=1"
                  alt=""
                  className="rounded"
                />
              </div>

              <div className=" mx-auto p-4">
                {/* Desktop View: Two Columns */}
                <div className="hidden md:grid grid-cols-3 gap-8">
                  {/* Left side: Headings */}
                  <div className="space-y-4 col-span-1">
                    <h2
                      onClick={() => scrollToSection(0)}
                      className={`text-lg cursor-pointer text-blue-600 hover:text-headingColor ease-in-out duration-1000`}
                    >
                      Driving AI innovation while protecting privacy
                    </h2>
                    <h2
                      onClick={() => scrollToSection(1)}
                      className={`text-lg cursor-pointer text-blue-600 hover:text-headingColor ease-in-out duration-1000`}
                    >
                      Privacy tools and resources. Learn how to control your
                      data
                    </h2>
                    <h2
                      onClick={() => scrollToSection(2)}
                      className={`text-lg cursor-pointer text-blue-600 hover:text-headingColor ease-in-out duration-1000`}
                    >
                      Privacy by design. Understanding required and optional
                      data
                    </h2>
                    <h2
                      onClick={() => scrollToSection(3)}
                      className={`text-lg cursor-pointer text-blue-600 hover:text-headingColor ease-in-out duration-1000`}
                    >
                      Privacy in a changing world
                    </h2>
                  </div>

                  {/* Right side: Display all data */}
                  <div className="space-y-16 col-span-2">
                    <div ref={sectionRefs[0]} className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Driving AI innovation while protecting privacy
                      </h3>
                      <p className="text-gray-700">
                        At LM Club, we value, protect, and defend your privacy.
                        Our approach is built on our long-standing privacy
                        principles of user control, transparency, security,
                        defending data from third party access, and using
                        personal data in ways that provide meaningful benefit to
                        you.
                      </p>
                      <p className="text-gray-700">
                        We are committed to protecting privacy by providing
                        products, information, and controls that allow you to
                        choose how your data is collected and used. From
                        products built with privacy by design to transparent
                        information and user controls, our goal is to empower
                        individuals and our customers to make informed choices
                        about their data.
                      </p>
                      <p className="text-gray-700">
                        As part of our commitment to privacy and transparency,
                        the LM Club Privacy Report is published to share the
                        latest information on what personal data we collect, how
                        it may be used, and how you can manage and control your
                        information. The report also summarises key developments
                        and trends in global privacy and how they could affect
                        LM Club, our customers and the global regulatory
                        environment.
                      </p>
                      <button className="bg-mainColor text-white font-medium px-6 py-2 rounded-full">
                        Modify Privacy Policy
                      </button>
                    </div>
                    <div ref={sectionRefs[1]} className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Privacy tools and resources. Learn how to control your
                        data
                      </h3>
                      <p className="text-gray-700 my-2">
                        LM Club remains committed to driving responsible AI
                        innovation while protecting privacy and other
                        fundamental rights. We provide transparency and choice,
                        tools to help our customers control their data and will
                        continue to respond to the changing privacy landscape in
                        service of our customers and the industry overall.
                        <p className="text-gray-700 my-2">
                          Across the globe, we continue to see an acceleration
                          of data protection and privacy regulation along with
                          rapid advances in new kinds of technologies, like
                          artificial intelligence, that leverage data. Our
                          customers are interested in the latest developments in
                          advanced AI systems and solutions that meet their
                          unique data use and governance needs.
                        </p>
                        <p className="text-gray-700 my-2">
                          At LM Club, we believe protecting privacy is
                          fundamental to the development of advanced AI systems.
                          We have had a principles-based AI governance structure
                          and system across the company since 2017. Today, we
                          have dedicated employees throughout the company and
                          across multiple disciplines, including research,
                          policy, and engineering, who ensure that our AI
                          solutions meet society’s expectations and our ethical
                          principles.
                        </p>
                        <p className="text-gray-700 my-2">
                          As our customers continue to expand their use of our
                          AI solutions, we will continue to develop our
                          solutions in alignment with our ethical principles,
                          corporate policies, and voluntary commitments to
                          promote safe, secure, and transparent AI. A core
                          aspect of our efforts is our adherence to our
                          Responsible AI Standard, which outlines specific
                          requirements for how we develop and deploy AI systems.
                          The standard guides our internal teams by transforming
                          our AI principles – of fairness, reliability and
                          safety, privacy and security, inclusiveness,
                          transparency and accountability – into concrete
                          engineering practises.
                        </p>
                        <p className="text-gray-700 my-2">
                          {" "}
                          As part of our commitment to transparency, we describe
                          the personal data we collect, how we use this data,
                          and how we share this data in the LM Club Privacy
                          Statement. We provide a summary of recent updates in
                          our Change History.
                        </p>
                        <p className="text-gray-700 my-2">
                          {" "}
                          LM Club has integrated Copilot into many products
                          and services, and each one is created and deployed in
                          alignment with our critical security, compliance and
                          privacy policies and processes. To help people
                          understand the capabilities of these new AI solutions
                          and ensure transparency in our approach, LM Club has
                          published a variety of resources to provide more
                          information about our approach to privacy and AI for
                          our consumer and commercial and public sector
                          customers. Comprehensive and transparent documentation
                          and information helps organisations understand how our
                          AI tools work and the choices our customers can make
                          that influence system performance and behaviour.
                          Customers can find more information about LM Club
                          Copilots in our documentation, adoption resources, new
                          Copilot Lab resource page, and through the Azure
                          OpenAI Service documentation, quickstarts and API
                          reference guides.
                        </p>
                        <p className="text-gray-700 my-2">
                          {" "}
                          In addition to our internal practices, LM Club
                          supports global regulatory initiatives to ensure that
                          AI is developed and used in responsible,
                          privacy-protecting and ethical ways. In the United
                          States, LM Club has confirmed support for the
                          Voluntary AI Commitments from the White House and
                          supports the legislative efforts and vision in Europe,
                          the UK and other jurisdictions as they work to develop
                          risk-based frameworks that ensure people can realise
                          the promises of AI responsibly and in ways that
                          respect fundamental rights.
                        </p>
                        <p className="text-gray-700 my-2">
                          {" "}
                          We have been at the forefront of cutting-edge research
                          in AI and will continue to integrate powerful,
                          innovative AI technologies into our products and
                          services to help customers do more while preserving
                          data privacy, transparency, and trust.
                        </p>
                      </p>
                      <button className="bg-mainColor text-white px-6 font-medium py-2 rounded-full">
                        Accept Cookies
                      </button>
                    </div>
                    <div ref={sectionRefs[2]} className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Privacy by design. Understanding required and optional
                        data
                      </h3>
                      <p className="text-gray-700 my-2">
                        We provide tools to help you control your personal data
                        and manage your interactions with LM Club products and
                        services. With the LM Club privacy dashboard, you can
                        view, delete, and manage your privacy settings and data
                        collected while signed into your LM Club account. Data
                        that appears on the dashboard includes data from your
                        Bing searches, LM Club Edge browsing, location
                        history, and use of LM Club apps and services.
                        Recently, we made it easier for family organisers to
                        view and manage the activity data for connected child
                        accounts from the privacy dashboard.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        For data that is collected by Copilot in Bing, including
                        through user queries and prompts, the LM Club privacy
                        dashboard provides authenticated (signed in) users with
                        tools to exercise their data subject rights, including
                        by providing user with the ability to view, export and
                        delete stored conversation history. We continue to
                        listen to feedback on how users want to manage their
                        Copilot and search experience, including through
                        in-context data management experiences. Each month, the
                        privacy dashboard has 3 million monthly active users,
                        showing active engagement and use globally.
                      </p>
                      <p className="text-gray-700 my-2">
                        For our young users, LM Club offers an immersive
                        game-based learning adventure, Privacy Prodigy, for
                        students aged 7-18. In this Minecraft game, players take
                        on the challenge of protecting their data as they
                        venture further from home, encountering scenarios that
                        help them learn about the personal information that can
                        be shared and what should be kept private. We believe it
                        is important to supplement privacy tools like the
                        dashboard with educational resources, particularly for
                        young people as they learn to navigate the online world.
                        Privacy prodigy is available for free in our Minecraft
                        Education portal and in the Minecraft Marketplace.
                      </p>
                      <p className="text-gray-700 my-2">
                        For our commercial and public sector customers,
                        LM Club has a variety of enterprise-grade solutions
                        and services that help our customers control, protect,
                        and defend their data. For example, with the EU Data
                        Boundary, LM Club provides enhanced residency
                        capabilities for processing and storing commercial and
                        public sector customers’ personal data within the
                        European Union.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        With the LM Club Purview and LM Club Priva
                        offerings, organisations can understand and govern their
                        data estates and sensitive information. Purview
                        capabilities include Adaptive Protection, which uses
                        machine learning to understand how users are interacting
                        with data and assign risk levels. LM Club Purview can
                        then adapt by adjusting Data Loss Prevention (DLP)
                        controls in response to a detected risk. LM Club Priva
                        is an advanced solution complementing Purview, tailored
                        for effective data estate governance and handling of
                        sensitive information using advanced automation
                        capabilities.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        In April 2024, we announced new solutions in Priva to
                        help customers modernise their privacy programme. The
                        expansion of LM Club Priva brings automated
                        capabilities to help organisations meet adapting privacy
                        requirements and further enables organisations to
                        automate the management, definition and tracking of
                        privacy operations. Learn more about how the suite of
                        Priva solutions has expanded here.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        LM Club Entra is a cloud-based service that provides
                        identity, data and collaboration solutions for
                        enterprises and organisations. LM Club has recently
                        introduced a range of new security tools and features
                        for the LM Club Entra product family, aimed at helping
                        organisations improve their security and data protection
                        posture. With the ever-increasing sophistication of
                        cyber-attacks, the increasing use of cloud-based
                        services and the proliferation of mobile devices, it is
                        essential that organisations have effective tools in
                        place to manage their security scope.
                      </p>
                      <button className="bg-mainColor text-white px-6 font-medium py-2 rounded-full">
                        Know More
                      </button>
                    </div>
                    <div ref={sectionRefs[3]} className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Privacy in a changing world
                      </h3>
                      <p className="text-gray-700 my-2">
                        We provide tools to help you control your personal data
                        and manage your interactions with LM Club products and
                        services. With the LM Club privacy dashboard, you can
                        view, delete, and manage your privacy settings and data
                        collected while signed into your LM Club account. Data
                        that appears on the dashboard includes data from your
                        Bing searches, LM Club Edge browsing, location
                        history, and use of LM Club apps and services.
                        Recently, we made it easier for family organisers to
                        view and manage the activity data for connected child
                        accounts from the privacy dashboard.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        For data that is collected by Copilot in Bing, incluing
                        through user queries and prompts, the LM Club privacy
                        dashboard provides authenticated (signed in) users with
                        tools to exercise their data subject rights, including
                        by providing user with the ability to view, export and
                        delete stored conversation history. We continue to
                        listen to feedback on how users want to manage their
                        Copilot and search experience, including through
                        in-context data management experiences. Each month, the
                        privacy dashboard has 3 million monthly active users,
                        showing active engagement and use globally.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        For our young users, LM Club offers an immersive
                        game-based learning adventure, Privacy Prodigy, for
                        students aged 7-18. In this Minecraft game, players take
                        on the challenge of protecting their data as they
                        venture further from home, encountering scenarios that
                        help them learn about the personal information that can
                        be shared and what should be kept private. We believe it
                        is important to supplement privacy tools like the
                        dashboard with educational resources, particularly for
                        young people as they learn to navigate the online world.
                        Privacy prodigy is available for free in our Minecraft
                        Education portal and in the Minecraft Marketplace.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        For our commercial and public sector customers,
                        LM Club has a variety of enterprise-grade solutions
                        and services that help our customers control, protect,
                        and defend their data. For example, with the EU Data
                        Boundary, LM Club provides enhanced residency
                        capabilities for processing and storing commercial and
                        public sector customers’ personal data within the
                        European Union.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        With the LM Club Purview and LM Club Priva
                        offerings, organisations can understand and govern their
                        data estates and sensitive information. Purview
                        capabilities include Adaptive Protection, which uses
                        machine learning to understand how users are interacting
                        with data and assign risk levels. LM Club Purview can
                        then adapt by adjusting Data Loss Prevention (DLP)
                        controls in response to a detected risk. LM Club Priva
                        is an advanced solution complementing Purview, tailored
                        for effective data estate governance and handling of
                        sensitive information using advanced automation
                        capabilities.
                      </p>
                      <p className="text-gray-700 my-2">
                        In April 2024, we announced new solutions in Priva to
                        help customers modernise their privacy programme. The
                        expansion of LM Club Priva brings automated
                        capabilities to help organisations meet adapting privacy
                        requirements and further enables organisations to
                        automate the management, definition and tracking of
                        privacy operations. Learn more about how the suite of
                        Priva solutions has expanded here.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        LM Club Entra is a cloud-based service that provides
                        identity, data and collaboration solutions for
                        enterprises and organisations. LM Club has recently
                        introduced a range of new security tools and features
                        for the LM Club Entra product family, aimed at helping
                        organisations improve their security and data protection
                        posture. With the ever-increasing sophistication of
                        cyber-attacks, the increasing use of cloud-based
                        services and the proliferation of mobile devices, it is
                        essential that organisations have effective tools in
                        place to manage their security scope.
                      </p>

                      <button className="bg-mainColor text-white px-6 font-medium py-2 rounded-full">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile View: Select Dropdown */}
                <div className="md:hidden">
                  <select
                    value={selectedHeading}
                    onChange={handleSelectChange}
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                  >
                    <option value="0" className="text-center">
                      {" "}
                      Driving AI innovation while protecting privacy
                    </option>
                    <option value="1" className="text-center">
                      Privacy tools and resources. Learn how to control your
                      data
                    </option>
                    <option value="2" className="text-center">
                      Privacy by design. Understanding required and optional
                      data
                    </option>
                    <option value="3" className="text-center">
                      Privacy in a changing world
                    </option>
                  </select>

                  {/* Display only the selected content in mobile view */}
                  {selectedHeading === 0 && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Driving AI innovation while protecting privacy
                      </h3>
                      <p className="text-gray-700">
                        At LM Club, we value, protect, and defend your privacy.
                        Our approach is built on our long-standing privacy
                        principles of user control, transparency, security,
                        defending data from third party access, and using
                        personal data in ways that provide meaningful benefit to
                        you.
                      </p>
                      <p className="text-gray-700">
                        We are committed to protecting privacy by providing
                        products, information, and controls that allow you to
                        choose how your data is collected and used. From
                        products built with privacy by design to transparent
                        information and user controls, our goal is to empower
                        individuals and our customers to make informed choices
                        about their data.
                      </p>
                      <p className="text-gray-700">
                        As part of our commitment to privacy and transparency,
                        the LM Club Privacy Report is published to share the
                        latest information on what personal data we collect, how
                        it may be used, and how you can manage and control your
                        information. The report also summarises key developments
                        and trends in global privacy and how they could affect
                        LM Club, our customers and the global regulatory
                        environment.
                      </p>
                      <button className="bg-mainColor text-white px-6 py-2 rounded-full">
                        Learn More
                      </button>
                    </div>
                  )}
                  {selectedHeading === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Privacy tools and resources. Learn how to control your
                        data
                      </h3>
                      <p className="text-gray-700 my-2">
                        We provide tools to help you control your personal data
                        and manage your interactions with LM Club products and
                        services. With the LM Club privacy dashboard, you can
                        view, delete, and manage your privacy settings and data
                        collected while signed into your LM Club account. Data
                        that appears on the dashboard includes data from your
                        Bing searches, LM Club Edge browsing, location
                        history, and use of LM Club apps and services.
                        Recently, we made it easier for family organisers to
                        view and manage the activity data for connected child
                        accounts from the privacy dashboard.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        For data that is collected, including through user
                        queries and prompts, the LM Club privacy dashboard
                        provides authenticated (signed in) users with tools to
                        exercise their data subject rights, including by
                        providing user with the ability to view, export and
                        delete stored conversation history. We continue to
                        listen to feedback on how users want to manage their
                        Copilot and search experience, including through
                        in-context data management experiences. Each month, the
                        privacy dashboard has 3 million monthly active users,
                        showing active engagement and use globally.
                      </p>
                      <p className="text-gray-700 my-2">
                        For our young users, LM Club offers an immersive
                        game-based learning adventure, Privacy Prodigy, for
                        students aged 7-18. In this Minecraft game, players take
                        on the challenge of protecting their data as they
                        venture further from home, encountering scenarios that
                        help them learn about the personal information that can
                        be shared and what should be kept private. We believe it
                        is important to supplement privacy tools like the
                        dashboard with educational resources, particularly for
                        young people as they learn to navigate the online world.
                        Privacy prodigy is available for free in our Minecraft
                        Education portal and in the Minecraft Marketplace.
                      </p>

                      <p className="text-gray-700 my-2">
                        {" "}
                        With the LM Club Purview and LM Club offerings,
                        organisations can understand and govern their data
                        estates and sensitive information. Purview capabilities
                        include Adaptive Protection, which uses machine learning
                        to understand how users are interacting with data and
                        assign risk levels. LM Club Purview can then adapt by
                        adjusting Data Loss Prevention (DLP) controls in
                        response to a detected risk. LM Club is an advanced
                        solution complementing Purview, tailored for effective
                        data estate governance and handling of sensitive
                        information using advanced automation capabilities.
                      </p>
                      <p className="text-gray-700 my-2">
                        {" "}
                        In October 2024, we announced new solutions to help
                        customers modernise their privacy programme. The
                        expansion of LM Club brings automated capabilities to
                        help organisations meet adapting privacy requirements
                        and further enables organisations to automate the
                        management, definition and tracking of privacy
                        operations. Learn more about how the suite of Priva
                        solutions has expanded here.
                      </p>

                      <button className="bg-mainColor text-white px-6 py-2 rounded-full ">
                        Get Started
                      </button>
                    </div>
                  )}
                  {selectedHeading === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Privacy by design. Understanding required and optional
                        data
                      </h3>
                      <p className="text-gray-700">
                        With the LM Club Purview and LM Club Priva offerings,
                        organisations can understand and govern their data
                        estates and sensitive information. Purview capabilities
                        include Adaptive Protection, which uses machine learning
                        to understand how users are interacting with data and
                        assign risk levels. LM Club Purview can then adapt by
                        adjusting Data Loss Prevention (DLP) controls in
                        response to a detected risk. LM Club Priva is an
                        advanced solution complementing Purview, tailored for
                        effective data estate governance and handling of
                        sensitive information using advanced automation
                        capabilities.
                      </p>
                      <p className="text-gray-700">
                        {" "}
                        For our commercial and public sector customers, LM Club
                        has a variety of enterprise-grade solutions and services
                        that help our customers control, protect, and defend
                        their data. For example, with the EU Data Boundary, LM
                        Club provides enhanced residency capabilities for
                        processing and storing commercial and public sector
                        customers’ personal data within the United States of
                        America.
                      </p>
                      <button className="bg-mainColor text-white px-6 py-2 rounded-full">
                        Contact Us
                      </button>
                    </div>
                  )}
                  {selectedHeading === 3 && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Privacy in a changing world
                      </h3>
                      <p className="text-gray-700">
                        As part of our commitment to privacy and transparency,
                        the LM Club Privacy Report is published to share the
                        latest information on what personal data we collect, how
                        it may be used, and how you can manage and control your
                        information. The report also summarises key developments
                        and trends in global privacy and how they could affect
                        LM Club, our customers and the global regulatory
                        environment.
                      </p>
                      <p className="text-gray-700">
                        We are committed to protecting privacy by providing
                        products, information, and controls that allow you to
                        choose how your data is collected and used. From
                        products built with privacy by design to transparent
                        information and user controls, our goal is to empower
                        individuals and our customers to make informed choices
                        about their data.
                      </p>
                      <button className="bg-mainColor text-white px-6 py-2 rounded-full">
                        Contact Us
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyReport;
