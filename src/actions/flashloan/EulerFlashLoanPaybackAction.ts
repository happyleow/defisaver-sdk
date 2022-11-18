import { SendTokenAction } from '../basic';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * Pays back a flashloan from Euler
 *
 * @category Flashloans
 */
export class EulerFlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount
   * @param tokenAddr
   */
  constructor(loanAmount: uint256, tokenAddr: EthAddress) {
    super(tokenAddr, getAddr('FLEuler'), loanAmount);
  }
}
