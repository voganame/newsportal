import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddNewsComponent } from './modal-add-news.component';

describe('ModalAddNewsComponent', () => {
  let component: ModalAddNewsComponent;
  let fixture: ComponentFixture<ModalAddNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
