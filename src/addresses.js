const { CONFIG, NETWORKS } = require('./config');

const actionAddresses = {
  [NETWORKS.ethereum.chainId]: {
    // utils
    WrapEth: '0x8EbBd35f84D7f0DFCBEf08fD30CD09176133251A',
    UnwrapEth: '0xDB6C8cFDd7c1C0F8895CDBC01Dbf4A6D4B6d2a29',
    PullToken: '0x254cA89a00d53ab61de2Ba5641DBDC01aE48aed4',
    SendToken: '0x5612e490c9549486dF16b34EBfD0E8b6cF6a1717',
    SumInputs: '0x70907d840aBBc984Fd949311d2f005e6aC4a4D7a',
    SubInputs: '0xe1804b756188F63f723d2FECc02988D0Cc1aB823',
    ChangeProxyOwner: '0x81cA52CfE66421d0ceF82d5F33230e43b5F23D2B',
    TokenBalance: '0xa92B177950F1460119940436515FD857C24494BC',
    AutomationV2Unsub: '0xe35Fb12fE9796847751076aCf5ee7d124108612C',
    SendTokenAndUnwrap: '0xeecd376026335261c89faD40D89625391b1eFF6a',
    ToggleSub: '0x9A78E9d6538cfDbA0242Ca5eC46771E6132E8085',
    UpdateSub: '0x94D707f411B852082a5ce49C3f47c49c7757761f',
    TransferNFT: '0x861e893E1796F81248e75F06C0b09Abdc8fe2f6F',

    // exchange
    DFSSell: '0xB744474Bdd7226736ACa4Ba87593e32d8315e5c9',

    // maker
    McdGenerate: '0xCb50a91C0f12f439b8bf11E9474B9c1ED62Bf7a3',
    McdGive: '0xf9556A87BF424834FDe7De0547b58E36Cb42EF01',
    McdMerge: '0x6D06C6c2BCeaEC31b0F8Cd68C594120dDCcCC427',
    McdOpen: '0x1b54e8b6073ac7382c42830BE715466aDA11Cf37',
    McdPayback: '0xE68AeD979Af6f85516fF485D098804c0f9eD9A5b',
    McdSupply: '0x84372e73e1A2E95510869D2D81A3ef1AEC9e0Da8',
    McdWithdraw: '0xa704FBBe2f7ea8eF45a8280f6Bf96939eBC73252',
    McdClaim: '0xc0FC0f5Ba156E16217F8C7f400AEc0a658419C13',

    // reflexer
    ReflexerSupply: '0xd7a36CD4ce7CCc2F1376Dc5C48BaC84380A4f698',
    ReflexerWithdraw: '0xD8a14d447AB6789F3bf1Eb763b6306db3FC3d666',
    ReflexerPayback: '0xcC6838d8a61a4b29Ea565d39C38b830f1491cb29',
    ReflexerGenerate: '0x8e8Fd178A5FAE3A29F9CB1A06aBBBCFd5B83beb7',
    ReflexerOpen: '0x4704a7cBd4d913d1233765B70531D601b4384011',

    // not deployed as currently not used
    ReflexerNativeUniV2SaviourDeposit: '0x0000000000000000000000000000000000000000',
    ReflexerNativeUniV2SaviourGetReserves: '0x0000000000000000000000000000000000000000',
    ReflexerNativeUniV2SaviourWithdraw: '0x0000000000000000000000000000000000000000',

    // aave
    AaveBorrow: '0x1B95E800a869bc3F89914470a7901D93D1401cD1',
    AavePayback: '0x066225964999F1D07C888c5Ac4a6C885bDa88b9A',
    AaveSupply: '0xEbB200a529058B561B42Eab510DA157a63243CEc',
    AaveWithdraw: '0x754C58fA92246414a448c1ed44ea3D1AD446d482',
    AaveCollateralSwitch: '0xFf5dfF1B90bd5Aa6E12768AB497dB90cc9DE6F5d',

    // compound
    CompBorrow: '0x8495579BF6Ae848f7E59686536F834f1d2CCd79C',
    CompClaim: '0x81F488cF7A0128A9DB5e7207042cCAB1CB0ac902',
    CompPayback: '0xa2Fa682f44BE40a11d69Eb738CBB91148f0D9742',
    CompSupply: '0xB4CEDe40b249b756Ce0EAa3e14F6af89f25f9a3d',
    CompWithdraw: '0x3792F83D6A82091cb53052458038CC86e206463F',
    CompGetDebt: '0xc2B8f8423bc8Fe2e9A44cA9d364d835D1751b725',
    CompCollateralSwitch: '0xC3d89139508A3883775D3d1E62E2A0fea363b448',

    // flashloan
    FLAaveV2: '0xa4d52ED15018a5be4adE5796899e5d75cc8759C1',
    FLDyDx: '0x08AC78B418fCB0DDF1096533856A757C28d430d7',
    FLMaker: '0x5DCf600C35ae2752A8a11eB7C489EF3D93126fB4',
    FLBalancer: '0x5C7a9f4635AE4F95da2e45317311AAe255FB71B3',

    // uniswap
    UniSupply: '0x9935e12F0218E61c27D7f23eAC9A9D6881a078eC',
    UniWithdraw: '0xf8bb8F68b0A45DC315F3f7602a60cfb274B00951',

    // uniswap V3
    UniCollectV3: '0x331D7C3F6E710cB6cFE94c4Aa04AC3345AC00e00',
    UniMintV3: '0x3dF75BE8Fb0a6186BE9705cACaa6dD2a4Ec3e40C',
    UniSupplyV3: '0x0CA4255b37DD083dBD48Ca74d575F46037992520',
    UniWithdrawV3: '0xe06224593D9c860B2fBF39eEA3b9B8A85b77Fbc4',
    UniCreatePoolV3: '0x9058aAbEdEfe652b1d85DBBAB48Dfa78db613C44',

    // dydx
    DyDxWithdraw: '0x827089C5Fc7653655c4080c660Cd8f755F818443',

    // yearn
    YearnSupply: '0x837D6E7F469b3cC820B0a6Da25415D5aE0A861c4',
    YearnWithdraw: '0x563eF9b1075628E62aDc657702517dEA72ca08d6',

    // liquity
    LiquityClose: '0x4B2d174129789a88e92D46342201F207132144b7',
    LiquityBorrow: '0xF978d6C5c8af80a059AdB85EEb64F14C9c436D68',
    LiquityOpen: '0x4EFF392cc69B31Ad159EcfA10305251b2d8E40E0',
    LiquityPayback: '0x8fc7D24414e9740ed9841d9205D458e3677e71f7',
    LiquityWithdraw: '0x733F53579bEcdd3Ed07e745A55Ee9af8B9669048',
    LiquitySupply: '0xD539943e080C2a29e3f1DB2d45Ea7240d7ddDEE2',
    LiquitySPDeposit: '0x5aB0244a00a733f16E6b238B462bdF3538C698E1',
    LiquitySPWithdraw: '0xa71817957eaF993fAA9a1F4B5c2402c0aeFCd9C6',
    LiquityStake: '0x671280800B540cbF073561d84A297a2c4c5D529F',
    LiquityUnstake: '0x86FDD4A6438D448a794A44ABBe47D57590b3350d',
    LiquityEthGainToTrove: '0x65e19f967B3F3cB6466110aD238039F5423E3177',
    LiquityClaim: '0x526735aDcBe5c9059275c5ED2E0574b4a24b875e',
    LiquityRedeem: '0x20B78854658011394C931EF2BF3cEEA2Fe62E7f0',

    // lido
    LidoStake: '0x4a7dd38D2BcA817fb68165155F869ca4179d8060',
    LidoWrap: '0xE637544390db79EdDE0a9CAF352ED0FfF7451bDB',
    LidoUnwrap: '0x910F73Fb8C0Bd15423c0D0BaD9F1ed95187a48fD',

    // insta
    InstPullTokens: '0xf2c87782D6Eff0511e82007119BAC40e9ba86F69',

    // balancer
    BalancerV2Supply: '0xE48123018Db5e9075841C61EA702cEca51621191',
    BalancerV2Withdraw: '0xbED38692438b90AF738F8A7A3142C217DE8fB069',
    BalancerV2Claim: '0xEac7c5bEFaA6E17f1A2e86947eEd6419c74A7C03',

    // GUni
    GUniWithdraw: '0x6F7cD7C0Dd3634E14bAB91FDF3bCE0a4315b3C59',
    GUniDeposit: '0xb247cD4cab056800cCDa7cE1AFB781a8bFA9b57A',

    // Rari
    RariDeposit: '0x77A05c15f62F1fA6471D466001E21C1B189fcA9F',
    RariWithdraw: '0xa052eD427EFa63B5bb87c409449a47e7C50317e3',

    // mStable
    MStableDeposit: '0xdf24ed1250fbfa274316b50Bc9A009aFA8F61E16',
    MStableWithdraw: '0xa4d5d3e56012C1eD8aba4bE246964962DC3F735f',

    MStableClaim: '0xD56F0EC66267958e08c91547c259cCAC006BF118',

    McdRatioCheck: '0x3f09773e5e945C6Aa1bc8a8B3492f507620DE1e1',
    GasFeeTaker: '0x431F1E1A9859EF99953801dbdeB31d2846ADcc0d',

    CurveStethPoolDeposit: '0x5Ae5870dC0C780e9eb68bE7a223eCd7F3BDad12B',
    CurveStethPoolWithdraw: '0x4089731d843Ce52699Fe64F68556aBbD95D70D00',

    CurveDeposit: '0x160225c24300bD9fAA03Bc007D5e72bDbbcA9257',
    CurveWithdraw: '0xA2A6D75417807ebAf8364613018D697f88021771',

    // Euler
    FLEuler: '0xaf591afeCbAa4026Be377AA3cF02dA366f18DE07',

    TrailingStopTrigger: '0x0000000000000000000000000000000000000000',

    // Convex
    ConvexDeposit: '0x3Ecc4F1FD5aA09D2E13Ec9ebFdF102063d66F458',
    ConvexWithdraw: '0x2B2c235F9e27A121947c34A39d447bD4C585aA15',
    ConvexClaim: '0xA012afAA97B48894b8FCB2ECC007045Be7a8E8B6',

    // Chicken Bonds
    CBCreate: '0xAB38eCb27aBc1d75cb83725a4c408C22F426A1c1',
    CBRedeem: '0xdD06754cA5367B03af7014AB359332eD82D988d1',
    CBChickenIn: '0x1E990AF6dCf9E9f8a0b2fc76f3BC032A34fFfD14',
    CBChickenOut: '0x3d2f2d88749BB387abD07A2408b68D2Bf2D4be3f',
    // CompV3
    CompV3Allow: '0xC4a80f22bf56E0dFa2CB378561B934F41E14bc9f',
    CompV3Borrow: '0xAb01C815063178C3021a516ecaf56915fD0E6534',
    CompV3Claim: '0x4CEa369B63daAc0dA3423c5038a57483c5150986',
    CompV3Payback: '0x6d14b9d69aADcb0d31a3e5d89fba75AB053fc9f0',
    CompV3Supply: '0xAB53342d922Cc52b33486B92dC5dc361b7E4B436',
    CompV3Transfer: '0x0fB2390AEDB2dBeE08cec363c0eD72e9D8e64535',
    CompV3Withdraw: '0x59fED9975cd3bb07bB75490e86751D6025ce0bC2',
  },
  [NETWORKS.optimism.chainId]: {
    DFSSell: '0xBA0f6039b95CC0A02B5fc983eCf0FC4437BaacC7',

    // basic
    WrapEth: '0x6D735db054AC4a1F10f96b99f8550E9eefbC2AC5',
    UnwrapEth: '0x1Fa75B00A05C2EbBd0EDF253a63c209966337A0d',
    SendToken: '0xEbA499702856f1EFda2546e9fEFC1319A3b40538',
    PullToken: '0x392579E020a688068422A925c85f28bFD12a7EBB',
    SendTokenAndUnwrap: '0x8000174366066923D554cb466e190258A6FF3b1f',
    ToggleSub: '0x988C5C24AE6348404196267e19962f36961CAc29',
    TokenBalance: '0xC6FF5b01f7c7b35b6e093fF70D2332B361C5Be5A',


    // aave v3
    AaveV3ATokenPayback: '0x71B27114D1777298bD46c3770C42F9f807C49847',
    AaveV3Borrow: '0x8CaDc8A911D19B9e4D36c9bAdE47d970f362BcEa',
    AaveV3CollateralSwitch: '0x20D1388Ffa0A2D6ff6328AD014C67051542ca3a8',
    AaveV3Payback: '0x88eb4050e89FecE4DF940109B0e58daF9B59e551',
    AaveV3SetEMode: '0x7F264737066b9b7D9729Fe9715abB97423D8b35B',
    AaveV3Supply: '0x4Ad0cf94e82b58C414266b84ACB061b41bf1bdF7',
    AaveV3SwapBorrowRateMode: '0xB8f0243b492f0e80feF5315Ba8692e7635481845',
    AaveV3Withdraw: '0xf19d045f6cFc04A5Ee5E0e8837b565b9f276e3F7',
    AaveV3ClaimRewards: '0xBE8e8cea67085F869C1C0040fD52F9F3115E962e',

    // flashloan
    FLAaveV3: '0x352D4a1622f2DC34c738F542934372855f219F05',
    FLBalancer: '0x79d6bf536b8DD65909a3174C87eA6395310d5c41',

    AaveV3RatioTrigger: '0xB76e3f7694589D0f34ba43b17AD0D15350Ab5f85',
    GasFeeTakerL2: '0xB3dB299622A9DB0E944ccda2Ef899d6fF365B082',
    AaveV3RatioCheck: '0x7A36779a7b5F1128B28932604057d5b63361297c',

    // uniswap V3
    UniCollectV3: '0xad1D55a73D6d8b2218a4aD599c88d9550fb54cd7',
    UniMintV3: '0x7548E3923A9f9e4e182C939CC78FA30050414D12',
    UniSupplyV3: '0x533aDec68Eed581F4a7F202493Eaf4Df77b89EC0',
    UniWithdrawV3: '0xE920235ED2d52EcF6157BBAFedfB5bbbcF7c5825',
    UniCreatePoolV3: '0xAF45d1380d89dB7260DC2684158c5dfA4E147d3e',
  },
  [NETWORKS.arbitrum.chainId]: {
    DFSSell: '0x77c02Bb7CbBb2F896c5Ea14e1b60D65f81e552db',

    // basic
    WrapEth: '0x35136b25bFA7CCC8f5b94E3181a16B61c06980F0',
    UnwrapEth: '0x2B69d494536098700910D167902D1d397dcA2B61',
    SendToken: '0xb022BaFfcEdc0ceA15aF6B2B744795A12D21F2a9',
    PullToken: '0xD8B3769f74bd9F196C3416a42a91E786948898e6',
    SendTokenAndUnwrap: '0x0fb867A5Ee1CA9426D3dAb95e613Be166218b977',
    ToggleSub: '0x71015226EADFd4aC887fB56556F64338e352439b',
    TokenBalance: '0x483B903E702F60698Dd8124558C6199922737f1F',

    // aave v3
    AaveV3ATokenPayback: '0x261906e5E0D0D38D9cBb5c10dB9c4031aabdf8C1',
    AaveV3Borrow: '0x5786809DA660dB613994460F096F19fcd19eD4c9',
    AaveV3CollateralSwitch: '0x7AcdD66C13f87b1cBcE7B106a8C34E426475BADd',
    AaveV3Payback: '0xd88D5356e08dAd84E1576F89f4BF43C79a8BF0b2',
    AaveV3SetEMode: '0x99D5068d9520316e8D3B5136c0B6EA33C5E0c27e',
    AaveV3Supply: '0x1fFd0E73EB34013951a3da99e10ba5BC4e786Dd3',
    AaveV3SwapBorrowRateMode: '0x738042389A8d6B0F6D6ab009c42dfF84ebB737C0',
    AaveV3Withdraw: '0xbf492F869DdB1A18BB4F41b6c3059D9f882Fe7ff',

    // flashloan
    FLAaveV3: '0x3Cc0d5DAE1B94e294152C3150aA732b97af603E1',
    FLBalancer: '0xdb28fE77709D88badC86868B27937428C3F48E73',

    GasFeeTakerL2: '0x2F64f73B222B4978CAfd0295c0fa106cE5f34996',
    AaveV3RatioCheck: '0x4a5c2cbCFB921b596Dec049389899CC8Eb4678ED',

    // uniswap V3
    UniCollectV3: '0xd521cbEfE58440d1C31FD0baF41fdfE18D028704',
    UniMintV3: '0x7AC778fB7CaB7D368f37d6E7CE3c293077969331',
    UniSupplyV3: '0x55675C6041A33EE9BDd796Edaa0f098AC7F3534f',
    UniWithdrawV3: '0xa004c22eFd0CD87847DE83Ce9ab92af5382c2efe',
    UniCreatePoolV3: '0x334Ab3C12a4c0315566fd9308880Dad71F838Dc5',
  }
};

