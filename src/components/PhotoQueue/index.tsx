import { Skeleton } from "@chakra-ui/react";

export function PhotoQueue() {
    return (
        <Skeleton startColor='gray.100' endColor='gray.300' w='70px' h='412px' display={{ base: 'none', md: 'flex' }}></Skeleton>
    );
}