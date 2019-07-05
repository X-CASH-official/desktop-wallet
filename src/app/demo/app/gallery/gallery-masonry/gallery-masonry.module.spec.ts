import { GalleryMasonryModule } from './gallery-masonry.module';

describe('GalleryMasonryModule', () => {
  let galleryMasonryModule: GalleryMasonryModule;

  beforeEach(() => {
    galleryMasonryModule = new GalleryMasonryModule();
  });

  it('should create an instance', () => {
    expect(galleryMasonryModule).toBeTruthy();
  });
});
