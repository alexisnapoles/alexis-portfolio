import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickySideIcons } from './sticky-side-icons';

describe('StickySideIcons', () => {
  let component: StickySideIcons;
  let fixture: ComponentFixture<StickySideIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickySideIcons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickySideIcons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
