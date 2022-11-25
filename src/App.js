import { Flex, Heading, IconButton, Spacer, useColorMode, VStack } from '@chakra-ui/react';
import {FaSun, FaMoon, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import Header from './components/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile.js';
import Social from './components/Social.js';

function App() {
  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack padding={5}>
      <Flex w="100%">
        {/* <Navbar/> */}
        <Heading ml='' size="md" fontWeight="semibold" color="chocolate">Solexi</Heading>
        <Spacer/>
        <IconButton icon={<FaLinkedin />} isRound='true' backgroundColor={'chocolate'} border='black' onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound='true' backgroundColor={'chocolate'} border='black' onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' backgroundColor={'chocolate'} border='black' onClick={toggleColorMode}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' backgroundColor={'chocolate'} border='black' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
