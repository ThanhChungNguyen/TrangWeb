import { TrangWebPage } from './app.po';

describe('trang-web App', () => {
  let page: TrangWebPage;

  beforeEach(() => {
    page = new TrangWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
