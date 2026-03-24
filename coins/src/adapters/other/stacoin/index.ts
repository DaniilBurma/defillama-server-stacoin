import { getUniV2PairInfo } from "../utils/getUniV2PairInfo";

const STACOIN = "bsc:0x0cf7b78a8d741771ea269b4708998a85489186c9";

async function fetch(timestamp: number = 0) {
  const pair = "0x5cb0e7d7a1316cf4bba5eb0a11fb47563480c074"; // STACOIN / WBNB

  return {
    [STACOIN]: await getUniV2PairInfo("bsc", pair, timestamp),
  };
}

export default {
  fetch,
};
Add stacoin price adapter

