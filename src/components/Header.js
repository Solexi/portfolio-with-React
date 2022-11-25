import { useMediaQuery, useColorMode, Stack, Circle, Flex, Box, Image, Text, Button} from '@chakra-ui/react';
import React from 'react';
import Circles from './circleLine/Circle';
import FloatingDiv from './FloatingDiv/FloatingDiv';
import Crown from "c:/Users/Sophix/Desktop/myPortfolio/src/images/Crown.png"

function Header() {
  const {colorMode} = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Stack>
      <Circle position='absolute' bg = 'chocolate' opacity='0.1' w = "300px" h = "300px" alignSelf= "flex-end"/>
    <Box position= "absolute" pl={"1rem"} pt={isNotSmallerScreen? "1rem": "0rem"}>
      <Circles/>
    </Box>
    <Box position= "absolute" alignSelf={"flex-end"} pr={"0rem"} pt={isNotSmallerScreen? "27rem": "25rem"}>
      <Circles/>
    </Box>
      <Flex direction={isNotSmallerScreen? "row" : "column"} spacing = '300px' p = {isNotSmallerScreen? "32" : "0"} alignSelf = {"flex-start"}>
        <Box mt={isNotSmallerScreen? "0" : 16} align = "flex-start">
          <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
          <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, yellow.400, brown, chocolate)" bgClip= "text">Sophia Ezeh</Text>
          <Text color={isDark? "gray.200" : "gray.700"}> Frontend Developer with some level of experience in web design and web development. I work with React-js, Chakra-ui, Visual Studio Code, React-native, Python, TypeScript, Java, Bootstrap🗣️</Text>
          <Box>
            <Button  mr={10} mt={8} colorScheme = "yellow" onClick={() => window.open("https://linktr.ee/solexi")}>Contact Me </Button>
            <Button mt={8} colorScheme = "orange" onClick={() => window.open("https://docs.google.com/document/d/1Dus99YfCKERCpcRQb5uu7HvjqrMSePPT/edit?usp=share_link&ouid=105417749873022337086&rtpof=true&sd=true")}> Download CV </Button>
          </Box>
        </Box>
        <Image alignSelf="center" borderRadius="full"
                    mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"}
                    backgroundColor="blackAlpha.200" boxShadow="lg"
                    boxSize="300px" src = "https://avatars.githubusercontent.com/u/82169299?v=4" zIndex={1}/>
        <Box>
          <FloatingDiv image = {Crown} text1 = "Web" text2 = "Developer"/>
        </Box>
      </Flex>
    </Stack>
  )
}

export default Header

// alignSelf="center" mt={isNotSmallScreen ? "0" : "12"}
//                     mb={isNotSmallScreen ? "0" : "12"} borderRadius='full'
//                     backgroundColor="transparent" boxShadow="lg"
//                     boxSize="300px" src = "https://avatars.githubusercontent.com/u/82169299?v=4" />
// theblog.com