const otherAddresses = {
  [NETWORKS.ethereum.chainId]: {
    RecipeExecutor: '0x1D6DEdb49AF91A11B5C5F34954FD3E8cC4f03A86',
    DFSRegistry: '0x287778F121F134C66212FB16c9b53eC991D32f5b',
    DFSProxyRegistry: '0x29474FdaC7142f9aB7773B8e38264FA15E3805ed',
    ProxyRegistry: '0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4',

    McdCdpManager: '0x5ef30b9986345249bc32d8928b7ee64de9435e39',
    BCdpManager: '0x3f30c2381CD8B917Dd96EB2f1A4F96D91324BBed',
    AaveDefaultMarket: '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5',
    UniswapV3PositionManager : '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
    RaiWethUniV2LPToken : '0x8aE720a71622e824F576b4A8C03031066548A3B1',
    BalancerToken : '0xba100000625a3754423978a60c9317c58a424e3D',
    CrvToken: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    CvxToken: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
    DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
    LUSD: '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
    BLUSD: '0x76F7774139bf0097d2882C41AF5A37717e3641A7',
    Empty: '0x0000000000000000000000000000000000000000',
  },
  [NETWORKS.optimism.chainId]: {
    RecipeExecutor: '0x44FDe16DDCd7c02bE28de52CEc08997336051735',
    DFSRegistry: '0xAf707Ee480204Ed6e2640B53cE86F680D28Afcbd',
    ProxyRegistry: '0x283Cc5C26e53D66ed2Ea252D986F094B37E6e895',

    DSGuardFactory: '0xc19d0F1E2b38AA283E226Ca4044766A43aA7B02b',
    AdminVault: '0x136b1bEAfff362530F98f10E3D8C38f3a3F3d38C',
    DefisaverLogger: '0xFc2f1355296ab7dd98a1260E3Ff5E906999d4Acb',
    Empty: '0x0000000000000000000000000000000000000000',

    UniswapV3PositionManager : '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  },
  [NETWORKS.arbitrum.chainId]: {
    RecipeExecutor: '0xe775c59e5662597bcE8aB4432C06380709554883',
    DFSRegistry: '0xBF1CaC12DB60819Bfa71A328282ecbc1D40443aA',
    ProxyRegistry: '0x283Cc5C26e53D66ed2Ea252D986F094B37E6e895',

    DSGuardFactory: '0x5261abC3a94a6475D0A1171daE94A5f84fbaEcD2',
    AdminVault: '0xd47D8D97cAd12A866900eEc6Cde1962529F25351',
    DefisaverLogger: '0xE6f9A5C850dbcD12bc64f40d692F537250aDEC38',
    Empty: '0x0000000000000000000000000000000000000000',

    UniswapV3PositionManager: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  },
};

/**
 *
 * @param {string} name
 * @param {chainId} [chainId]
 * @returns {EthAddress}
 */
const getAddr = (name, chainId) => {
  const _chainId = typeof chainId === 'undefined' ? CONFIG.chainId : chainId;

  const actions = actionAddresses[_chainId];
  const other = otherAddresses[_chainId];

  // skip this check if we're in testing mode
  if (!CONFIG.testingMode) {
    if (!actions && !other) throw new Error(`Cannot find address for chainId: ${_chainId}.`);
    if (!actions[name] && !other[name]) throw new Error(`Cannot find address for name: ${name} (chainId: ${_chainId}).`);
  }

  return actions[name] || other[name];
};

module.exports = {
  getAddr,
  actionAddresses,
}
