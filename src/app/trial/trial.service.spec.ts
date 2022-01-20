import {TrialService} from "./trial.service";
import {TestBed} from "@angular/core/testing";
import {LoginService} from "../security/login.service";


describe('Trial test service', () => {
  let trialService: TrialService;
  let loggerSpy;
  beforeEach(() => {
      loggerSpy = jasmine.createSpyObj('LoggerService', ['log'])
      TestBed.configureTestingModule({
        providers: [
          TrialService,
          {provide: LoginService, useValue: loggerSpy}
          ]
      });
      trialService = TestBed.inject(TrialService);
  })

  it('should add two to parameter', () => {
    const loo = jasmine.createSpyObj('logger', ['log'])

    const result = trialService.addTwo(2)
    loo.log();
    expect(result).toEqual(4 );

    expect(loo.log).toHaveBeenCalledTimes(1);
  });

  it('should substract 2 from param', () => {

    const result = trialService.substractTwo(5);

    expect(result).withContext('subtracting 2 from value must result in 3').toEqual(3)
  });

})

describe('Testing additions', () => {

  it('should add ', () => {
    const r = 10;
    expect(10).withContext('should equal 10').toEqual(10)
  })
})
