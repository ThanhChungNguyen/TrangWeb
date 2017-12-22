import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentboxComponent } from './contentbox.component';

describe('ContentboxComponent', () => {
  let component: ContentboxComponent;
  let fixture: ComponentFixture<ContentboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
