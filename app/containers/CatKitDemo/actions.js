/*
 *
 * CatKitDemo actions
 *
 */

import * as constants from './constants';

export function defaultAction() {
  return {
    type: constants.DEFAULT_ACTION,
  };
}

export function receiveBulkCif(cif) {
  return {
    type: constants.RECEIVE_BULK_CIF,
    payload: cif,
  };
}

export function receiveSlabCifs(cifs) {
  return {
    type: constants.RECEIVE_SLAB_CIFS,
    payload: cifs,
  };
}
