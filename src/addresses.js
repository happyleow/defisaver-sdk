const { CONFIG, NETWORKS } = require('./config');

const actionAddresses = {
  [NETWORKS.ethereum.mainnet.chainId]: {
    // utils
    WrapEth: '0x9E702937F42Db2cE58342Ca5F213Ef33D51AEF6b',
    UnwrapEth: '0x5cD02A169CfE5B0596B352547879Dd60B7033488',
    PullToken: '0x795a89f6D4E97A959fe81aa22772441323783479',
    SendToken: '0xBbe0D7f2AF01aE678f8A873CB2d2EB73871C9b5A',
    SumInputs: '0xCdef35425579fc566B6Ee0499A79256ac88d25cf',
    SubInputs: '0x3f71c5b806c2aCFA88bd7Ae5F7f8A14121E0FcA6',
    ChangeProxyOwner: '0x32cEdFfF6e64f6cD1907Ae0b27b78c36320587E7',
    TokenBalance: '0xFEb82445aEaA675D59A43CD5833f5A6807f97ea2',
    AutomationV2Unsub: '0xd3D70313d1E2ab6ae47674C88390Fd9865806201',

    // exchange
    DFSSell: '0xf4adae649B2c3B2795608b2D222c852929944898',
    DFSBuy: '0x939dCad6A3D1fEACccB60Af90876D904468CbF66',

    // maker
    McdGenerate: '0x2bF4586636329Ae930cFe085a1e57BAb4a8f741b',
    McdGive: '0xD2dc5DA4172a3901C9f26c7cd29eFE656Fc20332',
    McdMerge: '0x66c7f4C7e59b6e780142aaD5c9f427FA5F8dfFc6',
    McdOpen: '0x72AFC60B90c976397C37B5c64DDc067Ea521D388',
    McdPayback: '0xb7C2c78846493Bed18fa07B51fcc5EAFAc9d629C',
    McdSupply: '0x91c3167aC51F92c2f720C6A8418FDF46060698A1',
    McdWithdraw: '0xb1ab48556d9bBDDa1E3C9223533111b2a248d695',
    McdClaim: '0xd78783b50227A84d43604843065494e2666182Ab',

    // reflexer
    ReflexerSupply: '0x24C537A93A9ab75b5A593BA0B2dc03200345A844',
    ReflexerWithdraw: '0xcA99fB3430180E43bC1929a3a84d0500E3118e0A',
    ReflexerPayback: '0x0c8320033340277791C5dCD9BC87d20f086BB34b',
    ReflexerGenerate: '0x28E78093dF6d370Ca9ea1aC85668d8a097f09087',
    ReflexerOpen: '0xcf174aFFbB7be200afa37Dfc4CD067ae3Cb91054',
    ReflexerNativeUniV2SaviourDeposit:'0x5F66CC360657Bf224aa280Ae104550b5042E185a',
    ReflexerNativeUniV2SaviourGetReserves:'0x9C7518F7a0f5bC4D57702fcE8C0778F7Fb2f09f8',
    ReflexerNativeUniV2SaviourWithdraw:'0x6a61363243Cad1BE5caaE5e53284520592deB154',

    // aave
    AaveBorrow: '0xEdBbF97C505309e5174E164fbec3cAE774d310Ea',
    AavePayback: '0xb583Bc7603E5E482F475Ec9Ea90129029D53fbc8',
    AaveSupply: '0xC71113E9122465e8bCd42123f840Df99abaF29F1',
    AaveWithdraw: '0xE06Fc1CBD78Eb0799d5B0ca62D51B065886e08FC',
    AaveCollateralSwitch: '0x27d77c80A88665342C98Ea31B687A5fc8ca9a445',

    // compound
    CompBorrow: '0xde1b05266f2D05Bf9216B76500583c2b7785b7e9',
    CompClaim: '0xAA165C03fF61301b79f35649157f6738263739A3',
    CompPayback: '0x67D2CC825730cCb70FD4579E55cDb3cf3152fcb6',
    CompSupply: '0x1F22890C166B30cE8769b7B55354064C254e063F',
    CompWithdraw: '0xD326a003bcfDbad0E9A4Ccc37a76Ce264345F38a',
    CompGetDebt: '0x009109AB7b8CAFf748cdA2F272F36043528Bef2C',
    CompCollateralSwitch: '0x1c0BD1E4da2c3108f6caA64609E89a37531B0f86',

    // flashloan
    FLAaveV2: '0x45F17B18134B4398468A5bcdCdf22f0e1cAbEad5',
    FLDyDx: '0x973065599BACa33FC9CAD2823710f1332D2B7805',
    FLMaker: '0xEA2C6B373Ea3e596995d2523a74592E22EE49BFF',
    FLBalancer: '0x81c69A428fDB21bBaB8A7434fF511382058c29dC',

    // uniswap
    UniSupply: '0xcAE220B5398AfAad75bfeb946164f6C23CF65A98',
    UniWithdraw: '0x847aF4eFDf64E4F54Af95D3b867DfC92f4Ea91B4',

    // uniswap V3
    UniCollectV3: '0x4D49FB2Cc0DF856b936CCA1816A9e6DD0ADFa232',
    UniMintV3: '0x488794Aa06Ec668fDeC29375CB8B6629f4692B0B',
    UniSupplyV3: '0x1dc3C2c16195bD6e49f6ED05F1f482c3C7FD35Af',
    UniWithdrawV3: '0xe5FAB89bdC01130c686B35540531EB1cBbaE8ff3',
    UniCreatePoolV3: '0xAD599cA05C7295a0cbc5CD696BF3f7E633402C99',

    // dydx
    DyDxSupply: '0xA8D1C1eea86573cBcC919fbf28Db542bDfE7Ed5b',
    DyDxWithdraw: '0x55AA33F42D79DbD3f1885b410e4796d641549bC3',

    // yearn
    YearnSupply: '0x3B8538B070a0890ef7E13FF60c9d19F893a93B8a',
    YearnWithdraw: '0x03CC90F24C23C9F766902917c32411417c28Db92',

    // liquity
    LiquityClose: '0x9C563dc9F8e3FcCF996DAB4b6B6003fb7Bbca90f',
    LiquityBorrow: '0x46e8fE6bbE3C08eCc250295583490be9ac97B969',
    LiquityOpen: '0x50D69350E2629987551C563E19D29dee6Faf3A78',
    LiquityPayback: '0x86eCa72dF81ae76AfF0dEeC01521154F33147e46',
    LiquityWithdraw: '0x8CDA51bB0D7E03252d554Ba5Bbb9254f3deB8441',
    LiquitySupply: '0x7d9157a022A263EFd34C867Fd261235D45B48453',
    LiquitySPDeposit: '0x20D85391A69E9906b67238cb82E51114dE7116a9',
    LiquitySPWithdraw: '0x621ac2A927cc9323C23f7792e8FD25aAbc9cC04B',
    LiquityStake: '0xF0782DE9d734e54aa080B985d6a9235880C48Fe5',
    LiquityUnstake: '0xc39DdBa031D014BFC1E3b6158842Ffb43f8D47e9',
    LiquityEthGainToTrove: '0x60427bD08785527FDca7d84d2A75871273E9F209',
    LiquityClaim: '0x5a2E638DE65323c55f1245f920B84dB4603002eE',
    LiquityRedeem: '0x6C5Dd88D033c8857254Cc94098BF75Ac275B17c7',

    // lido
    LidoStake: '0x71D44c05B94438fe09a4A7F4dB75fb421dEC1067',
    LidoWrap: '0x752e08eB2882DA273Cb8b70151f6c6c33f34D62b',
    LidoUnwrap: '0x37800CF1Fe630efc5F2E15A2e182E5C5084861D9',

    // insta
    ClaimInstMaker: '0x15E22A8160F0bDb619C6846C982F8D208A5670D2',
    InstPullTokens: '0x37FC940Be30e11d578243dEBea4f9B950E22aC99',

    // balancer
    BalancerV2Supply: '0xD78E5D95A28a67F7851b0a94505790813A92E405',
    BalancerV2Withdraw: '0xCcf4b96407BEF25D7df1c95045CCF64950e73E97',
    BalancerV2Claim: '0x259Ae83567858B7960d2De0D00F3717a764aD73B',

    // GUni
    GUniWithdraw: '0xa329263fFac25F86E03481Ec39307bbf5DbeDD83',
    GUniDeposit: '0xe943958f01630038c23f8471a2d0ea4378e58b0d',

     // Rari
    RariDeposit: '0xC627A3F12c4f7236218a511DC10e3f5ead1a1D7c',
    RariWithdraw: '0x8408EeCcC2c2FC25F2cF720398DAAD0A05EfE487',

     // mStable
    MStableDeposit: '0x1887235CFE1927782a3e7eD15fb073586c949858',
    MStableWithdraw: '0xb164456190577fbBe8FB8bF5Fa48a106b328A579',

    MStableDepositNew: '0x2AFfE3899d985212aD8ee99e1269D7Dd17576f1d',
    MStableWithdrawNew: '0x6468215Bf4811244Ab78599e1df9206716A35aB7',

    MStableClaim: '0x28279A806aDeDedFD33e39C7375dc0c0ee943847',

    CurveStethPoolDeposit: '0x0f042a5CC97C4cd8D8136c28F966839f195D08B9',
    CurveStethPoolWithdraw: '0x2F4ad71Bd8045d0633B304BD2d94ef349eB09105',
  },
};

