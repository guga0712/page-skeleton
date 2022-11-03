import { Center, Flex, Skeleton, Stack, Divider } from "@chakra-ui/react";

export function Filter() {
    return (
        <>
            <Center h={{ base: '26px', md: '40px' }} w='200px'>
                <Skeleton startColor='gray.100' endColor='gray.300' h='12px' w='100%'></Skeleton>
            </Center>
            <Flex h='70px' w='100%' direction='column' justifyContent='center'>
                <Skeleton startColor='gray.100' m='6px 0' endColor='gray.300' h='20px' w='100%'></Skeleton>
                <Divider w='100%' bg='gray' mb='8px' display={{ base: 'none', md: 'flex' }} />
                <Skeleton startColor='gray.100' endColor='gray.300' h='20px' w='100%' display={{ base: 'none', md: 'flex' }}></Skeleton>
            </Flex>
        </>
    );
}