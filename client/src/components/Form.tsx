import { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

export default function Form() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shrunkUrl, setShrunkUrl] = useState("");

  const shrink = () => {
    setShrunkUrl("https://shrink.it/abc123");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        p={8}
        width={{ base: "100%", sm: "400px" }}
        bg="white"
        boxShadow="dark-lg"
        borderRadius="xl"
      >
        <Heading size="lg" mb={4} textAlign="center">
          ShrinkIt
        </Heading>
        <FormControl id="original" mb={4}>
          <FormLabel>Original URL</FormLabel>
          <Input
            type="url"
            placeholder="https://rishikeshnk.github.io/portfolio/"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
        </FormControl>
        <Button
          colorScheme="teal"
          variant="outline"
          size="lg"
          onClick={shrink}
          w="full"
        >
          Shrink
        </Button>
        {shrunkUrl && (
          <Box mt={4}>
            <FormLabel>Shrunk URL</FormLabel>
            <Input value={shrunkUrl} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
