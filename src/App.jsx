import { About, Explore, GetStarted, Hero, Navbar } from "./sections";

function App() {
  return (
    <div className="bg-dark overflow-hidden text-light">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
      </div>

      <Explore />
      <div className="relative">
        <div className="gradient-04 z-0" />
        <GetStarted />
      </div>

      <div className="h-[3000px]"></div>
    </div>

    // <div className="bg-dark text-light">
    //   <h1 className="font-bold text-4xl my-8 text-center">
    //     Business Plan: Interactive Wall Creations

    //   </h1>

    //   {/*  Executive Summary section */}
    //   <div>
    //     <div>
    //       <h1 className="text-3xl my-8">
    //         Executive Summary
    //       </h1>
    //       <span className="flex gap-1">
    //         <span className="font-semibold">
    //           Business Name:
    //         </span>
    //         <span>
    //           BegenTouch LLC
    //         </span>
    //       </span>
    //       <span className="flex gap-1">
    //         <span className="font-semibold">
    //           Founder:
    //         </span>
    //         <span>
    //           Gankhulug Bayarsaikhan
    //         </span>
    //       </span>
    //       <span className="flex gap-1">
    //         <span className="font-semibold">
    //           Date:
    //         </span>
    //         <span>
    //           October 8, 2023
    //         </span>
    //       </span>
    //     </div>

    //     <div>
    //       <h1 className="font-semibold">
    //         Mission statement:
    //       </h1>
    //       <p>
    //         Interactive Wall Creations, Inc. aims to revolutionize the way people engage with physical spaces by creating captivating and interactive walls that combine art and technology. Our mission is to inspire creativity, education, and entertainment through immersive experiences.
    //       </p>

    //     </div>

    //     <div>
    //       <h1 className="font-semibold">
    //         Business Goals:
    //       </h1>
    //       <ul>
    //         <li>
    //           Become a leading provider of interactive walls in the North American market within five years.
    //         </li>
    //         <li>
    //           Develop a diverse portfolio of interactive wall designs for various industries.
    //         </li>
    //         <li>
    //           Create strategic partnerships with educational institutions, museums, and commercial spaces.
    //         </li>
    //         <li>
    //           Maintain a sustainable growth rate of 20% annually.
    //         </li>
    //         <li>
    //           Foster a culture of innovation and collaboration within the company.
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Business Description section */}
    //   <div>
    //     <div>
    //       <h1 className="text-3xl my-8">
    //         Business Description
    //       </h1>
    //     </div>

    //     <div>
    //       <h1 className="font-semibold">
    //         Business Concept:
    //       </h1>
    //       <p>
    //         Interactive Wall Creations specializes in the design, development, and installation of interactive walls that seamlessly blend art and technology. These walls engage users through touch, motion sensors, and visual effects, creating unique and immersive experiences. Our solutions cater to a wide range of industries, including education, entertainment, retail, healthcare, and corporate spaces.
    //       </p>
    //     </div>

    //     <div>
    //       <h1 className="font-semibold">
    //         Unique Selling Proposition (USP):
    //       </h1>
    //       <ul>
    //         <li>
    //           Our team of experienced artists, engineers, and designers collaborate to create one-of-a-kind interactive experiences.
    //         </li>
    //         <li>
    //           Customization: We offer tailored solutions to meet the specific needs of our clients.
    //         </li>
    //         <li>
    //           User Engagement: Our interactive walls are designed to captivate and educate, making them ideal for various industries.
    //         </li>
    //         <li>
    //           Cutting-edge Technology: We stay ahead by incorporating the latest technology trends into our creations.
    //         </li>
    //         <li>
    //           Sustainability: We prioritize eco-friendly materials and energy-efficient solutions.
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Market Analysis section */}
    //   <div>
    //     <div>
    //       <h1 className="text-3xl my-8">
    //         Market Analysis
    //       </h1>
    //     </div>

    //     <div>

    //       <div>
    //         <h1 className="font-semibold">
    //           Market Trends:
    //         </h1>

    //         <ul>
    //           <li>
    //             <span className="font-semibold">Growth in Experiential Marketing:</span> Brands are increasingly adopting interactive experiences to attract and engage customers.
    //           </li>
    //           <li>
    //             <span className="font-semibold">Digital Transformation in Education:</span>Educational institutions are adopting interactive technology for more effective teaching.
    //           </li>
    //           <li>
    //             <span className="font-semibold">Healthcare and Therapy:</span>Interactive walls are used in rehabilitation centers and therapy sessions to enhance patient engagement.
    //           </li>
    //           <li>
    //             <span className="font-semibold">Entertainment:</span>Interactive walls are becoming popular in amusement parks, theaters, and gaming centers.
    //           </li>
    //           <li>
    //             <span className="font-semibold">Corporate Spaces:</span>Companies are using interactive walls for presentations, team-building, and brand storytelling.
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div>
    //       <h1 className="font-semibold">
    //         Target Market:
    //       </h1>

    //       <ul>
    //         <li>
    //           <span className="font-semibold">Educational Institutions:</span> K-12 schools, colleges, and universities.
    //         </li>
    //         <li>
    //           <span className="font-semibold">Growth in Experiential Marketing:</span> To enhance visitor experiences.
    //         </li>
    //         <li>
    //           <span className="font-semibold">Retailers:</span> For interactive displays and advertising.
    //         </li>
    //         <li>
    //           <span className="font-semibold">Healthcare Facilities:</span> Rehabilitation centers and therapy clinics.
    //         </li>
    //         <li>
    //           <span className="font-semibold">Entertainment Venues:</span> Amusement parks, theaters, and gaming centers.
    //         </li>
    //         <li>
    //           <span className="font-semibold">Corporate Offices:</span> For presentations and team-building activities.
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Competitive Analysis section */}
    //   <div>
    //     <div>
    //       <h1 className="text-3xl my-8">
    //         Competitive Analysis
    //       </h1>
    //     </div>

    //     <div>

    //       <div>
    //         <h1 className="font-semibold">
    //           Key Competitors:
    //         </h1>

    //         <ul>
    //           <li>
    //             <span className="font-semibold">Interactive Art Studios:</span> Specialize in interactive art installations but lack diversity in industry applications.
    //           </li>
    //           <li>
    //             <span className="font-semibold">Tech Integration Companies:</span> Offer interactive technology solutions but not specialized in design and aesthetics.
    //           </li>
    //           <li>
    //             <span className="font-semibold">Imported Solutions:</span> Some foreign manufacturers offer interactive walls, but customization is limited.
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div>
    //       <h1 className="font-semibold">
    //         Competitive Advantages:
    //       </h1>

    //       <ul>
    //         <li>
    //           In-house expertise in both art and technology.
    //         </li>
    //         <li>
    //           Strong emphasis on customization and client collaboration.
    //         </li>
    //         <li>
    //           A diverse portfolio catering to various industries.
    //         </li>
    //         <li>
    //           Strong focus on sustainability and environmental responsibility.
    //         </li>
    //         <li>
    //           Strategic partnerships with leading suppliers and technology providers.
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Sales and Marketing Plan */}
    //   <div>
    //     <div>
    //       <h1 className="text-3xl my-8">
    //         Sales and Marketing Plan
    //       </h1>
    //     </div>

    //     <div>

    //       <div>
    //         <h1 className="font-semibold">
    //           Sales Strategy:
    //         </h1>

    //         <ul>
    //           <li>
    //             <span className="font-semibold">Direct Sales Team::</span> A dedicated team will target key industries through direct outreach.
    //           </li>
    //           <li>
    //             <span className="font-semibold">Tech Integration Companies:</span> Offer interactive technology solutions but not specialized in design and aesthetics.
    //           </li>
    //           <li>
    //             <span className="font-semibold">Imported Solutions:</span> Some foreign manufacturers offer interactive walls, but customization is limited.
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div>
    //       <h1 className="font-semibold">
    //         Competitive Advantages:
    //       </h1>

    //       <ul>
    //         <li>
    //           In-house expertise in both art and technology.
    //         </li>
    //         <li>
    //           Strong emphasis on customization and client collaboration.
    //         </li>
    //         <li>
    //           A diverse portfolio catering to various industries.
    //         </li>
    //         <li>
    //           Strong focus on sustainability and environmental responsibility.
    //         </li>
    //         <li>
    //           Strategic partnerships with leading suppliers and technology providers.
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    // </div>
  );
}

export default App;

const COMPANY_NAME = "BegenTouch labs";

const text = [
  {
    mainSection: "Executive Summary",
    paragraph: "",
    subSection: [
      {
        header: "Mission Statement",
        paragraph: `At ${COMPANY_NAME}, our mission is to revolutionize the way people experience and interact with physical spaces by creating highly customizable interactive walls that embody innovation, creativity, and exceptional quality.  Our goal is to bring interactive experiences to businesses, educational institutions, event venues, and private clients, enhancing their spaces and fostering creativity, collaboration, and engagement.`,
      },
    ],
  },
  {
    mainSection: "",
    paragraph: "",
    subSection: [
      {
        header: "",
        paragraph: "",
      },
    ],
  },
];
