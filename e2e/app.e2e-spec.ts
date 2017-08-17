import { RltubeFrontendPage } from './app.po';

describe('rltube-frontend App', () => {
  let page: RltubeFrontendPage;

  beforeEach(() => {
    page = new RltubeFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
