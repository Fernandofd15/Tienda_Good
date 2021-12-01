import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalitosComponent } from './animalitos.component';

describe('AnimalitosComponent', () => {
  let component: AnimalitosComponent;
  let fixture: ComponentFixture<AnimalitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
