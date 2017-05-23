import { RuckenTodoPage } from './app.po';

describe('rucken-todo App', () => {
  let page: RuckenTodoPage;

  beforeEach(() => {
    page = new RuckenTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
