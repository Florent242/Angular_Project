import { TestBed } from '@angular/core/testing';

import { RecetteService } from './recettes';

describe('RecetteService', () => {
  let service: RecetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
