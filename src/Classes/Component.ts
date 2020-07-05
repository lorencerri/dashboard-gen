export interface ComponentInterface {
    category?: string;
}

export class Component {
    name: string;
    options: ComponentInterface;

    constructor(name: string, options: ComponentInterface) {
        this.name = name;
        this.options = options;
    }
}
