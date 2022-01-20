import {ClientServiceService} from "./client-service.service";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {EnvironmentService} from "../environment.service";
import any = jasmine.any;


describe('Client Service', () => {
  let clientService: ClientServiceService,
      httpTestClient: HttpTestingController,
      environmentService: EnvironmentService;
  let envSpy: any;
  beforeEach(() => {
    envSpy = jasmine.createSpyObj(EnvironmentService, ['baseUri'])
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
    // environmentService =
  })

  it('should get all clients', () => {

    clientService.getClients()
      .subscribe(client => {

        expect(client).withContext('No clients returned').toBeTruthy();

        expect(client.length).withContext('Incorrect number of clients').toEqual(5);

        const dluffy = client.find(d => d.email === 'dluffy@gmail.com');
        expect(dluffy?.firstName).withContext('No user with name dluffy present in clients').toBe('dluffy')
      });

    const req = httpTestClient.expectOne(envSpy.baseUri + ' http://localhost:8080/api/v1/client');

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

  });

});
