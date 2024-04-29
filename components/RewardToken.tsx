import {Skeleton, Text, Card, Stack, Heading} from "@chakra-ui/react"
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react"
import { REWARD_TOKEN_ADDRESSES } from "../constants/addresses"

export default function RewardToken() {

    const address = useAddress()
    
    
    const {contract: rewardTokenContract, isLoading: loadingRewardToken} = useContract(REWARD_TOKEN_ADDRESSES)
    // useContract(TOKEN_ADDRESS) => this takes address of the ERC20 Token
    // this react hook gives contractname as a constant
    
    const {data:tokenBalance, isLoading: loadingTokenBalance} = useTokenBalance(rewardTokenContract, address)
    // useBalance(the contractname taken from useContractHook, and address of the Contract)
    // this gives the constant named data that contains tokenBalance
    
    
    return(
        <Card p={5}> 
            <Stack>
                <Heading> Reward Token</Heading>
                <Skeleton h={4} w={"50"} isLoaded={!loadingRewardToken && !loadingTokenBalance}>
                    <Text fontSize={"large"} fontWeight={"bold"}>
                        ${tokenBalance?.symbol}
                    </Text>
                </Skeleton>

                <Skeleton h={4} w={"50"} isLoaded={!loadingRewardToken && !loadingTokenBalance}>
                    <Text fontSize={"large"} fontWeight={"bold"}>
                        ${tokenBalance?.displayValue}
                    </Text>
                </Skeleton>
            </Stack>
        </Card>
    )
    
}