import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEnvironment, LogLevel } from 'src/environments/ienvironment';

/**
 * This will be injected into services to access our environment. Makes testing easy
 * @see https://seangwright.medium.com/the-best-way-to-use-angulars-environment-files-a0c098551abc
 *
 *
 */
@Injectable({
  providedIn: 'root'
})
export class EnvironmentService implements IEnvironment {

  get baseUri(): string {
    return environment.baseUri;
  }

  get production(): boolean {
    return environment.production;
  }

  get enableDebugTools(): boolean {
    return environment.enableDebugTools;
  }

  get logLevel(): LogLevel {
    return environment.logLevel;
  }


}
