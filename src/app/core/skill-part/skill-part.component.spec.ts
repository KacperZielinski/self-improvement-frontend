import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPartComponent } from './skill-part.component';

describe('SkillPartComponent', () => {
  let component: SkillPartComponent;
  let fixture: ComponentFixture<SkillPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
