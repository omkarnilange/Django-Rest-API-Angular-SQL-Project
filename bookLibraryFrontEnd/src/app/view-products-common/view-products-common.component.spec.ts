import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsCommonComponent } from './view-products-common.component';

describe('ViewProductsCommonComponent', () => {
  let component: ViewProductsCommonComponent;
  let fixture: ComponentFixture<ViewProductsCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductsCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductsCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
