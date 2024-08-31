// import React, { useState, useEffect, useRef } from 'react';
// import { Box, Flex, Text, Heading, Divider, keyframes } from '@chakra-ui/react';
// import { FaLaptopCode, FaReact, FaMobileAlt } from 'react-icons/fa';

// // Keyframe animations
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const rotate = keyframes`
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// `;

// const Expertise = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const currentRef = sectionRef.current;

//     if (currentRef) {
//       observer.observe(currentRef);
//     }

//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef);
//       }
//     };
//   }, []);

//   const ExpertiseContent = ({ icon, title, description, animationDelay }) => (
//     <Box
//       flex="1"
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       p={[12, 12, 12]}
//       animation={isVisible ? `${fadeIn} ${animationDelay}s ease-in-out forwards` : ''}
//       opacity={0}
//       w="100%"
//     >
//       {icon}
//       <Heading as="h3" fontSize={['lg', 'xl']} mt={4} mb={2}>
//         <Text as="span" textDecoration="underline" textDecorationColor="#cc0044">
//           {title}
//         </Text>
//       </Heading>
//       <Divider borderColor="white" my={4} />
//       <Flex direction="row" p={1}>
//         <Flex direction="column">
//           <div style={{ fontSize: 14, color: 'grey' }}>{'<h3>'}</div>
//           <Divider orientation="vertical" borderColor="grey" height={20} my={0} mx={4} />
//           <div style={{ fontSize: 14, color: 'grey' }}>{'</h3>'}</div>
//         </Flex>
//         <Text fontSize="sm" textAlign="center" lineHeight="1.5" p={1} width={[200, 250]} mt={2}>
//           {description}
//         </Text>
//       </Flex>
//     </Box>
//   );

//   return (
//     <Box
//       ref={sectionRef}
//       color="white"
//       p={[6, 6, 10]}
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       animation={isVisible ? `${fadeIn} 1s ease-in-out forwards` : ''}
//       opacity={0}
//     >
//       <Heading mb={8} fontSize={['2xl', '2xl', '5xl']} textAlign="center">
//         My Expertise
//       </Heading>

//       {/* Desktop view: Single box with vertical dividers */}
//       <Flex
//         direction="row"
//         display={['none', 'none', 'flex']} // Hide on mobile/tablet, show on desktop
//         justifyContent="space-between"
//         alignItems="center"
//         w="95%"
//         border="1px solid white"
//         borderRadius="md"
//         overflow="hidden"
//         position="relative"
//         backgroundColor='black'
//       >
//         <ExpertiseContent
//           icon={<FaLaptopCode size={40} color="#cc0044" />}
//           title="Software Development"
//           description="Strong skills in programming languages like JavaScript, Python with experience in software design patterns and version control systems (Git)."
//           animationDelay={1.5}
//         />
//         {/* Vertical Divider */}
//         <Box
//           height="100%"  // Adjust this height to match your content
//           width="1px"
//           backgroundColor="white"
//           position="absolute"
//           left="33.33%" // Position between first and second boxes
//         />
//         <ExpertiseContent
//           icon={
//             <Box animation={isVisible ? `${rotate} 3s linear` : ''}>
//               <FaReact size={40} color="#cc0044" />
//             </Box>
//           }
//           title="Frontend Dev React"
//           description="Expertise in HTML, CSS, JavaScript (React), responsive design, and UX/UI principles for creating interactive and visually appealing web interfaces."
//           animationDelay={1.7}
//         />
//         {/* Vertical Divider */}
//         <Box
//           height="100%"  // Adjust this height to match your content
//           width="1px"
//           backgroundColor="white"
//           position="absolute"
//           left="66.66%" // Position between second and third boxes
          
//         />
//         <ExpertiseContent
//           icon={<FaMobileAlt size={40} color="#cc0044" />}
//           title="App Dev Android, iOS"
//           description="Proficient in mobile and cross-platform framework like React Native, with a focus on performance optimization and seamless user experiences."
//           animationDelay={1.9}
//         />
//       </Flex>

