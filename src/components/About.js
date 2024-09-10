import React, { useRef } from 'react';
import {
  Box,
  Button,
  Heading,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Stack,
  Link,
  IconButton,
  useToast,
  Text,
  Flex,
} from '@chakra-ui/react';
import { FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const About = () => {
  const form = useRef();
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ai6gzmn', 'template_y1cy8nc', form.current, 'kEw0ZERVvwwVQ6wSq')
      .then(
        (result) => {
          toast({
            title: 'Message Sent.',
            description: "We'll get back to you soon.",
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
          form.current.reset();
        },
        (error) => {
          toast({
            title: 'An error occurred.',
            description: 'Unable to send your message. Please try again later.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <Box p={[4, 6, 12]} bg="black" color="white" maxW="800px" mx="auto" borderRadius={8} >
      <Heading mb={8} fontSize={['2xl', '3xl', '5xl']} textAlign="center">
        Contact
      </Heading>

      <Stack spacing={4} mb={8} align="center">
        <Text fontSize="lg">
          Feel free to reach out to me for any questions or opportunities!
        </Text>
        <Stack direction="row" spacing={6}>
          <Link href="http://linkedin.com/in/divyagandham" isExternal>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="outline"
              colorScheme="black"
              size="lg"
            />
          </Link>
          <Link href="mailto:divyagandham13@gmail.com" isExternal>
            <IconButton
              aria-label="Gmail"
              icon={<FaEnvelope />}
              variant="outline"
              colorScheme="black"
              size="lg"
            />
          </Link>
          <Link href="/DivyaGandhamResume.pdf" download isExternal>
            <IconButton
              aria-label="Download Resume"
              icon={<FaFileDownload />}
              variant="outline"
              colorScheme="black"
              size="lg"
            />
          </Link>
        </Stack>
      </Stack>

      <Box as="form" ref={form} onSubmit={sendEmail} bg="black" p={8} borderRadius="md" style={{ boxShadow: '0 3px 10px indigo' }}>
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Your Name</FormLabel>
            <Input type="text" name="user_name" bg="gray.800" border="none" _focus={{ border: '1px solid white' }} />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Your Email</FormLabel>
            <Input type="email" name="user_email" bg="gray.800" border="none" _focus={{ border: '1px solid white' }} />
          </FormControl>

          <FormControl id="message" isRequired>
            <FormLabel>Your Message</FormLabel>
            <Textarea name="message" rows={6} bg="gray.800" border="none" _focus={{ border: '1px solid white' }} />
          </FormControl>

          <Flex justify="center">
            <Button
              type="submit"
              size="sm"
              bg="#cc0044"
              color="black"
              _hover={{ bg: '#b3003b' }}
              _active={{ bg: '#990033' }}
            >
              Send Message
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
