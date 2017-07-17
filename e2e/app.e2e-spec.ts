import { TourupLoginPage } from './app.po';

describe('tourup-login App', () => {
  let page: TourupLoginPage;

  beforeEach(() => {
    page = new TourupLoginPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
