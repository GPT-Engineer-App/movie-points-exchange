import { Box, Button, Container, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaCreditCard, FaPaypal, FaPlayCircle, FaUpload } from "react-icons/fa";

const Index = () => {
  // Mock movie data with prices
  const getRandomPrice = () => Math.floor(Math.random() * 10) + 1;
  const movies = new Array(50).fill(null).map((_, index) => ({
    title: `Lithuanian Movie ${index + 1}`,
    description: "Description of a Lithuanian Movie",
    image: "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMaXRodWFuaWFuJTIwbGFuZHNjYXBlfGVufDB8fHx8MTcwODYxODI0Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    price: getRandomPrice(),
  }));

  return (
    <Container maxW="container.xl" p={4}>
      <Heading mb={6}>Lithuanian Movie Streaming</Heading>

      <VStack spacing={4} align="stretch" mb={8}>
        <Button leftIcon={<FaCreditCard />} colorScheme="blue">
          Add Points with Bank Card
        </Button>
        <Button leftIcon={<FaPaypal />} colorScheme="blue">
          Add Points with PayPal
        </Button>
        <Button leftIcon={<FaUpload />} colorScheme="green">
          Upload Movie
        </Button>
      </VStack>

      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {movies.map((movie, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={movie.image} alt={`Cover for ${movie.title}`} />
            <Flex p={4} flexDirection="column" justifyContent="space-between" height="100%">
              <VStack spacing={2}>
                <Heading size="md">{movie.title}</Heading>
                <Text fontSize="sm">{movie.description}</Text>
                <Text fontSize="sm" color="gray.500">{`Price: ${movie.price} Points`}</Text>
              </VStack>
              <Button rightIcon={<FaPlayCircle />} colorScheme="teal" mt={2}>
                Watch Now
              </Button>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default Index;
