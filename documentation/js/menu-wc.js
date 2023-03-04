'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">enrout-ui documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-11d3fd99d84acc644d8eccfc5db78e783addc8488234a91fb5cfeeb9642942489cc9b16f1fb8d2b7b9d1e23e53276ac8d2778af3e2375b5476411212c9361577"' : 'data-target="#xs-components-links-module-AppModule-11d3fd99d84acc644d8eccfc5db78e783addc8488234a91fb5cfeeb9642942489cc9b16f1fb8d2b7b9d1e23e53276ac8d2778af3e2375b5476411212c9361577"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-11d3fd99d84acc644d8eccfc5db78e783addc8488234a91fb5cfeeb9642942489cc9b16f1fb8d2b7b9d1e23e53276ac8d2778af3e2375b5476411212c9361577"' :
                                            'id="xs-components-links-module-AppModule-11d3fd99d84acc644d8eccfc5db78e783addc8488234a91fb5cfeeb9642942489cc9b16f1fb8d2b7b9d1e23e53276ac8d2778af3e2375b5476411212c9361577"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-8f858b338d99e5d793be28d9a4e4b5893fd7ac636e160dc20365ae90745c1c57ba083b358bd232b7c4f7753e7d4d96b42945e72872d083dd1a54d39cd6b56d80"' : 'data-target="#xs-components-links-module-AuthModule-8f858b338d99e5d793be28d9a4e4b5893fd7ac636e160dc20365ae90745c1c57ba083b358bd232b7c4f7753e7d4d96b42945e72872d083dd1a54d39cd6b56d80"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-8f858b338d99e5d793be28d9a4e4b5893fd7ac636e160dc20365ae90745c1c57ba083b358bd232b7c4f7753e7d4d96b42945e72872d083dd1a54d39cd6b56d80"' :
                                            'id="xs-components-links-module-AuthModule-8f858b338d99e5d793be28d9a4e4b5893fd7ac636e160dc20365ae90745c1c57ba083b358bd232b7c4f7753e7d4d96b42945e72872d083dd1a54d39cd6b56d80"' }>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LibModule.html" data-type="entity-link" >LibModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LibModule-bd2f66258f8332197b05340017b8b11c6f4858d150cdd55bb0e633aabc4a50643a24e74a32fb1ca6a71d289a5cd1f8beb22ea2eee693c4f6bbc546317ba48356"' : 'data-target="#xs-components-links-module-LibModule-bd2f66258f8332197b05340017b8b11c6f4858d150cdd55bb0e633aabc4a50643a24e74a32fb1ca6a71d289a5cd1f8beb22ea2eee693c4f6bbc546317ba48356"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LibModule-bd2f66258f8332197b05340017b8b11c6f4858d150cdd55bb0e633aabc4a50643a24e74a32fb1ca6a71d289a5cd1f8beb22ea2eee693c4f6bbc546317ba48356"' :
                                            'id="xs-components-links-module-LibModule-bd2f66258f8332197b05340017b8b11c6f4858d150cdd55bb0e633aabc4a50643a24e74a32fb1ca6a71d289a5cd1f8beb22ea2eee693c4f6bbc546317ba48356"' }>
                                            <li class="link">
                                                <a href="components/LayoutHorizontalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutHorizontalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-LibModule-bd2f66258f8332197b05340017b8b11c6f4858d150cdd55bb0e633aabc4a50643a24e74a32fb1ca6a71d289a5cd1f8beb22ea2eee693c4f6bbc546317ba48356"' : 'data-target="#xs-pipes-links-module-LibModule-bd2f66258f8332197b05340017b8b11c6f4858d150cdd55bb0e633aabc4a50643a24e74a32fb1ca6a71d289a5cd1f8beb22ea2eee693c4f6bbc546317ba48356"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-LibModule-bd2f66258f8332197b05340017b8b11c6f4858d150cdd55bb0e633aabc4a50643a24e74a32fb1ca6a71d289a5cd1f8beb22ea2eee693c4f6bbc546317ba48356"' :
                                            'id="xs-pipes-links-module-LibModule-bd2f66258f8332197b05340017b8b11c6f4858d150cdd55bb0e633aabc4a50643a24e74a32fb1ca6a71d289a5cd1f8beb22ea2eee693c4f6bbc546317ba48356"' }>
                                            <li class="link">
                                                <a href="pipes/MomentDatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MomentDatePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link" >SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-7003992a27fa279c6e99297359b6174f7d30e737370170440ec7bdd9034523a938408b057debfb75986825b75bec599b3ec5fc63e33723af7a95a9c2f798f3dd"' : 'data-target="#xs-components-links-module-SettingsModule-7003992a27fa279c6e99297359b6174f7d30e737370170440ec7bdd9034523a938408b057debfb75986825b75bec599b3ec5fc63e33723af7a95a9c2f798f3dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-7003992a27fa279c6e99297359b6174f7d30e737370170440ec7bdd9034523a938408b057debfb75986825b75bec599b3ec5fc63e33723af7a95a9c2f798f3dd"' :
                                            'id="xs-components-links-module-SettingsModule-7003992a27fa279c6e99297359b6174f7d30e737370170440ec7bdd9034523a938408b057debfb75986825b75bec599b3ec5fc63e33723af7a95a9c2f798f3dd"' }>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link" >SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StaffModule.html" data-type="entity-link" >StaffModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StaffModule-f25f64f734de1f8ffedf37f51045965b14d1feab237adce683c5b9d40db2d9ba82e6de63858c383d90760879184fe5e65263f18f6e1574f86c438f9ffb4d1bca"' : 'data-target="#xs-components-links-module-StaffModule-f25f64f734de1f8ffedf37f51045965b14d1feab237adce683c5b9d40db2d9ba82e6de63858c383d90760879184fe5e65263f18f6e1574f86c438f9ffb4d1bca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StaffModule-f25f64f734de1f8ffedf37f51045965b14d1feab237adce683c5b9d40db2d9ba82e6de63858c383d90760879184fe5e65263f18f6e1574f86c438f9ffb4d1bca"' :
                                            'id="xs-components-links-module-StaffModule-f25f64f734de1f8ffedf37f51045965b14d1feab237adce683c5b9d40db2d9ba82e6de63858c383d90760879184fe5e65263f18f6e1574f86c438f9ffb4d1bca"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DocumentDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DocumentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StaffLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StaffLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StaffRoutingModule.html" data-type="entity-link" >StaffRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StudentModule.html" data-type="entity-link" >StudentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StudentModule-2ff492bd677c50a703a10704d4796fb69ffe9daa62a3ab564894e1124a0607910834d374bbdf1d1369122c3f65eb0689bdc24311856efb4270fe5469a09e85b2"' : 'data-target="#xs-components-links-module-StudentModule-2ff492bd677c50a703a10704d4796fb69ffe9daa62a3ab564894e1124a0607910834d374bbdf1d1369122c3f65eb0689bdc24311856efb4270fe5469a09e85b2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudentModule-2ff492bd677c50a703a10704d4796fb69ffe9daa62a3ab564894e1124a0607910834d374bbdf1d1369122c3f65eb0689bdc24311856efb4270fe5469a09e85b2"' :
                                            'id="xs-components-links-module-StudentModule-2ff492bd677c50a703a10704d4796fb69ffe9daa62a3ab564894e1124a0607910834d374bbdf1d1369122c3f65eb0689bdc24311856efb4270fe5469a09e85b2"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentRoutingModule.html" data-type="entity-link" >StudentRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/DashboardComponent.html" data-type="entity-link" >DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardComponent-1.html" data-type="entity-link" >DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DemoPage.html" data-type="entity-link" >DemoPage</a>
                            </li>
                            <li class="link">
                                <a href="components/DocumentDetailComponent.html" data-type="entity-link" >DocumentDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DocumentsComponent.html" data-type="entity-link" >DocumentsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DocumentsComponent-1.html" data-type="entity-link" >DocumentsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ForgotPasswordComponent.html" data-type="entity-link" >ForgotPasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomePage.html" data-type="entity-link" >HomePage</a>
                            </li>
                            <li class="link">
                                <a href="components/LayoutHorizontalComponent.html" data-type="entity-link" >LayoutHorizontalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginPage.html" data-type="entity-link" >LoginPage</a>
                            </li>
                            <li class="link">
                                <a href="components/LogoComponent.html" data-type="entity-link" >LogoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotFoundPage.html" data-type="entity-link" >NotFoundPage</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfilePage.html" data-type="entity-link" >ProfilePage</a>
                            </li>
                            <li class="link">
                                <a href="components/RegisterPage.html" data-type="entity-link" >RegisterPage</a>
                            </li>
                            <li class="link">
                                <a href="components/ResetPasswordComponent.html" data-type="entity-link" >ResetPasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StaffLayoutComponent.html" data-type="entity-link" >StaffLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StudentLayoutComponent.html" data-type="entity-link" >StudentLayoutComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/PaginationParams.html" data-type="entity-link" >PaginationParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/StaffDashboardStats.html" data-type="entity-link" >StaffDashboardStats</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepartmentService.html" data-type="entity-link" >DepartmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DocumentService.html" data-type="entity-link" >DocumentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StaffService.html" data-type="entity-link" >StaffService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentService.html" data-type="entity-link" >StudentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeService.html" data-type="entity-link" >ThemeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WorkflowService.html" data-type="entity-link" >WorkflowService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/JwtInterceptor.html" data-type="entity-link" >JwtInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/ServerErrorInterceptor.html" data-type="entity-link" >ServerErrorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/NoAuthGuard.html" data-type="entity-link" >NoAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/StaffGuard.html" data-type="entity-link" >StaffGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/StudentGuard.html" data-type="entity-link" >StudentGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Data.html" data-type="entity-link" >Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppUser.html" data-type="entity-link" >IAppUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDepartment.html" data-type="entity-link" >IDepartment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDocument.html" data-type="entity-link" >IDocument</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDocumentPayload.html" data-type="entity-link" >IDocumentPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IForgotPasswordPayload.html" data-type="entity-link" >IForgotPasswordPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILoginPayload.html" data-type="entity-link" >ILoginPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILoginResponse.html" data-type="entity-link" >ILoginResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INotification.html" data-type="entity-link" >INotification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPaginatedMetadata.html" data-type="entity-link" >IPaginatedMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPaginatedResponse.html" data-type="entity-link" >IPaginatedResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPaginationParams.html" data-type="entity-link" >IPaginationParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPublishDocumentPayload.html" data-type="entity-link" >IPublishDocumentPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IResetPasswordPayload.html" data-type="entity-link" >IResetPasswordPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISetWorkflowPayload.html" data-type="entity-link" >ISetWorkflowPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStaff.html" data-type="entity-link" >IStaff</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStaffDashboardStats.html" data-type="entity-link" >IStaffDashboardStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStaffRegistrationPayload.html" data-type="entity-link" >IStaffRegistrationPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStudent.html" data-type="entity-link" >IStudent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStudentRegistrationPayload.html" data-type="entity-link" >IStudentRegistrationPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStudentRoute.html" data-type="entity-link" >IStudentRoute</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToken.html" data-type="entity-link" >IToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWorkflow.html" data-type="entity-link" >IWorkflow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubmissionsByCategory.html" data-type="entity-link" >SubmissionsByCategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WeeklySubmissionData.html" data-type="entity-link" >WeeklySubmissionData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});