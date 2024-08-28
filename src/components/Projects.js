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
    shortDescription: 'Developed Jobby App with user login, job listings, search by title, salary filters, and employment type.',
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
    shortDescription: 'Created a responsive Money Manager platform where users can add their income, expenses and balance.',
    fullDescription: [
      'Displayed the emoji list using React components, props, conditional rendering, and CSS for styling.',
      'Managed game states like emoji list, win, and loss using state variables and conditional rendering.'
    ],
    technologies: ['React JS, JavaScript, CSS, Bootstrap'],
    liveLink: 'https://divyaamoneyy.ccbp.tech/',
  },
  {
    title: 'Emoji Game',
    image: 'images/emoji.png', 
    shortDescription: 'Created a responsive Emoji Memory Game where users win by clicking unique emojis until all are clicked, with emojis randomized after each click.',
    fullDescription: [
      'Displayed the emoji list using React components, props, conditional rendering, and CSS for styling.',
      'Managed game states like emoji list, win, and loss using state variables and conditional rendering.'
    ],
    technologies: ['React JS, JavaScript, CSS, Bootstrap'],
    liveLink: 'https://divyaaemojigame.ccbp.tech/',
  },
 
];

const ProjectShowcase = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box p={[4, 6, 12]} bg="gray.800" color="white">
      <Heading mb={8} fontSize={['2xl', '3xl', '5xl']} textAlign="center">
        My Projects
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
              <Text fontWeight="bold" mt={4} mb={2} color="gray.300">
                Technologies Used:
              </Text>
              <Text>{selectedProject.technologies.join(', ')}</Text>
            </ModalBody>

            <ModalFooter>
              <Link href={selectedProject.liveLink} isExternal>
                <Button colorScheme="red" variant="outline" rightIcon={<ExternalLinkIcon />}>
                  View Live
                </Button>
              </Link>
              <Button ml={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default ProjectShowcase;



