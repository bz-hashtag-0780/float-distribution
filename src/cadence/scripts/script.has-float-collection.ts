export const HAS_FLOAT_COLLECTION = `
import NonFungibleToken from 0x1d7e57aa55817448
import FLOAT from 0x2d4c3caffbeab845

pub fun hasFloatCollection(_ address: Address): Bool {
  return getAccount(address)
    .getCapability<&FLOAT.Collection{NonFungibleToken.CollectionPublic, FLOAT.CollectionPublic}>(FLOAT.FLOATCollectionPublicPath)
    .check()
}

pub fun main(address: Address): Bool {
  return hasFloatCollection(address)
}
`
