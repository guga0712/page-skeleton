import { Flex, Skeleton } from "@chakra-ui/react";

export function Home() {
    return (
        <Flex direction='column' mb='20px'>
            <Skeleton startColor='gray.100' endColor='gray.300' w='200px' h='21px'></Skeleton>
            <Skeleton startColor='gray.100' mt='8px' endColor='gray.300' w='200px' h='26px'></Skeleton>
        </Flex>
    );
}