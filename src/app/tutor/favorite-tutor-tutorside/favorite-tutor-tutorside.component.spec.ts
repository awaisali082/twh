import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTutorTutorsideComponent } from './favorite-tutor-tutorside.component';

describe('FavoriteTutorTutorsideComponent', () => {
  let component: FavoriteTutorTutorsideComponent;
  let fixture: ComponentFixture<FavoriteTutorTutorsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteTutorTutorsideComponent]
    });
    fixture = TestBed.createComponent(FavoriteTutorTutorsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
