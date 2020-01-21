import { inject, TestBed } from '@angular/core/testing';
import { LoggedOutGuard } from './logged-out.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedOutGuard],
    });
  });

  it('should ...', inject([LoggedOutGuard], (guard: LoggedOutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
