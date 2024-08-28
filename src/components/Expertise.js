import React, { useState, useEffect, useRef } from 'react';
import { Box, Flex, Text, Heading, Divider, keyframes } from '@chakra-ui/react';
import { FaLaptopCode, FaReact, FaMobileAlt } from 'react-icons/fa';

// Keyframe animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Expertise = () => {
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
        My Expertise
      </Heading>
      <Flex
        direction={['column', 'row']}
        justify="center"
        align="center"
        w={['100%', '95%']}
        border="1px solid white"
        borderRadius="md"
        overflow="hidden"
      >
        <Box
          flex="1"
          bg="black"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={[6, 6, 10]}
          borderRight={['none', '1px solid white']}
          borderBottom={['1px solid white', 'none']}
          animation={isVisible ? `${fadeIn} 1.5s ease-in-out forwards` : ''}
          opacity={0}
        >
          <FaLaptopCode size={40} color="#cc0044" />
          <Heading as="h3" fontSize={['lg', 'xl']} mt={4} mb={2}>
            <Text as="span" textDecoration="underline" textDecorationColor="#cc0044">
              Software
            </Text>{' '}
            Development
          </Heading>
          <Divider borderColor="white" my={4} />
          <Flex direction="row" p={1}>
            <Flex direction="column">
              <div style={{ fontSize: 14, color: 'grey' }}>{'<h3>'}</div>
              <Divider orientation="vertical" borderColor="grey" height={20} my={0} mx={4} />
              <div style={{ fontSize: 14, color: 'grey' }}>{'</h3>'}</div>
            </Flex>
            <Text fontSize="sm" textAlign="center" lineHeight="1.5" p={1} width={[200, 250]} mt={5}>
            Strong skills in programming languages like JavaScript, Python with experience in software design patterns and version control systems (Git).
            </Text>
          </Flex>
        </Box>
        <Box
          flex="1"
          bg="black"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={[6, 6, 10]}
          borderRight={['none', '1px solid white']}
          borderBottom={['1px solid white', 'none']}
          animation={isVisible ? `${fadeIn} 1.7s ease-in-out forwards` : ''}
          opacity={0}
        >
          <Box
            animation={isVisible? `${rotate} 3s linear`:''}
          >
            <FaReact size={40} color="#cc0044" />
          </Box>
          <Heading as="h3" fontSize={['lg', 'xl']} mt={4} mb={2}>
            <Text as="span" textDecoration="underline" textDecorationColor="#cc0044">
              Frontend Dev
            </Text>{' '}
            React
          </Heading>
          <Divider borderColor="white" my={4} />
          <Flex direction="row" p={1}>
            <Flex direction="column">
              <div style={{ fontSize: 14, color: 'grey' }}>{'<h3>'}</div>
              <Divider orientation="vertical" borderColor="grey" height={20} my={0} mx={4} />
              <div style={{ fontSize: 14, color: 'grey' }}>{'</h3>'}</div>
            </Flex>
            <Text fontSize="sm" textAlign="center" lineHeight="1.5" p={1} width={[200, 250]} mt={5}>
            Expertise in HTML, CSS, JavaScript (React), responsive design, and UX/UI principles for creating interactive and visually appealing web interfaces.
            </Text>
          </Flex>
        </Box>
        <Box
          flex="1"
          bg="black"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={[6, 6, 10]}
          animation={isVisible ? `${fadeIn} 1.9s ease-in-out forwards` : ''}
          opacity={0}
        >
          <FaMobileAlt size={40} color="#cc0044" />
          <Heading as="h3" fontSize={['lg', 'xl']} mt={4} mb={2}>
            <Text as="span" textDecoration="underline" textDecorationColor="#cc0044">
              App Dev
            </Text>{' '}
            Android, iOS
          </Heading>
          <Divider borderColor="white" my={4} />
          <Flex direction="row" p={1}>
            <Flex direction="column">
              <div style={{ fontSize: 14, color: 'grey' }}>{'<h3>'}</div>
              <Divider orientation="vertical" borderColor="grey" height={20} my={0} mx={4} />
              <div style={{ fontSize: 14, color: 'grey' }}>{'</h3>'}</div>
            </Flex>
            <Text fontSize="sm" textAlign="center" lineHeight="1.5" p={1} width={[200, 250]} mt={5}>
            Proficient in mobile and cross-platform framework like React Native, with a focus on performance optimization and seamless user experiences.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Expertise;



