import { Angular2chartsPage } from './app.po';

describe('angular2charts App', function() {
  let page: Angular2chartsPage;

  beforeEach(() => {
    page = new Angular2chartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
