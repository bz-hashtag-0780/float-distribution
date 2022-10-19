export const TOTAL_SUPPLY = `
    import FlowToken from 0x1654653399040a61

    pub fun main(): UFix64 {
        return FlowToken.totalSupply
    }
`