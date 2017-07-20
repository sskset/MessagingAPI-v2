/**
 * TelstraSMSMessagingAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MessageSentResponse
 */
class MessageSentResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.messages = this.constructor.getValue(obj.messages);
        this.messageType = this.constructor.getValue(obj.messageType || obj.MessageType);
        this.numberSegments = this.constructor.getValue(obj.numberSegments || obj.NumberSegments);
        this.numberDestinations =
          this.constructor.getValue(obj.numberDestinations
     || obj.NumberDestinations);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'messages', realName: 'messages', array: true, type: 'Message' },
            { name: 'messageType', realName: 'messageType' },
            { name: 'numberSegments', realName: 'numberSegments' },
            { name: 'numberDestinations', realName: 'numberDestinations' },
        ]);
    }
}

module.exports = MessageSentResponse;