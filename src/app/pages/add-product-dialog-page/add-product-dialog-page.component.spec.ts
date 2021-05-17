import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductDialogPageComponent } from './add-product-dialog-page.component';

describe('AddProductDialogPageComponent', () => {
  let component: AddProductDialogPageComponent;
  let fixture: ComponentFixture<AddProductDialogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductDialogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductDialogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
