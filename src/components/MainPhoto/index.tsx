import { Flex, Skeleton } from "@chakra-ui/react";

export function MaintPhoto() {
    return (
        <Flex width='100%' justifyContent='center'>
            <Skeleton startColor='gray.100' endColor='gray.300' ml={{ base: '0', md: '8px' }} w={{ base: '100%', md: '492px' }} h='615px'></Skeleton>
        </Flex>
    );
}