import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logoutuser } from './logoutuser';

describe('Logoutuser', () => {
  let component: Logoutuser;
  let fixture: ComponentFixture<Logoutuser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logoutuser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logoutuser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
