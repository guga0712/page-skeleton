import { Flex, Skeleton } from "@chakra-ui/react";

export function Description() {
    return (
        <Flex w='100%' justifyContent='center' h='auto' direction={{ base: 'column', lg: 'row' }} p={{ base: '10px', lg: '0' }}>
            <Flex w={{ base: '100%', lg: '100%' }} direction={{ base: 'column', lg: 'row' }}>
                <Skeleton startColor='gray.100' endColor='gray.300' mt='20px' w={{ base: '100%', lg: '70%' }} h={{ base: '400px', lg: '400px' }}></Skeleton>
                <Skeleton startColor='gray.100' endColor='gray.300' mt='20px' ml={{ base: '0', lg: '40px' }} w={{ base: '100%', lg: '30%' }} h='200px'></Skeleton>
            </Flex>
        </Flex >
    );

}