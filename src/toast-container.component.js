"use strict";
var core_1 = require('@angular/core');
var toast_options_1 = require('./toast-options');
var platform_browser_1 = require('@angular/platform-browser');
var ToastContainer = (function () {
    function ToastContainer(sanitizer, options) {
        this.sanitizer = sanitizer;
        this.position = 'fixed';
        this.messageClass = 'toast-message';
        this.titleClass = 'toast-title';
        this.positionClass = 'toast-top-right';
        this.toasts = [];
        this.maxShown = 5;
        this.animate = 'fade';
        if (options) {
            Object.assign(this, options);
        }
    }
    ToastContainer.prototype.addToast = function (toast) {
        if (this.positionClass.indexOf('top') > 0) {
            this.toasts.push(toast);
            if (this.toasts.length > this.maxShown) {
                this.toasts.splice(0, (this.toasts.length - this.maxShown));
            }
        }
        else {
            this.toasts.unshift(toast);
            if (this.toasts.length > this.maxShown) {
                this.toasts.splice(this.maxShown, (this.toasts.length - this.maxShown));
            }
        }
    };
    ToastContainer.prototype.removeToast = function (toastId) {
        this.toasts = this.toasts.filter(function (toast) {
            return toast.id !== toastId;
        });
    };
    ToastContainer.prototype.removeAllToasts = function () {
        this.toasts = [];
    };
    ToastContainer.prototype.clicked = function (toast) {
        if (this.onToastClicked) {
            this.onToastClicked(toast);
        }
    };
    ToastContainer.prototype.anyToast = function () {
        return this.toasts.length > 0;
    };
    ToastContainer.prototype.findToast = function (toastId) {
        for (var _i = 0, _a = this.toasts; _i < _a.length; _i++) {
            var toast = _a[_i];
            if (toast.id === toastId) {
                return toast;
            }
        }
        return null;
    };
    ToastContainer.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'toast-container',
                    template: "\n    <div id=\"toast-container\" [style.position]=\"position\" class=\"{{positionClass}}\">\n      <div *ngFor=\"let toast of toasts\" [@inOut]=\"animate\" class=\"toast toast-{{toast.type}}\" (click)=\"clicked(toast)\">\n        <div *ngIf=\"toast.title\" class=\"{{toast.titleClass || titleClass}}\">{{toast.title}}</div>\n        <div [ngSwitch]=\"toast.enableHTML\">\n          <span *ngSwitchCase=\"true\" [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(toast.message)\"></span>\n          <span *ngSwitchDefault class=\"{{toast.messageClass || messageClass}}\">{{toast.message}}</span>\n        </div>              \n      </div>\n    </div>\n    ",
                    animations: [
                        core_1.trigger('inOut', [
                            core_1.state('flyRight, flyLeft', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                            core_1.state('fade', core_1.style({ opacity: 1 })),
                            core_1.state('slideDown, slideUp', core_1.style({ opacity: 1, transform: 'translateY(0)' })),
                            core_1.transition('void => flyRight', [
                                core_1.style({
                                    opacity: 0,
                                    transform: 'translateX(100%)'
                                }),
                                core_1.animate('0.2s ease-in')
                            ]),
                            core_1.transition('flyRight => void', [
                                core_1.animate('0.2s 10 ease-out', core_1.style({
                                    opacity: 0,
                                    transform: 'translateX(100%)'
                                }))
                            ]),
                            core_1.transition('void => flyLeft', [
                                core_1.style({
                                    opacity: 0,
                                    transform: 'translateX(-100%)'
                                }),
                                core_1.animate('0.2s ease-in')
                            ]),
                            core_1.transition('flyLeft => void', [
                                core_1.animate('0.2s 10 ease-out', core_1.style({
                                    opacity: 0,
                                    transform: 'translateX(-100%)'
                                }))
                            ]),
                            core_1.transition('void => fade', [
                                core_1.style({
                                    opacity: 0,
                                }),
                                core_1.animate('0.3s ease-in')
                            ]),
                            core_1.transition('fade => void', [
                                core_1.animate('0.3s 10 ease-out', core_1.style({
                                    opacity: 0,
                                }))
                            ]),
                            core_1.transition('void => slideDown', [
                                core_1.style({
                                    opacity: 0,
                                    transform: 'translateY(-200%)'
                                }),
                                core_1.animate('0.3s ease-in')
                            ]),
                            core_1.transition('slideDown => void', [
                                core_1.animate('0.3s 10 ease-out', core_1.style({
                                    opacity: 0,
                                    transform: 'translateY(-200%)'
                                }))
                            ]),
                            core_1.transition('void => slideUp', [
                                core_1.style({
                                    opacity: 0,
                                    transform: 'translateY(200%)'
                                }),
                                core_1.animate('0.3s ease-in')
                            ]),
                            core_1.transition('slideUp => void', [
                                core_1.animate('0.3s 10 ease-out', core_1.style({
                                    opacity: 0,
                                    transform: 'translateY(200%)'
                                }))
                            ]),
                        ]),
                    ],
                },] },
    ];
    /** @nocollapse */
    ToastContainer.ctorParameters = [
        { type: platform_browser_1.DomSanitizer, },
        { type: toast_options_1.ToastOptions, decorators: [{ type: core_1.Optional },] },
    ];
    return ToastContainer;
}());
exports.ToastContainer = ToastContainer;
//# sourceMappingURL=toast-container.component.js.map