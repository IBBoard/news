/**
 * ownCloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Bernhard Posselt <dev@bernhard-posselt.com>
 * @copyright Bernhard Posselt 2014
 */
describe('ContentController', () => {
    'use strict';

    beforeEach(module('News'));


    it('should publish data to models', inject(($controller, Publisher,
        FeedResource, ItemResource) => {

        Publisher.subscribe(ItemResource).toChannels('items');
        Publisher.subscribe(FeedResource).toChannels('feeds');

        let controller = $controller('ContentController', {
            data: {
                'items': [
                    {
                        id: 3
                    },
                    {
                        id: 4
                    }
                ],
                'feeds': [
                    {
                        url: 'hi'
                    }
                ]
            }
        });

        expect(controller.getItems().length).toBe(2);
        expect(controller.getFeeds().length).toBe(1);
    }));

});