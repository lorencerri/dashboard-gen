import { expect } from 'chai';
import 'mocha';

import { Dashboard } from '../src';
const dashboard = new Dashboard({ port: 3001, title: 'ThisWillChange' });

describe('Dashboard', () => {
    describe('#port', () => {
        it('should return MyBot Dashboard', () => {
            expect(dashboard.title).to.equal('MyBot Dashboard');
        });
    });
    describe('#components', () => {
        it('typeof should return object', () => {
            expect(typeof dashboard.components).to.equal('object');
        });
    });
    describe('ServerManager', () => {
        describe('#port', () => {
            it('should return 3001', () =>
                expect(dashboard.ServerManager.port).to.equal(3001));
        });
        describe('#title', () => {
            it('should return MyBot Dashboard', () =>
                expect(dashboard.ServerManager.title).to.equal(
                    'MyBot Dashboard'
                ));
        });
    });

    dashboard.setTitle("My Bot's Dashboard");

    dashboard.addComponent('Name');
    dashboard.addComponent('Avatar URL');

    dashboard.addComponent('Member Leave', { category: 'Event Messages' });
    dashboard.addComponent('Member Join', { category: 'Event Messages' });
});
