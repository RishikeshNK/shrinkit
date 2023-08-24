import { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Tooltip,
  InputGroup,
  InputRightElement,
  Center,
} from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";

import SERVER_ENDPOINTS from "../config";
import axios from "axios";

export default function Form() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shrunkUrl, setShrunkUrl] = useState("");

  async function shrink() {
    setShrunkUrl("");
    const result = await axios
      .post(`${SERVER_ENDPOINTS}/api/url`, {
        url: originalUrl,
      })
      .then((res) => res.data);
    setShrunkUrl(`${SERVER_ENDPOINTS}/${result.slug}`);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shrunkUrl);
  };

  return (
    <Center width={"100vw"} height={"100vh"}>
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
          colorScheme="blue"
          variant="outline"
          size="lg"
          onClick={shrink}
          w="full"
        >
          Shrink
        </Button>
        {shrunkUrl && (
          <FormControl mt={4}>
            <FormLabel>Shrunk URL</FormLabel>
            <InputGroup>
              <Input defaultValue={shrunkUrl} readOnly />
              <InputRightElement>
                <Tooltip label="Copy to Clipboard" hasArrow>
                  <Button
                    variant="ghost"
                    colorScheme="blue"
                    size="sm"
                    onClick={copyToClipboard}
                  >
                    <FaCopy size={32} />
                  </Button>
                </Tooltip>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        )}
      </Box>
    </Center>
  );
}
