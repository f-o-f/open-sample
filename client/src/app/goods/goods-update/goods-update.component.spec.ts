import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsUpdateComponent } from './goods-update.component';

describe('GoodsUpdateComponent', () => {
  let component: GoodsUpdateComponent;
  let fixture: ComponentFixture<GoodsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
