"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IntercomBridge = (function () {
    function IntercomBridge() {
    }
    IntercomBridge.init = function (apiKey, appId) {
        Intercom.setApiKeyForAppId(apiKey, appId);
    };
    IntercomBridge.registerIdentifiedUser = function (options) {
        if (typeof options.userId == 'number') {
            options.userId = String(options.userId);
        }
        if (options.userId && options.email && options.userId.length > 0 && options.email.length > 0) {
            Intercom.registerUserWithUserIdEmail(options.userId, options.email);
        }
        else if (options.userId && options.userId.length > 0) {
            Intercom.registerUserWithUserId(options.userId);
        }
        else if (options.email && options.email.length > 0) {
            Intercom.registerUserWithEmail(options.email);
        }
        else {
            console.log('[Intercom-NativeScript] ERROR - No user registered. You must supply an email, a userId or both');
        }
    };
    IntercomBridge.registerUnidentifiedUser = function () {
        Intercom.registerUnidentifiedUser();
    };
    IntercomBridge.reset = function () {
        Intercom.reset();
    };
    IntercomBridge.setSecureMode = function (secureHash, secureData) {
        Intercom.setHMACData(secureHash, secureData);
    };
    IntercomBridge.updateUser = function (attributes) {
        Intercom.updateUserWithAttributes(attributes);
    };
    IntercomBridge.logEvent = function (eventName, metaData) {
        if (metaData && metaData.length) {
            Intercom.logEventWithNameMetaData(eventName, metaData);
        }
        else {
            Intercom.logEventWithName(eventName);
        }
    };
    IntercomBridge.displayMessenger = function () {
        Intercom.presentMessenger();
    };
    IntercomBridge.displayMessageComposer = function () {
        Intercom.presentMessageComposer();
    };
    IntercomBridge.displayMessageComposerWithInitialMessage = function (initialMessage) {
        Intercom.presentMessageComposerWithInitialMessage(initialMessage);
    };
    IntercomBridge.displayConversationsList = function () {
        Intercom.presentConversationList();
    };
    IntercomBridge.unreadConversationCount = function () {
        return Intercom.unreadConversationCount();
    };
    IntercomBridge.setLauncherVisibility = function (visible) {
        Intercom.setLauncherVisible(visible);
    };
    IntercomBridge.setInAppMessageVisibility = function (visible) {
        Intercom.setInAppMessagesVisible(visible);
    };
    IntercomBridge.hideMessenger = function () {
        Intercom.hideMessenger();
    };
    IntercomBridge.enableLogging = function () {
        Intercom.enableLogging();
    };
    return IntercomBridge;
}());
exports.IntercomBridge = IntercomBridge;
//# sourceMappingURL=intercom-bridge.ios.js.map