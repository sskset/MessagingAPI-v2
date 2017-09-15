/**
  * @module TelstraSMSMessagingAPILib
  *
  * The Telstra SMS Messaging API allows your applications to send and receive SMS text messages
  * from Australia's leading network operator. It also allows your application to track the delivery
  * status of both sent and received SMS messages.
  */

'use strict';

const Configuration = require('./configuration');
const OAuthManager = require('./OAuthManager');
const Environments = require('./Environments');
const MessagingController = require('./Controllers/MessagingController');
const OAuthAuthorizationController = require('./Controllers/OAuthAuthorizationController');
const StatusEnum = require('./Models/StatusEnum');
const OutboundPollResponse = require('./Models/OutboundPollResponse');
const MessageTypeEnum = require('./Models/MessageTypeEnum');
const MessageSentResponse = require('./Models/MessageSentResponse');
const Message = require('./Models/Message');
const SendSMSRequest = require('./Models/SendSMSRequest');
const SendMMSRequest = require('./Models/SendMMSRequest');
const MMSContent = require('./Models/MMSContent');
const InboundPollResponse = require('./Models/InboundPollResponse');
const OAuthScopeEnum = require('./Models/OAuthScopeEnum');
const OAuthToken = require('./Models/OAuthToken');
const OAuthProviderErrorEnum = require('./Models/OAuthProviderErrorEnum');
const ErrorErrorException = require('./Exceptions/ErrorErrorException');
const OAuthProviderException = require('./Exceptions/OAuthProviderException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of TelstraSMSMessagingAPILib
    Configuration,
    Environments,
    OAuthManager,
    // controllers of TelstraSMSMessagingAPILib
    MessagingController,
    OAuthAuthorizationController,
    // models of TelstraSMSMessagingAPILib
    StatusEnum,
    OutboundPollResponse,
    MessageTypeEnum,
    MessageSentResponse,
    Message,
    SendSMSRequest,
    SendMMSRequest,
    MMSContent,
    InboundPollResponse,
    OAuthScopeEnum,
    OAuthToken,
    OAuthProviderErrorEnum,
    // exceptions of TelstraSMSMessagingAPILib
    ErrorErrorException,
    OAuthProviderException,
    APIException,
};

module.exports = initializer;