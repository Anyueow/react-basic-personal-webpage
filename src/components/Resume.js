import React, { useState } from 'react';
import './Resume.css';

const experiences = [
  {
    title: "Co-Founder & CTO, FindHer",
    date: "July 2023 - November 2023",
    location: "Bangalore, India",
    description: [
      "Spearheaded development of the MVP and landing page using the MERN stack.",
      "Hired and led a team of developers in an agile environment, enhancing product development.",
      "Directed sales and client acquisition efforts using tools like Airtable and Jira."
    ]
  },
  {
    title: "Managing Director, Huntington Angels Network",
    date: "January 2024 - Present",
    location: "Boston, MA",
    description: [
      "Guided a team of 12+ in linking NEU-affiliated entrepreneurs with capital resources and educational materials.",
      "Developed a matching algorithm in Python to efficiently link investors and founders in our CRM.",
      "Conducted due diligence of 4 CPG startups and connected them to relevant investors."
    ]
  },
  {
    title: "Vice President, Huntington Angels Network",
    date: "February 2022 - June 2023",
    location: "Boston, MA",
    description: [
      "Created and maintained relationships between Northeastern-affiliated ventures and investors.",
      "Researched, sourced, and analyzed ventures to facilitate dealflow.",
      "Led teams for due diligence on ventures and database management."
    ]
  },
  {
    title: "Junior Associate, Huntington Angels Network",
    date: "February 2021 - January 2022",
    location: "Boston, MA",
    description: [
      "Created and maintained relationships between Northeastern-affiliated ventures and investors.",
      "Researched, sourced, and analyzed ventures to facilitate investor introductions.",
      "Assisted with database organization and optimization."
    ]
  },
  {
    title: "Business Development Analyst Co-op, Hercules Capital BDC",
    date: "July 2022 - December 2022",
    location: "Palo Alto, CA",
    description: [
      "Conducted market research and analysis for new investment opportunities, sourcing and reaching out to potential portfolio companies.",
      "Performed portfolio management responsibilities for 11 portfolio companies on proprietary software.",
      "Developed Excel automations to streamline the business development intake process, increasing efficiency of data input by 80%."
    ]
  },
  {
    title: "Entrepreneur in Residence, The Michael J. and Ann Sherman Center",
    date: "January 2024 - Present",
    location: "Boston, MA",
    description: [
      "Developed a resources page and project management tool for founders to update their goals during the Co-op.",
      "Mentored and led 4 Venture Co-ops at the Sherman Center.",
      "Planned events such as customer feedback workshops, product feedback sessions, and excursions exploring the entrepreneurial ecosystem."
    ]
  },
  {
    title: "President & Co-Founder, Bindu",
    date: "May 2020 - May 2022",
    location: "Hyderabad, India",
    description: [
      "Founded a non-profit to battle period poverty and stigma in India.",
      "Raised $30,000+ in donations to provide sustainable sanitary products to over 7,000 women.",
      "Spearheaded four teams consisting of around 70 members, creating logistical solutions and marketing campaigns."
    ]
  },
  {
    title: "Business Consultant & Community Manager, Dogspotted.com",
    date: "March 2021 - Current",
    location: "New York, NY",
    description: [
      "Developed and implemented a strategic social media marketing plan.",
      "Defined and established goals to overcome identified business challenges related to customer retention, brand awareness, sales, online presence, and visitor traffic.",
      "Assisted in SEO development and played an incremental role in launching phase 2 of their startup."
    ]
  },
  {
    title: "Programming Intern, Enterpi Solutions",
    date: "June 2018 - August 2018",
    location: "Hyderabad, India",
    description: [
      "Collaborated with experienced programmers to learn React and React Native.",
      "Designed and developed an app called Fitness Bolt which provided users with a customized set of YouTube workout videos.",
      "Tracked user workout progress through the app."
    ]
  },
  {
    title: "Undergraduate Teaching Assistant for Introduction to Data Science, Northeastern University",
    date: "September 2021 - May 2022",
    location: "Boston, MA",
    description: [
      "Helped lead two practicums and held office hours.",
      "Assisted in grading homework and projects."
    ]
  },
  {
    title: "Undergraduate Teaching Assistant for Business Calculus, Northeastern University",
    date: "September 2021 - May 2022",
    location: "Boston, MA",
    description: [
      "Created a systematic scheduling and organization website for class support.",
      "Coordinated in-class logistics and liaised with Professor Rajini Jesudason."
    ]
  },
  {
    title: "Honor’s Living Learning Assistant, Northeastern University",
    date: "September 2022 - May 2023",
    location: "Boston, MA",
    description: [
      "Led the Living Learning Community ‘Venture Capitalism and Entrepreneurship’ and assisted the Living Learning Community ‘Travel and Adventure’.",
      "Collaborated with industry experts to introduce Honor’s freshmen to VC and Entrepreneurship."
    ]
  },
  {
    title: "Growth, TechGirl",
    date: "July 2022 - November 2022",
    location: "Remote",
    description: [
      "Worked with CEO and CMO to create a brand strategy that addresses their target audience more efficiently.",
      "Ideated and executed the launch of their ambassador program, an extension of their Go-to-market strategy."
    ]
  },
  {
    title: "Entrepreneur & Fellow, DMZ Sandbox, Ryerson University",
    date: "June 2019 - August 2019",
    location: "Toronto, Canada",
    description: [
      "Selected for a 4-week student start-up incubator program organized by Ryerson University, Toronto.",
      "Pitched 'E-cup', an eco-friendly cup made from lignin, which is 100% biodegradable and water-resistant.",
      "Mentored under industry experts to convert the start-up into a long-term business enterprise."
    ]
  },
  {
    title: "President, Aga Khan Academy",
    date: "December 2018 - December 2019",
    location: "Hyderabad, India",
    description: [
      "Presided over all student council meetings, consisting of 9 executives and 23 general council members.",
      "Proposed, initiated, and spearheaded a student feedback survey conducted by the executive council.",
      "Liaised between the Dean for Students, Academy Heads, school faculty, administration, and students."
    ]
  },
  {
    title: "Startup Founder, The Indus Entrepreneurs",
    date: "October 2018 - January 2019",
    location: "Hyderabad, India",
    description: [
      "Participated in a national entrepreneurship conference and challenge.",
      "Awarded 2nd Position for pitching a business model focusing on a temperature-sensitive coffee cup that alerts the drinker when the beverage is too hot.",
      "Proposed the product as a B2B product for marketing to global coffee vendors."
    ]
  }
];

const Resume = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedNodes, setExpandedNodes] = useState({});


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleToggle = (index) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const filteredExperiences = experiences.filter((exp) =>
    exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.description.some((desc) => desc.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="resume">
      <h2>Resume</h2>
      <input
        type="text"
        placeholder="Search experiences..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <div className="timeline">
        {filteredExperiences.map((exp, index) => (
          <div className="timeline-node" key={index}>
            <div className="timeline-content" onClick={() => handleToggle(index)}>
              <h3>{exp.title}</h3>
              <p><strong>{exp.company}</strong></p>
              <p><strong>{exp.date}</strong></p>
              <p>{exp.location}</p>
            </div>
            {expandedNodes[index] && (
              <div className="timeline-details">
                <ul>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;