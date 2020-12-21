import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsCreateComponent } from './goods-create.component';

describe('GoodsCreateComponent', () => {
  let component: GoodsCreateComponent;
  let fixture: ComponentFixture<GoodsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
