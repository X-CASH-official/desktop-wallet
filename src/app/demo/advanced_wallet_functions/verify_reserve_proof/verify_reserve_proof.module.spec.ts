import { verify_reserve_proofModule } from './verify_reserve_proof.module';

describe('verify_reserve_proofModule', () => {
  let verify_reserve_proofModule: verify_reserve_proofModule;

  beforeEach(() => {
    verify_reserve_proofModule = new verify_reserve_proofModule();
  });

  it('should create an instance', () => {
    expect(verify_reserve_proofModule).toBeTruthy();
  });
});
