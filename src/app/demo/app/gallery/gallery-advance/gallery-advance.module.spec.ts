import { GalleryAdvanceModule } from './gallery-advance.module';

describe('GalleryAdvanceModule', () => {
  let galleryAdvanceModule: GalleryAdvanceModule;

  beforeEach(() => {
    galleryAdvanceModule = new GalleryAdvanceModule();
  });

  it('should create an instance', () => {
    expect(galleryAdvanceModule).toBeTruthy();
  });
});
