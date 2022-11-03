import { Flex, Stack } from "@chakra-ui/react";
import Header from "../components/Header";
import { MaintPhoto } from "../components/MainPhoto";
import { PhotoQueue } from "../components/PhotoQueue";
import { ProductInfo } from "../components/ProductInfo";
import { Description } from "../Description";

export default function Product() {
    return (
        <>
            <Header />
            <Flex m={{ base: '20px 0px', md: 'auto' }} h='100%' maxWidth='1200px' justifyContent='center' direction='column'>
                <Flex direction={{ base: 'column', lg: 'row' }} w='100%' px='10px' justifyContent='center'>
                    <Flex>
                        <PhotoQueue />
                        <MaintPhoto />
                    </Flex>
                    <ProductInfo />
                </Flex>
                <Description />
            </Flex>
        </>
    );
}