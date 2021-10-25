class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: version is ${this.version}`;
  }
}

// модификаторы
class Animal {
  protected voice: string = '';
  public color: string = 'black';

  private go() {
    console.log('go');
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();

//абстрактные классы

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render');
  }

  info(): string {
    return 'this is info';
  }
}
