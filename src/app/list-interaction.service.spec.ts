import { TestBed } from '@angular/core/testing';

import { ListInteracionService } from './list-interaction.service';

describe('ListInteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListInteracionService = TestBed.get(ListInteracionService);
    expect(service).toBeTruthy();
  });
});
