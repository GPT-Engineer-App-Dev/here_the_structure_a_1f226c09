import React from "react";
import { Box, Text, VStack, HStack, Input, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" w="full" py={10} bg="brand.600" color="brand.800">
      <VStack spacing={6} alignItems="center">
        <HStack spacing={4}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Über uns</Button>
          <Button variant="ghost">Dienstleistungen</Button>
          <Button variant="ghost">Projekte</Button>
          <Button variant="ghost">Für Unternehmen</Button>
          <Button variant="ghost">Ressourcen</Button>
          <Button variant="ghost">Kontakt</Button>
        </HStack>
        <HStack spacing={4}>
          <Button variant="ghost">Datenschutzrichtlinie</Button>
          <Button variant="ghost">Impressum</Button>
          <Button variant="ghost">Nutzungsbedingungen</Button>
        </HStack>
        <HStack spacing={4}>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </HStack>
        <HStack>
          <Input placeholder="E-Mail-Adresse" />
          <Button>Abonnieren</Button>
        </HStack>
        <Text>&copy; {new Date().getFullYear()} ProBau. All rights reserved.</Text>
      </VStack>
    </Box>
  );
};

export default Footer;