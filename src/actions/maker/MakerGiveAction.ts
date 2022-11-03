import {Action}  from "../../Action";
import { requireAddress } from "../../utils/general";
import {EthAddress,uint256} from '../../types';
import { getAddr } from '../../addresses.js';

/**
 * MakerGiveAction - gives a vault to a selected address
 * 
 * @category Maker
 */
export class MakerGiveAction extends Action {
  /**
   * @param vaultId {VaultId}
   * @param newOwner {EthAddress}
   * @param createProxy {boolean}
   * @param mcdManager {EthAddress}
   */
  constructor(vaultId:uint256, newOwner:EthAddress, createProxy:boolean, mcdManager:EthAddress= getAddr('McdCdpManager')) {
    requireAddress(newOwner);
    super('McdGive', getAddr('McdGive'), ["uint256", "address", "bool", "address"], [vaultId, newOwner, createProxy, mcdManager]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}