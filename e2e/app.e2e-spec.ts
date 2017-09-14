import { NgCliPubPrivPage } from './app.po';

describe('ng-cli-pub-priv App', () => {
  let page: NgCliPubPrivPage;

  beforeEach(() => {
    page = new NgCliPubPrivPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
