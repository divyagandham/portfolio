import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, Image, useBreakpointValue, keyframes } from '@chakra-ui/react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Add icons for skills

// Keyframe animation for text fading in
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Keyframe animation for hacking effect background
const hackingAnimation = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

// Keyframe animation for text hacking style effect
const textHackingAnimation = keyframes`
  0% { color: #cc0044; }
  25% { color: #ff0000; }
  50% { color: #00ff00; }
  75% { color: #0000ff; }
  100% { color: #cc0044; }
`;

const Typewriter = ({ text, speed = 40 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayedText}</span>;
};

const Home = () => {
  // State to toggle between loading and actual image
  const [showImage, setShowImage] = useState(false);

  // Responsive layout adjustment
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const name = 'Divya Gandham';
  const nameColor = '#cc0044'; // Customize this color as needed

  //  loading to actual image
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 4500); // 4.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      bg="black"
      borderRadius={8}
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      p={6}
      animation={`${fadeIn} 2s ease-in`}
    >
      <Flex
        direction={flexDirection}
        w="full"
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        p={6}
        borderRadius="md"
        boxShadow="md"
        bg="rgba(0, 0, 0, 0.8)" // Slightly lighter black for content box
        border="1px solid rgba(255, 255, 255, 0.3)" // Border for a subtle effect
      >
        <Box flex="1" textAlign={{ base: 'center', md: 'left' }} marginRight={5}>
          <Heading as="h1" size="2xl" mb={4}>
            Hey! This is{' '}
            <span style={{ color: nameColor }}>
              <Typewriter speed={200} text={name} />
            </span>
          </Heading>
          <Text fontSize="lg" mb={4}>
            {/* <Typewriter
              text="I’m a full stack developer. Here, I share my projects, experiences, and more about myself."
              // speed={200} // Speed can be adjusted for different texts
            />
            <br></br>
            <Typewriter speed={100} text="Feel free to explore and get in touch!"/> */}
            As a versatile Frontend Developer, I build web and mobile apps with React.js and React Native. Skilled in Node.js for backend development, SQL for database management, and proficient in HTML, CSS, and JavaScript. I create responsive, user-friendly applications using modern frameworks and libraries.
            <br></br>
            Feel free to explore and get in touch!
          </Text>
          <Flex justifyContent={{ base: 'center', md: 'flex-start' }} mt={4}>
            <FaReact size="40px" color={nameColor} />
            <FaNodeJs size="40px" color={nameColor} ml={4} />
            <FaDatabase size="40px" color={nameColor} ml={4} />
          </Flex>
        </Box>
        {showImage ? (
          <Image
            src=""
            alt={name}
            boxSize={{ base: '200px', md: '200px' }}
            objectFit="cover"
            borderRadius="full"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)" // Image shadow
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.05)' }}
          />
        ) : (
          <Box
            boxSize={{ base: '200px', md: '250px' }}
            borderRadius="full"
            backgroundSize="200% 200%"
            animation={`${hackingAnimation} 1.5s linear infinite`}
            alignContent="center"
            alignItems="center"
            display="flex"
            justifyContent="center"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)" // Shadow for loading animation
          >
            <Text
              fontSize="md"
              fontWeight="bold"
              animation={`${textHackingAnimation} 0.7s linear infinite`}
            >
              Loading
              <Typewriter speed={110} text="..............."/>
            </Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Home;