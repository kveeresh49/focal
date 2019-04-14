import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LanguageChangeObserver {
  public emitter: EventEmitter<boolean> = new EventEmitter();

  public doSomething(langChanged: boolean) {
    console.log("Emitting the LanguageChange.........");
    this.emitter.emit(langChanged);
  }
}
