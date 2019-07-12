import { GalleryGridModule } from './gallery-grid.module';

describe('GalleryGridModule', () => {
  let galleryGridModule: GalleryGridModule;

  beforeEach(() => {
    galleryGridModule = new GalleryGridModule();
  });

  it('should create an instance', () => {
    expect(galleryGridModule).toBeTruthy();
  });
});
