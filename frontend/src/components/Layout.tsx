import React, { FC } from "react";
import { Stack, Flex, Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Layout: FC = ({ children }) => {
  return (
    <Stack h="100vh">
      <Flex
        bg="#226F54"
        p={4}
        justifyContent="space-around"
        alignItems="center"
      >
        <Box>
          <Text fontWeight="bold" style={{ fontSize: 30, color: "#F4F0BB" }}>BULLery</Text>
        </Box>
        <Link to="/">
          <Button size="sm" colorScheme="green">
            Mint NFT
          </Button>
        </Link>
        <Link to="my-animal">
          <Button size="sm" colorScheme="green">
            My NFT
          </Button>
        </Link>
        <Link to="sale-animal">
          <Button size="sm" colorScheme="green">
            Sale NFT
          </Button>
        </Link>
      </Flex>
      <Flex
        direction="column"
        h="full"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Flex>
    </Stack>
  );
};


export default Layout;