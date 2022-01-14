const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');
const mstableAssetPairs = require('../../utils/mstableAssetPairs');

/**
 * MStableWithdrawAction
 */
class MStableWithdrawAction extends Action {
    /**
     * @param bAsset
     * @param mAsset
     * @param saveAddress
     * @param vaultAddress
     * @param from
     * @param to
     * @param amount
     * @param minOut
     * @param assetPair
     */
    constructor(
        bAsset,
        mAsset,
        saveAddress,
        vaultAddress,
        from,
        to,
        amount,
        minOut,
        assetPair,
    ) {
        requireAddress(bAsset);
        requireAddress(mAsset);
        requireAddress(saveAddress);
        requireAddress(vaultAddress);
        requireAddress(from);
        requireAddress(to);

        super(
            'MStableWithdraw',
            getAddr('MStableWithdraw'),
            [['address', 'address', 'address', 'address', 'address', 'address', 'uint256', 'uint256', 'uint256']],
            [[...arguments]],
        );

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][1],
            this.args[0][2],
            this.args[0][3],
            this.args[0][4],
            this.args[0][5],
            this.args[0][6],
            this.args[0][7],
            this.args[0][8],
        ];
    }

    async getAssetsToApprove() {
        const assetPair = this.args[0][8];
        const owner = this.args[0][4];
        let asset;
        switch (assetPair) {
        case mstableAssetPairs.BASSET_IMASSETVAULT:
        case mstableAssetPairs.MASSET_IMASSETVAULT:
        case mstableAssetPairs.IMASSET_IMASSETVAULT:
            return [];
        case mstableAssetPairs.MASSET_IMASSET:
        case mstableAssetPairs.BASSET_IMASSET:
            asset = this.args[0][2];
            break;
        case mstableAssetPairs.BASSET_MASSET:
            asset = this.args[0][1];
            break;
        default:
            return [];
        }
        return [{ asset, owner }];
    }
}

module.exports = MStableWithdrawAction;
