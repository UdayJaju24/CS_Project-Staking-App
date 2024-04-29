import {Card, Heading, Skeleton, Stack, Text} from "@chakra-ui/react"
import { STAKE_TOKEN_ADDRESSES } from "../constants/addresses"
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react"


export default function StakeToken() {
    const address = useAddress()

    const {contract: stakeTokenContract, isLoading: loadingStakeToken} = useContract(STAKE_TOKEN_ADDRESSES)

    const {data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(stakeTokenContract, address)

    return (
        <Card p={5}>
            <Stack>
                <Heading>Stake Token</Heading>
                <Skeleton h={4} w={"50"} isLoaded= {!loadingStakeToken && !loadingTokenBalance}>
                    <Text  fontSize={"large"} fontWeight={"bold"} > ${tokenBalance?.symbol}</Text>
                </Skeleton>

                <Skeleton h={4} w={"50"} isLoaded= {!loadingStakeToken && !loadingTokenBalance}>
                    <Text  fontSize={"large"} fontWeight={"bold"} > ${tokenBalance?.displayValue}</Text>
                </Skeleton>
            </Stack>
        </Card>
    )
}