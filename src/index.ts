import { ServerManager, ComponentManager } from './Managers';
import { Component } from './Classes';

export class Dashboard {
    ServerManager: ServerManager;
    ComponentManager: ComponentManager;
    port: Number;

    constructor(options: { port: number; title?: string }) {
        const { port = 3000, title = 'Dashboard' } = options;

        this.ComponentManager = new ComponentManager();
        this.ServerManager = new ServerManager(
            port,
            title,
            this.ComponentManager
        );

        this.port = this.ServerManager.port;
    }

    // TODO: Move to ComponentManager
    addComponent(name: string, options: any = { category: 'General' }) {
        this.ComponentManager.components.add(new Component(name, options));
    }

    get components() {
        return this.ComponentManager.components;
    }

    get title() {
        return this.ServerManager.title;
    }

    setTitle(title: string) {
        this.ServerManager.title = title;
    }
}
