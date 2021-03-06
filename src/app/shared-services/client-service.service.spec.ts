import {ClientServiceService} from "./client-service.service";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {EnvironmentService} from "../environment.service";
import {Client} from "../model/Client";
import {HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs";



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

  it('should update the client', () => {
    const d: Partial<Client> = {
      firstName: 'Hancock'
    };
    clientService.update('2', d)
      .subscribe(client => {
        expect(client).toBeTruthy();
        expect(client.firstName).toEqual('Hancock');

      });

    const req = httpTestClient.expectOne(`${envSpy.baseUri}/client/2`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body.firstName).toEqual(d.firstName);
    req.flush({
      firstName: 'Hancock',
      lastName: 'Empress',
      password: 'p@2332',
      email: 'd@lufy.com'
    })
  });

  it('should throw an error if update client fails', () => {
    const d: Partial<Client> = {
      firstName: 'Hancock'
    };
      clientService.update('2', d)
        .pipe(
          catchError(err => {
            expect(err.status).toBe(500);
            return [];
          })
        )
        .subscribe(() => fail('Updating a client should fail with 500'))

    let req = httpTestClient.expectOne(`${envSpy.baseUri}/client/2`);
      expect(req.request.method).toBe('PUT');

      req.flush('Save client failed', {status: 500, statusText: 'Internal Server Error'})

  });

  it('should fetch all clients with specified params', () => {

     clientService.getClients()
       .subscribe(client => {
          expect(client).toBeTruthy();
          expect(client.length).withContext('Initial data must have a length of 2').toBe(2);

       });

     let req = httpTestClient.expectOne(req1 => req1.url === `${envSpy.baseUri}/client`);
     expect(req.request.method).toBe('GET');
     expect(req.request.params.get('sort')).toBe('asc');
     expect(req.request.params.get('page')).toBe('0');
     expect(req.request.params.get('size')).toBe('2');
     expect(req.request.params.get('filter')).toBe('');

     req.flush([{
       firstName: 'Mickey',
       lastName: 'dluffy',
       password: 'p@ssword',
       email: 'dluffy@gmail.com'
     }, {
       firstName: 'Nico',
       lastName: 'Robin',
       password: 'l@ssword',
       email: 'nico@gmail.com'
     }], {status: 200, statusText: 'Successful'})
  });
  afterEach(() => {
    httpTestClient.verify();
  })
});
