import { Ng2ChartPage } from './app.po';

describe('ng2-chart App', () => {
  let page: Ng2ChartPage;

  beforeEach(() => {
    page = new Ng2ChartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
