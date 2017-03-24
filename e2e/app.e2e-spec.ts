import { SapwebPage } from './app.po';

describe('sapweb App', () => {
  let page: SapwebPage;

  beforeEach(() => {
    page = new SapwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
