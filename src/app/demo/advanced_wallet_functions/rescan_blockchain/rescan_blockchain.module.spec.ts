import { rescan_blockchainModule } from './rescan_blockchain.module';

describe('rescan_blockchainModule', () => {
  let rescan_blockchainModule: rescan_blockchainModule;

  beforeEach(() => {
    rescan_blockchainModule = new rescan_blockchainModule();
  });

  it('should create an instance', () => {
    expect(rescan_blockchainModule).toBeTruthy();
  });
});
