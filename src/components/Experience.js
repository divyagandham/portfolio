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
      description: 'As a frontend developer, I have built responsive web interfaces using HTML, CSS, and JavaScript framework like React.js. I have  also developed cross-platform mobile apps with React Native, ensuring consistent performance on iOS and Android. My work includes state management, API integration, and collaboration in agile environments using Git for version control.',
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
      <VerticalTimeline lineColor='black'>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            date={experience.date}
            iconStyle={{ background: '#cc0044', color: 'black' }}
            icon={<FaBriefcase />}
            contentStyle={{
              background: 'black',
              color: '#fff',
              boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
            }}
            contentArrowStyle={{ borderRight: '7px solid #cc0044' }}
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



