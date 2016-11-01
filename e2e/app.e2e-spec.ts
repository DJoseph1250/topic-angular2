import { TopicAngular2Page } from './app.po';

describe('topic-angular2 App', function() {
  let page: TopicAngular2Page;

  beforeEach(() => {
    page = new TopicAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
