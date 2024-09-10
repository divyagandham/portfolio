import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Link,
  SimpleGrid,
  Stack,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const projects = [
  {
    title: 'Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)',
    image: 'images/nxttrendz.png',
    images: ['images/nxttrendz.png', 'images/nxttrendz.png', 'images/nxttrendz.png', 'images/nxttrendz.png', 'images/nxttrendz.png', 'images/nxttrendz.png'],
    shortDescription: 'Developed Nxt Trendz, an eCommerce clone like Amazon and Flipkart, with user login, product listing, search, filters, and sorting.',
    fullDescription: [
      'Created pages and routes for login, products, and product details using React Router.',
      'Implemented user authentication and authorization via a login API, with filters as query parameters in product API calls.',
      'Persisted user login state with JWT in local storage, authorizing subsequent API calls.',
    ],
    technologies: ['React JS, JavaScript, CSS, Bootstrap, REST API Calls, JWT Token'],
    liveLink: 'https://divyaaanxtrendz.ccbp.tech/',
  },
  {
    title: 'Jobby App',
    image: 'images/jobbyapp.png',
    images: ['images/jobbyapp.png', 'images/jobbyapp.png', 'images/jobbyapp.png', 'images/jobbyapp.png', 'images/jobbyapp.png', 'images/jobbyapp.png'],
    shortDescription: 'Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc',
    fullDescription: [
      'Implemented user authentication via a login API, with JWT stored for session persistence and authorization.',
      'Authenticating by taking username, password and doing login post HTTP API Call.',
      'Managed routing with React Router for Login, Home, Jobs, and Job details pages.',
      'Applied filters and search through query parameters in jobs API calls.',
      'Implemented protected routes to redirect unauthenticated users to the login page.',
    ],
    technologies: ['React JS, JavaScript, CSS, Bootstrap, REST API Calls, JWT Token'],
    liveLink: 'https://divyaajobbyapp.ccbp.tech/',
  },
  {
    title: 'Emoji Game',
    image: 'images/emoji.png',
    images: ['images/emoji.png', 'images/emoji.png', 'images/emoji.png', 'images/emoji.png', 'images/emoji.png', 'images/emoji.png'],
    shortDescription: 'Created a responsive Emoji Memory Game where users win by clicking unique emojis until all are clicked, with emojis randomized after each click.',
    fullDescription: [
      'Displayed the emoji list using React components, props, conditional rendering, and CSS for styling.',
      'Managed game states like emoji list, win, and loss using state variables and conditional rendering.'
    ],
    technologies: ['React JS, JavaScript, CSS, Bootstrap'],
    liveLink: 'https://divyaaemojigame.ccbp.tech/',
  },
  {
    title: 'Wikipedia Search Application',
    image: 'images/wikipedia.png',
    images: ['images/wikipedia.png', 'images/wikipedia.png', 'images/wikipedia.png', 'images/wikipedia.png', 'images/wikipedia.png', 'images/wikipedia.png'],
    shortDescription: 'Developed a custom Wikipedia Search App where users can search, view curated results, and access detailed Wikipedia articles.',
    fullDescription: [
      'Displayed search results as HTML lists with hyperlinks, styled with CSS/Bootstrap, and ensured responsiveness using Flexbox and CSS Box Model.',
      'Fetched results asynchronously using a fetch GET API call, with links opening in a new tab via the target attribute.'
    ],
    technologies: ['JavaScript, HTML, CSS, REST API Calls, Bootstrap'],
    liveLink: 'https://divyawikipediaa.ccbp.tech/',
  },
  {
    title: 'Money Manager',
    image: 'images/money.png',
    images: ['images/money.png', 'images/money.png', 'images/money.png', 'images/money.png', 'images/money.png', 'images/money.png',],
    shortDescription: 'Created a responsive Money Manager platform where users can add their income, expenses and balance.',
    fullDescription: [
      'Implemented financial CRUD operations with React’s state management, updating the UI in real-time.',
      'Utilized React hooks for managing state and local storage for persisting data across page reloads.'
    ],
    technologies: ['React JS, JavaScript, CSS, Bootstrap'],
    liveLink: 'https://divyaamoneyy.ccbp.tech/',
  },
  {
    title: 'Todos Application',
    image: 'images/todo.png',
    images: ['images/todo.png', 'images/todo.png', 'images/todo.png', 'images/todo.png', 'images/todo.png', 'images/todo.png'],
    shortDescription: 'Developed persistent todo application with CRUD operations to track list of tasks.',
    fullDescription: [
      'Displayed list of todos with HTML list elements, styled todo list using CSS, Bootstrap.',
      'Implemented todo crud operations by using JavaScript event listeners and updated UI dynamically by using JavaScript DOM operations.',
      'Used Arrays, Objects and their methods during todolist CRUD Operations, Persisted todo list state on page reloads using local storage methods.'
    ],
    technologies: ['JavaScript, HTML. CSS, Bootstrap'],
    liveLink: 'https://divyaatodo.ccbp.tech/',
  },

];

