import { create_reserve_proofModule } from './create_reserve_proof.module';

describe('create_reserve_proofModule', () => {
  let create_reserve_proofModule: create_reserve_proofModule;

  beforeEach(() => {
    create_reserve_proofModule = new create_reserve_proofModule();
  });

  it('should create an instance', () => {
    expect(create_reserve_proofModule).toBeTruthy();
  });
});
