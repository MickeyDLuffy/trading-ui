import {ClientServiceService} from "./client-service.service";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {EnvironmentService} from "../environment.service";



describe('Client Service', () => {
  let clientService: ClientServiceService,
      httpTestClient: HttpTestingController,
      environmentService: EnvironmentService;
  let envSpy: any;
  beforeEach(() => {
    // Mocking the EnvironmentService. Since it uses get and set accessors, we need to use the
    // properties field, instead of the methods field
    envSpy = jasmine.createSpyObj('EnvironmentService', {}, {
      baseUri: 'http://localhost:8080/api/v1'
    });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientServiceService,
        {
          provider: EnvironmentService,
          useValue: envSpy
        }]

    });
    clientService = TestBed.inject(ClientServiceService);
    httpTestClient = TestBed.inject(HttpTestingController);
    environmentService = TestBed.inject(EnvironmentService);
  }); //

  it('should get all clients', () => {
    clientService.getClients()
      .subscribe(client => {

        expect(client).withContext('No clients returned').toBeTruthy();

        expect(client.length).withContext('Incorrect number of clients').toEqual(1);

        const dluffy = client.find(d => d.email === 'dluffy@gmail.com');
        expect(dluffy?.firstName).withContext('No user with name Mickey present in clients').toBe('Mickey')
      });

    const req = httpTestClient.expectOne(`${envSpy.baseUri}/client`);

    expect(req.request.method).withContext('This must be a GET request').toEqual('GET');
    const clientMock = [{
      firstName: 'Mickey',
      lastName: 'dluffy',
      password: 'p@ssword',
      email: 'dluffy@gmail.com'
    }]
    req.flush(clientMock);
  });

  it('should get client by the client id', () => {

    clientService.getClientById('s')
      .subscribe(client => {
          expect(client).toBeTruthy();
          expect(client.email).withContext('Client email must be equak to d@lufy.com').toBe('d@lufy.com');
      })

    let req = httpTestClient.expectOne(`${envSpy.baseUri}/client/s`);

    expect(req.request.method).toBe('GET');
    const mock = {
      firstName: 'Jhey',
      lastName: 'Empress',
      password: 'p@2332',
      email: 'd@lufy.com'
    }
    req.flush(mock);

  });

});
