import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let componentInstance: AppComponent;
  let router: Router;
  let location: Location;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('Empty url check', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toEqual('/register');
  }));

  it('Location button click', fakeAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const loginBtn: HTMLButtonElement =
        fixture.debugElement.nativeElement.querySelector('#login_button');
      const registerlink: HTMLAnchorElement =
        fixture.debugElement.nativeElement.querySelector('#register_button');

      loginBtn.click();
      tick();
      expect(location.path()).toEqual('/dashboard');
      location.back();
      expect(location.path()).toEqual('');
      location.forward();
      expect(location.path()).toEqual('/dashboard');

      const isInactive = registerlink.classList.contains('active');
      expect(isInactive).toBeFalsy();
      registerlink.click();
      tick();
      expect(location.path()).toEqual('/register');
      const isActive = registerlink.classList.contains('active');
      expect(isActive).toBeTruthy();
    });
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
