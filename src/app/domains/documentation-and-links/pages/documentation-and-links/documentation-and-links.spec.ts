import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationAndLinks } from './documentation-and-links';

describe('DocumentationAndLinks', () => {
  let component: DocumentationAndLinks;
  let fixture: ComponentFixture<DocumentationAndLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentationAndLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationAndLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
