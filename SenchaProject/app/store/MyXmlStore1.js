/*
 * File: app/store/MyXmlStore1.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('tekwave.store.MyXmlStore1', {
    extend: 'Ext.data.Store',

    requires: [
        'tekwave.model.allMsgList',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Xml'
    ],

    config: {
        autoLoad: true,
        model: 'tekwave.model.allMsgList',
        storeId: 'MyXmlStore1',
        proxy: {
            type: 'ajax',
            url: 'loginresponse.xml',
            reader: {
                type: 'xml',
                rootProperty: 'TCResponse',
                successProperty: 'ResponseReason',
                record: 'Site '
            }
        }
    }
});