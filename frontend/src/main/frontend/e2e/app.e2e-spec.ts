import { HausFrontendPage } from './app.po';

describe('haus-frontend App', () => {
  let page: HausFrontendPage;

  beforeEach(() => {
    page = new HausFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
