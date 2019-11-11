"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("utils/utils");
var IntercomBridge = (function () {
    function IntercomBridge() {
    }
    IntercomBridge.init = function (apiKey, appId) {
        io.intercom.android.sdk.Intercom.initialize(utils.ad.getApplicationContext(), apiKey, appId);
    };
    IntercomBridge.registerIdentifiedUser = function (options) {
        if (typeof options.userId == 'number') {
            options.userId = String(options.userId);
        }
        var registration = io.intercom.android.sdk.identity.Registration.create();
        if (options.userId && options.userId.length > 0) {
            registration.withUserId(options.userId);
        }
        if (options.email && options.email.length > 0) {
            registration.withEmail(options.email);
        }
        io.intercom.android.sdk.Intercom.client().registerIdentifiedUser(registration);
    };
    IntercomBridge.registerUnidentifiedUser = function () {
        io.intercom.android.sdk.Intercom.client().registerUnidentifiedUser();
    };
    IntercomBridge.reset = function () {
        io.intercom.android.sdk.Intercom.client().reset();
    };
    IntercomBridge.setSecureMode = function (secureHash, secureData) {
        io.intercom.android.sdk.Intercom.client().setSecureMode(secureHash, secureData);
    };
    IntercomBridge.updateUser = function (attributes) {
        io.intercom.android.sdk.Intercom.client().updateUser(attributes);
    };
    IntercomBridge.logEvent = function (eventName, metaData) {
        if (metaData && metaData.length) {
            io.intercom.android.sdk.Intercom.client().logEvent(eventName, metaData);
        }
        else {
            io.intercom.android.sdk.Intercom.client().logEvent(eventName);
        }
    };
    IntercomBridge.displayMessenger = function () {
        io.intercom.android.sdk.Intercom.client().displayMessenger();
    };
    IntercomBridge.displayMessageComposer = function () {
        io.intercom.android.sdk.Intercom.client().displayMessageComposer();
    };
    IntercomBridge.displayMessageComposerWithInitialMessage = function (initialMessage) {
        io.intercom.android.sdk.Intercom.client().displayMessageComposer(initialMessage);
    };
    IntercomBridge.displayConversationsList = function () {
        io.intercom.android.sdk.Intercom.client().displayConversationsList();
    };
    IntercomBridge.unreadConversationCount = function () {
        return io.intercom.android.sdk.Intercom.client().getUnreadConversationCount();
    };
    IntercomBridge.setLauncherVisibility = function (visible) {
        io.intercom.android.sdk.Intercom.client().setLauncherVisibility(visible ? io.intercom.android.sdk.Intercom.VISIBLE : io.intercom.android.sdk.Intercom.GONE);
    };
    IntercomBridge.setInAppMessageVisibility = function (visible) {
        io.intercom.android.sdk.Intercom.client().setInAppMessageVisibility(visible ? io.intercom.android.sdk.Intercom.VISIBLE : io.intercom.android.sdk.Intercom.GONE);
    };
    IntercomBridge.hideMessenger = function () {
        io.intercom.android.sdk.Intercom.client().hideMessenger();
    };
    IntercomBridge.enableLogging = function () {
        io.intercom.android.sdk.Intercom.setLogLevel(io.intercom.android.sdk.Intercom.LogLevel.DEBUG);
    };
    return IntercomBridge;
}());
exports.IntercomBridge = IntercomBridge;
//# sourceMappingURL=intercom-bridge.android.js.map