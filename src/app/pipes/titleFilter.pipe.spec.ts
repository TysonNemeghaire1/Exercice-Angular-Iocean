import { TitleFilterPipe } from './titleFilter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new TitleFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
