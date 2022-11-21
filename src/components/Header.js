import { useMediaQuery, useColorMode, Stack, Circle, Flex, Box, Image, Text, Button} from '@chakra-ui/react';
import React from 'react'

function Header() {
  const {colorMode} = useColorMode();
  const isDark = colorMode === "dark";

  const{isNotSmallScreen} = useMediaQuery("(min-width: 600px)");

  return (
    <Stack>
      <Circle position='absolute' bg = 'chocolate' opacity='0.1' w = "300px" h = "300px" alignSelf= "flex-end"></Circle>
      <Flex direction = {isNotSmallScreen? 'row': 'column'} spacing = '200px' p = {isNotSmallScreen? "32" : "0"} alignSelf = {"flex-start"}>
        <Box mt={isNotSmallScreen? "0" : 16} align = "flex-start">
          <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
          <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r, yellow.400, brown, chocolate)" bgClip= "text">Sophia Ezeh</Text>
          <Text color={isDark? "gray.200" : "gray.700"}>React-js, Chakra-ui, Visual Studio Code, React-native, Python, TypeScript, Java, Bootstrap, C++, C, Blockchain Development🗣️</Text>
          <Button mt={8} colorScheme = "yellow" onClick={() => window.open("https://github.com/Solexi")}>Hire Me </Button>
        </Box>
        <Image 
          alignSelf= "center"  
          mt = {isNotSmallScreen? "0" : "12"} 
          mb = {isNotSmallScreen? "0" : "12"} 
          borderRadius = 'full' 
          backgroundColor= "transparent" 
          boxShadow={"lg"} 
          boxSize = "300px" 
          src = "https://avatars.githubusercontent.com/u/82169299?v=4"
        />
      </Flex>
    </Stack>
  )
}

export default Header