import { RuckenTodoPage } from './app.po';

describe('rucken-todo App', () => {
  let page: RuckenTodoPage;

  beforeEach(() => {
    page = new RuckenTodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
