const Action = require('@defisaver/sdk/src/Action');
const { requireAddress } = require('@defisaver/sdk/src/utils/general');
const { getAddr } = require('@defisaver/sdk/src/addresses');

class CurveGaugeWithdrawAction extends Action {
    
    constructor(gaugeAddr, lpToken, receiver, amount) {
        requireAddress(receiver);
        super('CurveGaugeWithdraw',
            getAddr('CurveGaugeWithdraw'),
            [['address', 'address', 'address', 'uint256']],
            [[...arguments]],
        );

        this.mappableArgs = [
            this.args[0][2],
            this.args[0][3],
        ];
    }
}

module.exports = CurveGaugeWithdrawAction;
