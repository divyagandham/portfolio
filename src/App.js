import React, { useRef, useState, useEffect } from 'react';
import { Box, Flex, Link, Spacer, IconButton, useDisclosure, Text } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Home from './components/Home';
import Expertise from './components/Expertise'
import Experience from './components/Experience';
import Projects from './components/Projects'
import About from './components/About'

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const homeRef = useRef(null);
  const expertiseRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);

  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (ref, section) => {
    const headerOffset = 80; // Adjust based on your header's height
    const elementPosition = ref.current.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    setActiveSection(section);

    if (isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const headerOffset = 80; // Adjust based on your header's height
      const scrollPosition = window.scrollY + headerOffset + 1; // Offset to ensure proper detection

      const sections = [
        { ref: homeRef, name: 'home' },
        { ref: expertiseRef, name: 'expertise' },
        { ref: projectsRef, name: 'projects' },
        { ref: experienceRef, name: 'experience' },
        { ref: aboutRef, name: 'about' },
      ];

      const currentSection = sections.find(({ ref }) => {
        const { offsetTop, clientHeight } = ref.current;
        return scrollPosition >= offsetTop && scrollPosition < offsetTop + clientHeight;
      });

      if (currentSection && currentSection.name !== activeSection) {
        setActiveSection(currentSection.name);
      }
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [activeSection]);

  return (
    <Box>
      {/* Global styles for the custom scrollbar and cursor */}
      <Global
        styles={`
          body {
            cursor: url('src\cursor.svg') 16 16, auto; /* Replace 'cursor.svg' with your actual path */
          }

          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #111; /* Background of the scrollbar track */
          }
          
          ::-webkit-scrollbar-thumb {
            background-color: #cc0044; /* Color of the scrollbar thumb */
            border-radius: 20px; /* Round the scrollbar thumb */
            border: 2px solid #111; /* Padding around the thumb */
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background-color: #ff3366; /* Change color on hover */
          }
          
          /* Firefox scrollbar styles */
          html {
            scrollbar-width: thin;
            scrollbar-color: grey #1111;
          }
        `}
      />

      <Flex
        as="header"
        bg="black"
        p={4}
        color="white"
        alignItems="center"
        position="fixed"
        top={0}
        width="100%"
        zIndex={1}
      >
        {/* Display name only in the Home section */}
        {activeSection === 'home' && (
          <Text
            ml={4}
            color="#cc0044" // Same color used for highlighting
            fontWeight="bold"
            fontSize="lg"
            cursor="pointer"
          >
            Divya Gandham <span style={{ color: 'white' }}>.</span> _
          </Text>
        )}
        <Spacer />
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            aria-label="Open Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
            variant="outline"
            color="white"
            _hover={{
              bg: '#cc0044',
              color: 'white',
              boxShadow: '0 4px 8px rgba(204, 0, 68, 0.5)',
              transform: 'scale(1.05)',
            }}
          />
        </Box>
        <Flex
          as="nav"
          direction={{ base: 'column', md: 'row' }}
          display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
          alignItems="center"
          mt={2}
          mr={500}
        >
          {[
            { name: 'Home', ref: homeRef, id: 'home' },
            { name: 'Expertise', ref: expertiseRef, id: 'expertise' },
            { name: 'Projects', ref: projectsRef, id: 'projects' },
            { name: 'Experience', ref: experienceRef, id: 'experience' },
            { name: 'Contact', ref: aboutRef, id: 'about' },
          ].map(({ name, ref, id }) => (
            <Link
              key={id}
              p={2}
              m={2}
              onClick={() => handleScroll(ref, id)}
              sx={{
                transition: 'transform 0.2s, box-shadow 0.2s',
                color: activeSection === id ? '#cc0044' : 'white',
                _hover: {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 8px rgba(204, 0, 68, 0.5)',
                  color: '#cc0044',
                  //  backgroundColor:'#cc0044'
                },
              }}
            >
              {name}
            </Link>
          ))}
        </Flex>
      </Flex>
      <Box p={4}>
        <Box ref={homeRef} minHeight="100vh" pt="220px"
        >
          {/* <h1>Home</h1> */}
          <Home />
        </Box>
        <Box ref={expertiseRef} minHeight="100vh" pt="80px">
          <Expertise />
        </Box>
        <Box ref={projectsRef} minHeight="100vh" pt="30px">
          <Projects />
        </Box>
        <Box ref={experienceRef} minHeight="100vh" pt="20px">
          <Experience />
        </Box>
        <Box ref={aboutRef} minHeight="100vh" pt="10px">
          <About />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