//       {/* Mobile view: Separate boxes */}
//       <Flex
//         direction="column"
//         display={['flex', 'flex', 'none']} // Show on mobile/tablet, hide on desktop
//         w="100%"
//         alignItems="center"
//       >
//         <Box border="1px solid white" borderRadius="md" mb={6} w="100%" backgroundColor='black'>
//           <ExpertiseContent
//             icon={<FaLaptopCode size={40} color="#cc0044" />}
//             title="Software Development"
//             description="Strong skills in programming languages like JavaScript, Python with experience in software design patterns and version control systems (Git)."
//             animationDelay={1.5}
//           />
//         </Box>
//         <Box border="1px solid white" borderRadius="md" mb={6} w="100%" backgroundColor='black'>
//           <ExpertiseContent
//             icon={
//               <Box animation={isVisible ? `${rotate} 3s linear` : ''}>
//                 <FaReact size={40} color="#cc0044" />
//               </Box>
//             }
//             title="Frontend Dev React"
//             description="Expertise in HTML, CSS, JavaScript (React), responsive design, and UX/UI principles for creating interactive and visually appealing web interfaces."
//             animationDelay={1.7}
//           />
//         </Box>
//         <Box border="1px solid white" borderRadius="md" w="100%" backgroundColor='black'>
//           <ExpertiseContent
//             icon={<FaMobileAlt size={40} color="#cc0044" />}
//             title="App Dev Android, iOS"
//             description="Proficient in mobile and cross-platform framework like React Native, with a focus on performance optimization and seamless user experiences."
//             animationDelay={1.9}
//           />
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default Expertise;


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

  const ExpertiseContent = ({ icon, title, description, animationDelay }) => (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={[6, 8, 2, 4]} // Increase padding for larger screens
      animation={isVisible ? `${fadeIn} ${animationDelay}s ease-in-out forwards` : ''}
      opacity={0}
      w="100%"
      h="100%"
    >
      {icon}
      <Heading as="h3" fontSize={['lg', 'xl', '2xl', '3xl']} mt={4} mb={2} textAlign="center">
        <Text as="span" textDecoration="underline" textDecorationColor="#cc0044">
          {title}
        </Text>
      </Heading>
      <Divider borderColor="white" my={4} />
      <Flex direction="row" p={1} justifyContent="center">
        <Flex direction="column" alignItems="center" mr={4}>
          <div style={{ fontSize: 14, color: 'grey' }}>{'<h3>'}</div>
          <Divider orientation="vertical" borderColor="grey" height={[28, 20, 36]} />
          <div style={{ fontSize: 14, color: 'grey' }}>{'</h3>'}</div>
        </Flex>
        <Text fontSize="md" textAlign="left" lineHeight="1.5" width={['90%', '80%', '70%', '60%']} mt={1}>
          {description}
        </Text>
      </Flex>
    </Box>
  );

  return (
    <Box
      ref={sectionRef}
      color="white"
      p={[6, 6, 8, 10]} // Adjust padding for larger screens
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      animation={isVisible ? `${fadeIn} 1s ease-in-out forwards` : ''}
      opacity={0}
    >
      <Heading mb={8} fontSize={['2xl', '2xl', '4xl', '5xl']} textAlign="center">
        My Expertise
      </Heading>

      {/* Container for all views */}
      <Flex
        direction={['column', 'column', 'row']} // Column for mobile/tablet, row for desktop
        wrap="wrap" // Ensure boxes wrap on smaller screens
        justifyContent="center"
        alignItems="stretch" // Ensure boxes stretch to fill container height
        w="100%"
        maxW="1200px" // Adjust to fit your design
        spacing={6}
      >
        {/* Box 1 */}
        <Box
          border="1px solid white"
          borderRadius="md"
          mb={[6, 6, 0]} // Margin bottom for mobile/tablet
          mr={[0, 0, 6]} // Margin right for desktop
          w={['90%', '90%', '30%']} // Width for mobile/tablet and desktop
          backgroundColor="black"
        >
          <ExpertiseContent
            icon={<FaLaptopCode size={50} color="#cc0044" />}
            title="Software Development"
            description="Strong skills in programming languages like JavaScript, Python with experience in software design patterns and version control systems (Git)."
            animationDelay={1.5}
          />
        </Box>

        {/* Box 2 */}
        <Box
          border="1px solid white"
          borderRadius="md"
          mb={[6, 6, 0]} // Margin bottom for mobile/tablet
          mr={[0, 0, 6]} // Margin right for desktop
          w={['90%', '90%', '30%']} // Width for mobile/tablet and desktop
          backgroundColor="black"
        >
          <ExpertiseContent
            icon={
              <Box animation={isVisible ? `${rotate} 3s linear` : ''}>
                <FaReact size={50} color="#cc0044" />
              </Box>
            }
            title="Frontend Dev ReactJS"
            description="Expertise in HTML, CSS, JavaScript (React), responsive design and UX/UI principles for creating interactive and visually appealing web interfaces."
            animationDelay={1.7}
          />
        </Box>

        {/* Box 3 */}
        <Box
          border="1px solid white"
          borderRadius="md"
          mb={[6, 6, 0]} // Margin bottom for mobile/tablet
          w={['90%', '90%', '30%']} // Width for mobile/tablet and desktop
          backgroundColor="black"
        >
          <ExpertiseContent
            icon={<FaMobileAlt size={50} color="#cc0044" />}
            title="App Dev Android, iOS"
            description="Proficient in mobile and cross-platform framework like React Native, with a focus on performance optimization and seamless user experiences."
            animationDelay={1.9}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Expertise;
