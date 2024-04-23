import React from "react";
import { Button, Heading, HStack, Flex, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const bg = useColorModeValue("brand.600", "brand.700");
  const color = useColorModeValue("brand.700", "brand.800");

  return (
    <Flex as="nav" w="full" justifyContent="space-between" alignItems="center">
      <Heading size="lg" color={color}>
        ProBau
      </Heading>
      <HStack spacing={4}>
        <Button as={Link} to="/" variant="ghost" color={color}>
          Home
        </Button>
        <Button as={Link} to="/ueber-uns" variant="ghost" color={color}>
          Über uns
        </Button>
        <Button variant="ghost" color={color}>
          Dienstleistungen
        </Button>
        <Button variant="ghost" color={color}>
          Projekte
        </Button>
        <Button variant="ghost" color={color}>
          Für Unternehmen
        </Button>
        <Button variant="ghost" color={color}>
          Ressourcen
        </Button>
        <Button variant="ghost" color={color}>
          Kontakt
        </Button>
      </HStack>
      <Button variant="solid" bgColor="brand.900" color="brand.800" rightIcon={<FaArrowRight />}>
        Get Started
      </Button>
    </Flex>
  );
};

export default Header;