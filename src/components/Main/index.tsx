import { Flex, Skeleton, Stack } from "@chakra-ui/react"
import { Filter } from "../Filter";
import { Home } from "../Home";
import { Products } from "../Products";

export function Main() {
    return (
        <Flex p='20px' direction='column'>
            <Home />
            <Filter />
            <Products />
        </Flex>

    );
}