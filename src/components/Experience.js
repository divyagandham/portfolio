import React, { useState, useEffect, useRef } from 'react';
import { Box, Heading, Text, Divider, keyframes } from '@chakra-ui/react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';

// Keyframe animations
const fadeIn = keyframes`8
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Hook to detect visibility of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const experiences = [
    {
      date: '2022 - Present',
      title: 'Frontend Developer',
      company: 'Comviva Technologies',
      description: 'Working as Frontend Developer for "MyMTN SA" Mobile Application from assessment of UI/UX designs for technical feasibility to deployment.Integrated REST APIs and third-party services like Payment Gateway Portals in the Mobile Application, including provisioning for Card Payments.One major achievement among many includes revamping an entire existing Mobile Application code with a new and modern technological stack, which led to a boosted performance at a conversion rate of 80%.Helped to increase Customer Return Rates by providing a sleek and responsive user interface and experience.Performed code reviews, unit testing, and resolved defects throughout the product lifecycle.',
    },
    {
      date: '2021 - 2022',
      title: 'Full Stack Developer Trainee',
      company: 'NxtWave Disruptive Technologies',
      description: 'As a full stack developer, I have built end-to-end web applications using JavaScript and frameworks like React.js for frontend and Node.js for backend. I have managed databases with MySQL, implemented RESTful APIs. My work emphasizes responsive design, robust server-side logic, and efficient data management.',
    },
  ];

  return (
    <Box
      ref={sectionRef}
      color="white"
      p={[4, 4, 12]}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      animation={isVisible ? `${fadeIn} 1s ease-in-out forwards` : ''}
      opacity={0}
    >
      <Heading mb={8} fontSize={['2xl', '2xl', '5xl']} textAlign="center">
        My Experience
      </Heading>
      <VerticalTimeline lineColor='gray'>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            date={experience.date}
            iconStyle={{ background: '#cc0044', color: 'black' }}
            icon={<FaBriefcase />}
            contentStyle={{
              background: 'black',
              color: '#fff',
              boxShadow: '0 3px 10px #cc0044',
            }}
            contentArrowStyle={{ borderRight: '10px solid white',margin:'8px' }}
          >
            <Heading as="h3" fontSize="xl" mb={2} color="#cc0044">
              {experience.title}
            </Heading>
            <Text fontSize="md" mb={1}>
              {experience.company}
            </Text>
            <Divider borderColor="white" my={2} />
            <Text fontSize="sm" color="gray.400">
              {experience.description}
            </Text>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default Experience;



