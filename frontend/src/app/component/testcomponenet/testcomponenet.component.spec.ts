import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcomponenetComponent } from './testcomponenet.component';

describe('TestcomponenetComponent', () => {
  let component: TestcomponenetComponent;
  let fixture: ComponentFixture<TestcomponenetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestcomponenetComponent]
    });
    fixture = TestBed.createComponent(TestcomponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
