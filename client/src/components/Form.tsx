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
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";

import SERVER_ENDPOINTS from "../config";
import axios from "axios";

export default function Form() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shrunkUrl, setShrunkUrl] = useState("");
  const [urlError, setUrlError] = useState("");

  function validateUrl(url: string) {
    const urlPattern =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
    return urlPattern.test(url);
  }

  async function shrink() {
    setShrunkUrl("");
    setUrlError("");

    if (!validateUrl(originalUrl)) {
      setUrlError("Please enter a valid URL.");
      return;
    }

    const result = await axios
      .post(`${SERVER_ENDPOINTS}/api/url`, {
        url: originalUrl,
      })
      .then((res) => res.data);

    setShrunkUrl(`${SERVER_ENDPOINTS}/${result.slug}`);
  }

  function handleUrlChange(e: React.ChangeEvent<HTMLInputElement>) {
    const url = e.target.value;
    setOriginalUrl(url);
    if (validateUrl(url) || url === "") {
      setUrlError("");
    } else {
      setUrlError("Please enter a valid URL.");
      setShrunkUrl("");
    }
  }

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
        <FormControl id="original" mb={4} isInvalid={urlError !== ""}>
          <FormLabel>Original URL</FormLabel>
          <Input
            type="url"
            placeholder="https://rishikeshnk.github.io/portfolio/"
            value={originalUrl}
            onChange={handleUrlChange}
          />
          {urlError && <FormErrorMessage>{urlError}</FormErrorMessage>}
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
                    onClick={() => navigator.clipboard.writeText(shrunkUrl)}
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
