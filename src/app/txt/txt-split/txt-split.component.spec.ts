import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtSplitComponent } from './txt-split.component';

describe('TxtSplitComponent', () => {
  let component: TxtSplitComponent;
  let fixture: ComponentFixture<TxtSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TxtSplitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxtSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
