import { MedicalPage } from './app.po';

describe('medical App', () => {
  let page: MedicalPage;

  beforeEach(() => {
    page = new MedicalPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
