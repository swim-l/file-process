import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtMergeComponent } from './txt-merge.component';

describe('TxtMergeComponent', () => {
  let component: TxtMergeComponent;
  let fixture: ComponentFixture<TxtMergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TxtMergeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxtMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
