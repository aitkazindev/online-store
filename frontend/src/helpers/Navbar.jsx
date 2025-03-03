import React from 'react';
import { Container, Flex, Text,Link, HStack,Button } from "@chakra-ui/react"; 
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4} bg={useColorModeValue("gray.100", "gray.900")}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{ base: "column", sm: "row" }}>
      <Text
            bgGradient="linear(to-r, #ff0080, #7928CA)"
            bgClip="text"
            textColor="transparent"
            fontSize={{ base: "22px", sm: "28px" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            >
            
            <Link to="/">Product Store 🛒</Link>

      </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to="/create">
            <Button>
              <LuPlus fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
