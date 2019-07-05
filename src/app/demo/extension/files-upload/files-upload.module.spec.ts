import { FilesUploadModule } from './files-upload.module';

describe('FilesUploadModule', () => {
  let filesUploadModule: FilesUploadModule;

  beforeEach(() => {
    filesUploadModule = new FilesUploadModule();
  });

  it('should create an instance', () => {
    expect(filesUploadModule).toBeTruthy();
  });
});
