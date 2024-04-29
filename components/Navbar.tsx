
import {Container, Flex, Heading} from "@chakra-ui/react"
import { ConnectWallet } from '@thirdweb-dev/react'
// import Head from 'next/head'

const Navbar = () => {
  return (
    <Container maxW={"1200px"} py={4}>
        <Flex direction={"row"} justifyContent={"space-between"}>
            <Heading>Token Staking CS Project</Heading>
            <ConnectWallet />
        </Flex>
    </Container>
  )
}

export default Navbar