const ProjectShowcase = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    onOpen();
  };
  // const gridTemplateColumns = useBreakpointValue({
  //   base: 'repeat(2, 1fr)', // 2 columns for smaller screens
  //   md: 'repeat(3, 1fr)',   // 3 columns for medium screens
  //   lg: 'repeat(3, 1fr)',   // 3 columns for large screens
  //   xl: 'repeat(3, 1fr)',   // 3 columns for extra large screens
  // });

  return (
    <Box p={[4, 6, 12]} color="white">
      <Heading mb={8} fontSize={['2xl', '3xl', '5xl']} textAlign="center">
        Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {projects.map((project, index) => (
          <Box
            key={index}
            bg="black"
            borderRadius="md"
            p={4}
            boxShadow="md"
            _hover={{ transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
            cursor="pointer"
            onClick={() => handleProjectClick(project)}
            style={{ boxShadow: '0 3px 10px indigo' }} // #cc0044'
          >
            <Image src={project.image} alt={project.title} borderRadius="md" mb={4} />
            <Heading as="h3" fontSize="xl" mb={2} color="#cc0044">
              {project.title}
            </Heading>
            <Text>{project.shortDescription}</Text>
          </Box>
        ))}
      </SimpleGrid>

      {selectedProject && (
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent bg="gray.700" color="white">
            <ModalHeader mt={4}>{selectedProject.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={selectedProject.image} alt={selectedProject.title} borderRadius="md" mb={4} />
              <Stack spacing={3}>
                {selectedProject.fullDescription.map((point, idx) => (
                  <Text key={idx}>&#8226; {point}</Text>
                ))}
              </Stack>
              <Text fontWeight="bold" mt={4} mb={2} color="black">
                Technologies Used:
              </Text>
              <Text>{selectedProject.technologies.join(', ')}</Text>
            </ModalBody>

            <ModalFooter>
              <Link href={selectedProject.liveLink} isExternal>
                <Button
                  variant="outline"
                  rightIcon={<ExternalLinkIcon />}
                  borderColor="#cc0044"
                  color="#cc0044"
                  _hover={{ bg: "#cc0044", color: "black" }}
                >
                  View Live
                </Button>
              </Link>
              <Button ml={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        // <Modal isOpen={isOpen} onClose={onClose} size="6xl"> {/* Increased modal size to '6xl' */}
        //   <ModalOverlay />
        //   <ModalContent bg="gray.700" color="white"> {/* Maximum width and height for responsiveness */}
        //     <Flex direction="row"
        //       // display={['none', 'none', 'flex']} // Hide on mobile/tablet, show on desktop
        //       // justifyContent="space-between"
        //       alignItems="center"
        //       rowGap={10}
        //       >
        //       <div><ModalHeader mt={4}>{selectedProject.title}</ModalHeader></div>
        //       <Link href={selectedProject.liveLink} isExternal>
        //         <Button colorScheme="red" variant="outline" mt={5} rightIcon={<ExternalLinkIcon />}>
        //           View Live
        //         </Button>
        //       </Link>
        //     </Flex>
        //     <ModalCloseButton />
        //     <ModalBody>
        //       {/* Responsive grid layout for images */}
        //       <Grid templateColumns={gridTemplateColumns} gap={4} mb={4}>
        //         {selectedProject.images.map((image, idx) => (
        //           <GridItem key={idx}>
        //             <Image src={image} alt={selectedProject.title} borderRadius="md" w="100%" h="auto" />
        //           </GridItem>
        //         ))}
        //       </Grid>
        //       {/* Project description */}
        //       <Stack spacing={3}>
        //         {selectedProject.fullDescription.map((point, idx) => (
        //           <Text key={idx}>&#8226; {point}</Text>
        //         ))}
        //       </Stack>
        //       <Text fontWeight="bold" mt={4} mb={2} color="gray.300">
        //         Technologies Used:
        //       </Text>
        //       <Text>{selectedProject.technologies.join(', ')}</Text>
        //     </ModalBody>

        //     <ModalFooter>
        //       <Button ml={3} onClick={onClose}>
        //         Close
        //       </Button>
        //     </ModalFooter>
        //   </ModalContent>
        // </Modal>
      )}
    </Box>
  );
};

export default ProjectShowcase;



