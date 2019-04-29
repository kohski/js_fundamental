
describe('Jasmine fundamental',function(){
  let area;
  beforeEach(function(){
    area = new MyArea(10,5);
  });
  // afterEach(function(){
  // });
  it('tests method of getTriangle', function(){
    expect(area.getTriangle()).toEqual(25);
  });
  it('test method od getSquare',function(){
    expect(area.getSquare() === 50).toBeTruthy();
  });
});