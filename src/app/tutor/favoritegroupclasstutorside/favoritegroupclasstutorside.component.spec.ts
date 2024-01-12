import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritegroupclasstutorsideComponent } from './favoritegroupclasstutorside.component';

describe('FavoritegroupclasstutorsideComponent', () => {
  let component: FavoritegroupclasstutorsideComponent;
  let fixture: ComponentFixture<FavoritegroupclasstutorsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritegroupclasstutorsideComponent]
    });
    fixture = TestBed.createComponent(FavoritegroupclasstutorsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
