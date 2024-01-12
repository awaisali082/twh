import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritegroupclassdetailstutorsideComponent } from './favoritegroupclassdetailstutorside.component';

describe('FavoritegroupclassdetailstutorsideComponent', () => {
  let component: FavoritegroupclassdetailstutorsideComponent;
  let fixture: ComponentFixture<FavoritegroupclassdetailstutorsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritegroupclassdetailstutorsideComponent]
    });
    fixture = TestBed.createComponent(FavoritegroupclassdetailstutorsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
