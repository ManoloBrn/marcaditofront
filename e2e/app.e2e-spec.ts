import { MercaditofrontPage } from './app.po';

describe('mercaditofront App', function() {
  let page: MercaditofrontPage;

  beforeEach(() => {
    page = new MercaditofrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
