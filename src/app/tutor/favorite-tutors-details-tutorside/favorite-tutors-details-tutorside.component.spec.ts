import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTutorsDetailsTutorsideComponent } from './favorite-tutors-details-tutorside.component';

describe('FavoriteTutorsDetailsTutorsideComponent', () => {
  let component: FavoriteTutorsDetailsTutorsideComponent;
  let fixture: ComponentFixture<FavoriteTutorsDetailsTutorsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteTutorsDetailsTutorsideComponent]
    });
    fixture = TestBed.createComponent(FavoriteTutorsDetailsTutorsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