const otherAddresses = {
  [NETWORKS.ethereum.mainnet.chainId]: {
    TaskExecutor: '0xb3e5371d55e1e84bfFE7D0b57Bd9c6A4C6b3C635',
    DFSRegistry: '0xD6049E1F5F3EfF1F921f5532aF1A1632bA23929C',
    Empty: '0x0000000000000000000000000000000000000000',
    McdCdpManager: '0x5ef30b9986345249bc32d8928b7ee64de9435e39',
    BCdpManager: '0x3f30c2381CD8B917Dd96EB2f1A4F96D91324BBed',
    AaveDefaultMarket: '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5',
    ProxyRegistry: '0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4',
    DFSProxyRegistry: '0x29474FdaC7142f9aB7773B8e38264FA15E3805ed',
    UniswapV3PositionManager : '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
    RaiWethUniV2LPToken : '0x8aE720a71622e824F576b4A8C03031066548A3B1',
    BalancerToken : '0xba100000625a3754423978a60c9317c58a424e3D',
    CrvToken: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
  },
  [NETWORKS.ethereum.optimism.chainId]: {
    Empty: '0x0000000000000000000000000000000000000000',
    ProxyRegistry: '0x283Cc5C26e53D66ed2Ea252D986F094B37E6e895',
    DFSRegistry: '0xA1A445d1d8F97cBf380E98759230FcC0f2E23fc1',
    DSGuardFactory: '0xc19d0F1E2b38AA283E226Ca4044766A43aA7B02b',
    AdminVault: '0xB64dB2153861ddDE62c8038C6A3c6199FCfBD094',
    DefisaverLogger: '0xC0986E9803a41542c5422dbe336F9B68C55E0a49',
    RecipeExecutor: '0x5c1cFF487Bed642f27b4B931617A96f22A2Dc5dC',
  },
};

const getAddr = (name, chainId) => {
  const _chainId = typeof chainId === 'undefined' ? CONFIG.chainId : chainId;

  const actions = actionAddresses[_chainId];
  const other = otherAddresses[_chainId];

  if (!actions && !other) throw new Error(`Cannot find address for chainId: ${_chainId}.`);
  if (!actions[name] && !other[name]) throw new Error(`Cannot find address for name: ${name}.`);

  return actions[name] || other[name];
};

module.exports = {
  getAddr,
  actionAddresses,
}
