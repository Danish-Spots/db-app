import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbTableComponent } from './db-table.component';

describe('DbTableComponent', () => {
  let component: DbTableComponent;
  let fixture: ComponentFixture<DbTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbTableComponent]
    });
    fixture = TestBed.createComponent(DbTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
