import React, { useState, useEffect, useRef } from 'react';
import { Box, Heading, Text, Divider, List, ListItem, ListIcon, keyframes } from '@chakra-ui/react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaCircle } from 'react-icons/fa';

// Keyframe animations
const fadeIn = keyframes`
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
      date: '2023 - Present',
      experiences: [
        {
          title: 'Frontend Developer',
          company: 'Comviva Technologies',
          intro: 'Working as a Frontend Developer for MTN MOMO versatile payment app similar to Paytm, allowing users to recharge mobile services, book tickets, pay bills, and perform various financial transactions seamlessly.',
          description: [
            'As a React Native developer I have led and mentored teams to deliver exceptional projects. With expertise in these technologies and a strong leadership acumen, I drive innovation and ensure timely delivery of high-quality solutions.',
            'Integrated APIs to enable features like mobile recharges, bill payments, and ticket bookings, ensuring data flows smoothly within the app.',
            'Also worked on optimizing performance, fixing bugs and conducting thorough testing on various devices.',
          ],
        },
      ],
    },
    {
      date: '2022 - 2023',
      experiences: [
        {
          title: 'Frontend Developer',
          company: 'Comviva Technologies',
          intro: 'Worked as Frontend Developer for  MYMTN mobile payment application similar to Airtel and Jio apps, offering users convenient services such as mobile recharge, purchasing data and voice bundles, managing subscriptions, and tracking usage, all in one platform.',
          description: [
            'Integrated REST APIs and third-party services like Payment Gateway Portals in the Mobile Application, including provisioning for Card Payments.',
            'One major achievement among many includes revamping an entire existing Mobile Application code with a new and modern technological stack, which led to a boosted performance at a conversion rate of 80%.',
            'Handled Disney plus to get more subscriptions through MyMTN App by implementing separate recharge block for subscription and also by splash screens and banners.',
            'Performed code reviews, unit testing, and resolved defects throughout the product lifecycle.',
          ],
        },
      ],
    },
    {
      date: '2021 - 2022',
      experiences: [
        {
          title: 'Full Stack Developer Trainee',
          company: 'NxtWave Disruptive Technologies',
          intro: 'Trained as a full-stack developer, focusing on building comprehensive web applications.',
          description: [
            'Developed end-to-end web applications using JavaScript and frameworks like React.js for frontend.',
            'Managed databases with MySQL and implemented RESTful APIs.',
            'Emphasized responsive design, robust server-side logic, and efficient data management.',
          ],
        },
      ],
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
        Experience
      </Heading>
      <VerticalTimeline lineColor="gray">
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
            contentArrowStyle={{ borderRight: '10px solid white', margin: '8px' }}
          >
            {experience.experiences.map((exp, subIndex) => (
              <Box key={subIndex} mb={6}>
                <Heading as="h3" fontSize="xl" mb={2} color="#cc0044">
                  {exp.title}
                </Heading>
                <Text fontSize="md" mb={1}>
                  {exp.company}
                </Text>
                <Divider borderColor="white" my={2} />
                <Text fontSize="sm" color="gray.400" mb={2}>
                  {exp.intro}
                </Text>
                <List spacing={2} fontSize="sm" color="gray.400">
                  {exp.description.map((desc, descIndex) => (
                    <ListItem key={descIndex}>
                      <ListIcon as={FaCircle} boxSize={2} color="#cc0044" />
                      {desc}
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default Experience;




