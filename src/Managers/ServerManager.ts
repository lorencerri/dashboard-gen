const app = require('express')();
const path = require('path');

import { ComponentManager } from './';

export class ServerManager {
    port: Number;
    title: string;

    constructor(
        port: Number,
        title: string,
        ComponentManager: ComponentManager
    ) {
        this.port = port;
        this.title = title;

        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, '../views'));

        app.get('/', (_req: any, res: any) =>
            res.render('pages/index', {
                title: this.title,
                categories: [
                    ...new Set(
                        [...ComponentManager.components.values()].map(
                            i => i.options.category
                        )
                    )
                ],
                components: [...ComponentManager.components.values()]
            })
        );

        app.listen(this.port);
    }
}
