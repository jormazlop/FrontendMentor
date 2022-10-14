import { Notification } from './notification';

describe('Notification Model', () => {

  it('Create instance without parameters', () => {
    expect(new Notification()).toBeTruthy();
  });

  it('Create instance with parameters', () => {
    expect(new Notification('Marc', 'commented your post','./assets/image.png', '5 mins ago', true)).toBeTruthy();
  });
});
