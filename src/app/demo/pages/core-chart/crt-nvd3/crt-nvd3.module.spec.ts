import { CrtNvd3Module } from './crt-nvd3.module';

describe('CrtNvd3Module', () => {
  let crtNvd3Module: CrtNvd3Module;

  beforeEach(() => {
    crtNvd3Module = new CrtNvd3Module();
  });

  it('should create an instance', () => {
    expect(crtNvd3Module).toBeTruthy();
  });
});
