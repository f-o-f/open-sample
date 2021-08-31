import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsDetailsComponent } from './goods-details.component';

describe('GoodsDetailsComponent', () => {
  let component: GoodsDetailsComponent;
  let fixture: ComponentFixture<GoodsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
