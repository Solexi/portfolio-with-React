import { Button, useColorMode, IconButton, Spacer} from '@chakra-ui/react'
import React from 'react'
import {FaSun, FaMoon, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className='n-name'> Solexi </div>
        {/* <Heading ml="" size="md" fontWeight="semibold" color="chocolate">
          Solexi
        </Heading> */}
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Experience</li>
            <li>Services</li>
          </ul>
        </div>
        <Button>Contact Me</Button>
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          backgroundColor={"chocolate"}
          border="black"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound="true"
          backgroundColor={"chocolate"}
          border="black"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          backgroundColor={"chocolate"}
          border="black"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          backgroundColor={"chocolate"}
          border="black"
          onClick={toggleColorMode}
        ></IconButton>
      </div>
    </div>
  ); 
}

export default Navbar