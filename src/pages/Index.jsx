import React from "react";
import { Box, Button, Container, Heading, Text, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { FaMobileAlt } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  const bg = useColorModeValue("brand.600", "brand.700"); // ProBau Light Gray for light mode and ProBau Dark Gray for dark mode
  const color = useColorModeValue("brand.700", "brand.800"); // ProBau Dark Gray for light mode and ProBau White for dark mode

  return (
    <Container maxW="container.xl" p={0}>
      <VStack w="full" minH="100vh" spacing={10} alignItems="stretch">
        <Header />
        <Box w="full" py={10}>
          <VStack spacing={3} w="full" maxW="lg" alignItems="flex-start">
            <Heading color={color} size="2xl">
              Simplify Your Life with ProBau
            </Heading>
            <Text fontSize="lg" color={color}>
              ProBau is your ultimate platform for managing tasks, connecting with people, and achieving your goals.
            </Text>
            <Button size="lg" leftIcon={<FaMobileAlt />} bgColor="brand.900" color="brand.800" variant="solid">
              Download the App
            </Button>
          </VStack>
        </Box>
        <Box w="full" flex={1}>
          <Image src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHAlMjBtb2NrdXB8ZW58MHx8fHwxNzA4OTc4NjIyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="App Mockup" borderRadius="lg" shadow="2xl" maxH="400px" w="full" objectFit="contain" />
        </Box>
        <Footer />
      </VStack>
    </Container>
  );
};  

export default Index;
