import {
  CosmosMessage,
} from "@subql/types-cosmos";

/*
export async function handleBlock(block: CosmosBlock): Promise<void> {
  // If you want to index each block in Cosmos (CosmosHub), you could do that here
}
*/

/*
export async function handleTransaction(tx: CosmosTransaction): Promise<void> {
  // If you want to index each transaction in Cosmos (CosmosHub), you could do that here
  const transactionRecord = Transaction.create({
    id: tx.hash,
    blockHeight: BigInt(tx.block.block.header.height),
    timestamp: tx.block.block.header.time,
  });
  await transactionRecord.save();
}
*/

export async function handleSwapMessage(
  message: CosmosMessage
): Promise<void> {
  logger.info(JSON.stringify(message));

  // const record = new MessageEntity(`${msg.tx.tx.hash}-${msg.idx}`);
  // record.blockHeight = BigInt(msg.block.block.header.height);
  // record.txHash = msg.tx.txhash;
  // record.contract = msg.msg.contract;
  // record.sender = msg.msg.sender;
  // await record.save();
}
