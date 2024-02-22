import { Box, Button, Container, Flex, Grid, Heading, Image, Text, VStack, Divider } from "@chakra-ui/react";
import { FaCreditCard, FaPaypal, FaPlayCircle, FaUpload } from "react-icons/fa";

const generateRandomDomain = () => {
  const words = ["streaming", "movies", "film", "cinema", "flick", "screen", "showtime"];
  const tlds = [".com", ".net", ".org", ".lt"];
  const randomWord = words[Math.floor(Math.random() * words.length)];
  const randomTld = tlds[Math.floor(Math.random() * tlds.length)];
  return randomWord + randomTld;
};

const Index = () => {
  const randomDomain = generateRandomDomain();
  // Mock movie data with prices
  const getRandomPrice = () => Math.floor(Math.random() * 10) + 1;
  const jackieChanMovies = ["Rush Hour", "Police Story", "Drunken Master", "Project A", "Who Am I?", "Shanghai Noon", "The Tuxedo", "Dragon Blade"];

  const movies = [
    {
      title: "Death App's",
      description: "Lithuanian dubbed thriller movie.",
      image: "https://via.placeholder.com/1080",
      price: getRandomPrice(),
    },
    {
      title: "Karate Kid",
      description: "Lithuanian version of the classic martial arts film.",
      image: "https://via.placeholder.com/1080",
      price: getRandomPrice(),
    },
    ...jackieChanMovies.map((title) => ({
      title: `${title} (Lithuanian)`,
      description: `Lithuanian dubbed Jackie Chan movie: ${title}.`,
      image: "https://via.placeholder.com/1080",
      price: getRandomPrice(),
    })),
    ...new Array(37).fill(null).map((_, index) => ({
      title: `Lithuanian Movie ${index + 1}`,
      description: "Description of a Lithuanian Movie",
      image: "https://via.placeholder.com/1080",
      price: getRandomPrice(),
    })),
  ];

  return (
    <Container maxW="container.xl" p={4}>
      <Heading mb={6}>Lithuanian Movie Streaming</Heading>

      <VStack spacing={4} align="stretch" mb={4}>
        <Text fontSize="lg" color="gray.500">
          Random Domain: {randomDomain}
        </Text>
        <Divider mb={4} />
        <Button
          leftIcon={<FaCreditCard />}
          colorScheme="blue"
          onClick={() => {
            alert("Bank transfer information: LT727044090101171110");
          }}
        >
          Add Points with Bank Card
        </Button>
        <Button
          leftIcon={<FaPaypal />}
          colorScheme="blue"
          onClick={() => {
            alert("PayPal transfer information: sender.lithuania@gmail.com");
          }}
        >
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
