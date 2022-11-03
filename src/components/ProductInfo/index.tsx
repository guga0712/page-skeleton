import { Divider, Flex, Skeleton } from "@chakra-ui/react";
import { Description } from "../../Description";

export function ProductInfo() {
    return (
        <>
            <Flex direction='column' pl={{ base: 0, md: '10px' }}>
                {/* nome e referencia */}
                <Flex direction='column'>
                    <Skeleton startColor='gray.100' endColor='gray.300' w='205px' h='30px'></Skeleton>
                    <Skeleton startColor='gray.100' endColor='gray.300' w='55px' h='20px'></Skeleton>
                </Flex>
                {/* preço e parcelas */}
                <Flex direction='column' mt='8px'>
                    <Skeleton startColor='gray.100' endColor='gray.300' w='90px' h={{ base: '27px', md: '30px' }}></Skeleton>
                    <Skeleton startColor='gray.100' endColor='gray.300' w='75px' h={{ base: '21px', md: '22px' }}></Skeleton>
                </Flex>
                {/* variacoes */}
                <Flex direction='column'>
                    <Flex direction='column' mt='20px'>
                        <Skeleton startColor='gray.100' endColor='gray.300' w='108px' h={{ base: '21px', md: '24px' }}></Skeleton>
                        <Skeleton startColor='gray.100' endColor='gray.300' w={{ base: '121px', md: '620px' }} h={{ base: '35px', md: '44px' }} mt='8px'></Skeleton>
                    </Flex>
                    <Flex direction='column' mt='20px'>
                        <Skeleton startColor='gray.100' endColor='gray.300' w='108px' h='24px'></Skeleton>
                        <Skeleton startColor='gray.100' endColor='gray.300' w={{ base: '121px', md: '620px' }} h={{ base: '35px', md: '44px' }} mt='8px'></Skeleton>
                    </Flex>
                    <Flex direction='column' mt='20px'>
                        <Skeleton startColor='gray.100' endColor='gray.300' w={{ base: '100%', md: '620px' }} h='24px' mt='8px'></Skeleton>
                    </Flex>
                    <Flex direction='column' my='20px'>
                        <Skeleton startColor='gray.100' endColor='gray.300' w='182px' h='40px'></Skeleton>
                    </Flex>
                    <Flex direction='column' mb='20px'>
                        <Skeleton startColor='gray.100' endColor='gray.300' w={{ base: '100%', md: '620px' }} h='65px'></Skeleton>
                    </Flex>
                    <Flex>
                        <Skeleton startColor='gray.100' endColor='gray.300' w={{ base: '100%', md: '620px' }} h='40px'></Skeleton>
                    </Flex>
                    <Divider my='30px' bg='gray'></Divider>
                    <Skeleton startColor='gray.100' endColor='gray.300' w={{ base: '100%', md: '620px' }} h='24px'></Skeleton>
                </Flex>
            </Flex>
        </>

    );
}