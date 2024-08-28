import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);

// import React from 'react';
// import { Box, Heading, Text, Link, SimpleGrid, Stack, List, ListItem, ListIcon, Button } from '@chakra-ui/react';
// import { ExternalLinkIcon } from '@chakra-ui/icons';
// import { MdFiberManualRecord } from 'react-icons/md';

// const projects = [
//   {
//     title: 'Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)',
//     description: [
//       'Developed Nxt Trendz, an eCommerce clone like Amazon and Flipkart, with user login, product listing, search, filters, and sorting.',
//       'Created pages and routes for login, products, and product details using React Router.',
//       'Implemented user authentication and authorization via a login API, with filters as query parameters in product API calls.',
//       'Persisted user login state with JWT in local storage, authorizing subsequent API calls.'
//     ],
//     technologies: ['React JS, JavaScript, CSS, Bootstrap, REST API Calls, JWT Token'],
//     liveLink: 'https://divyaaanxtrendz.ccbp.tech/',
//   },
//   {
//     title: 'Jobby App',
//     description: [
//       'Developed Jobby App with user login, job listings, search by title, salary filters, and employment type.',
//       'Implemented user authentication via a login API, with JWT stored for session persistence and authorization.',
//       'Authenticating by taking username, password and doing login post HTTP API Call.',
//       // 'Managed routing with React Router for Login, Home, Jobs, and Job details pages.',
//       'Applied filters and search through query parameters in jobs API calls.',
//       'Implemented protected routes to redirect unauthenticated users to the login page.'
//     ],
//     technologies: ['React JS, JavaScript, CSS, Bootstrap, REST API Calls, JWT Token'],
//     liveLink: 'https://divyaajobbyapp.ccbp.tech/',
//   },
//   {
//     title: 'Wikipedia Search Application',
//     description: [
//       'Developed a custom Wikipedia Search App where users can search, view curated results, and access detailed Wikipedia articles',
//       'Displayed search results as HTML lists with hyperlinks, styled with CSS/Bootstrap, and ensured responsiveness using Flexbox and CSS Box Model.',
//       'Fetched results asynchronously using a fetch GET API call, with links opening in a new tab via the target attribute.'
//     ],
//     technologies: ['JavaScript, HTML, CSS, REST API Calls, Bootstrap'],
//     liveLink: 'https://divyawikipediaa.ccbp.tech/',
//   },
//   {
//     title: 'Emoji Game',
//     description: [
//       'Created a responsive Emoji Memory Game where users win by clicking unique emojis until all are clicked, with emojis randomized after each click.',
//       'Displayed the emoji list using React components, props, conditional rendering, and CSS for styling.',
//       'Managed game states like emoji list, win, and loss using state variables and conditional rendering.'
// ],
//   technologies: ['React JS, JavaScript, CSS, Bootstrap'],
//   liveLink: 'https://divyaaemojigame.ccbp.tech/',
//   },
//   {
//     title: 'Food Munch',
//     description: [
//       'Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers',
//       'Designed page using following HTML structure elements like li, header, article, footer elements and different bootstrap components to show different sections in the website and different bootstrap classes for responsiveness through mobile-first approach.',
//       'Implemented product youtube videos by using bootstrap embed and model components.'
// ],
//   technologies: ['JavaScript, HTML, CSS, Bootstrap'],
//   liveLink: 'https://divyafood.ccbp.tech/',
//   },

//   // Add more projects as needed
// ];

// const ProjectShowcase = () => {
//   return (
//     <Box p={[4, 6, 12]} bg="gray.800" color="white">
//       <Heading mb={8} fontSize={['2xl', '3xl', '5xl']} textAlign="center">
//         My Projects
//       </Heading>
//       <SimpleGrid columns={[1, 1, 2]} spacing={10}>
//         {projects.map((project, index) => (
//           <Box
//             key={index}
//             bg="black"
//             borderRadius="md"
//             p={6}
//             boxShadow="md"
//             _hover={{ transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
//           >
//             <Heading as="h3" fontSize="xl" mb={4} color="#cc0044">
//               {project.title}
//             </Heading>
//             <List spacing={3} mb={4}>
//               {project.description.map((point, idx) => (
//                 <ListItem key={idx}>
//                   <ListIcon as={MdFiberManualRecord} color="white" />
//                   {point}
//                 </ListItem>
//               ))}
//             </List>
//             <Text fontWeight="bold" mt={4} mb={2} color="blue.300">
//               Technologies Used:
//             </Text>
//             <Text mb={4}>{project.technologies.join(', ')}</Text>
//             <Stack direction="row" spacing={4}>
//               <Link href={project.liveLink} isExternal>
//                 <Button colorScheme="red" variant="outline" rightIcon={<ExternalLinkIcon />}>
//                   View Live
//                 </Button>
//               </Link>
//             </Stack>
//           </Box>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default ProjectShowcase;
