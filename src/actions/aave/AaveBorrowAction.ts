import Action from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint8,uint16,uint256,bytes32,bytes} from '../../types';

/**
 * AaveBorrowAction - Borrow tokens from Aave
 */
export default class AaveBorrowAction extends Action {
  /**
   * @param market {EthAddress}
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param rateMode {number} Borrow rate mode: Stable: 1, Variable: 2
   * @param to {EthAddress} Borrowed tokens will be sent to this address
   * @param onBehalf {EthAddress}
   */
  constructor(market:EthAddress, tokenAddr:EthAddress, amount:uint256, rateMode:uint256, to:EthAddress, onBehalf:EthAddress = getAddr('Empty')) {
    requireAddress(to);
    super(
      'AaveBorrow',
      getAddr('AaveBorrow'),
      ['address', 'address', 'uint256', 'uint256', 'address', 'address'],
      [market, tokenAddr, amount, rateMode, to, onBehalf],
    );
  }
}