import { Flex, Skeleton } from "@chakra-ui/react";

export function Products() {
    return (
        <Flex w='100%' h='100vh'>
            <Skeleton mt='10px' startColor='gray.100' endColor='gray.300' w='100%' h='100%'></Skeleton>
        </Flex>
    );
}