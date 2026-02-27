import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsoEmailComponent } from './sso-email.component';

describe('SsoEmailComponent', () => {
  let component: SsoEmailComponent;
  let fixture: ComponentFixture<SsoEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsoEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsoEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
