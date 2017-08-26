import { H4mitAngularPage } from './app.po';

describe('h4mit-angular App', () => {
  let page: H4mitAngularPage;

  beforeEach(() => {
    page = new H4mitAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
