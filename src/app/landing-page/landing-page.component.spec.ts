import {async, ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {LandingPageComponent} from "./landing-page.component";
import {HttpClientModule} from "@angular/common/http";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('Landing Page component', () => {
   let component: LandingPageComponent;
   let fixture: ComponentFixture<LandingPageComponent>;
   let debug: DebugElement;

   beforeEach(waitForAsync(() => {
       TestBed.configureTestingModule({
         imports: [HttpClientModule],
         declarations: []
       }).compileComponents()
         .then(() => {
           fixture = TestBed.createComponent(LandingPageComponent);
           component = fixture.componentInstance;
           debug = fixture.debugElement;
         })
   }));


  it('should create the landing page component', function () {
       expect(component).withContext('Failed to create landing page component!').toBeTruthy();

       const rows = debug.queryAll(By.css('.trends-table__rows'));
       expect(rows).toBeTruthy();
       expect(rows.length).toEqual(7);
  });

})
