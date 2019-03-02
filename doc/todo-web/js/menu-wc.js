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
                    <a href="index.html" data-type="index-link">rucken:todo-web</a>
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
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ProjectInputModule.html" data-type="entity-link">ProjectInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectInputModule-7bc042b933197b7304567adef0ab602d"' : 'data-target="#xs-components-links-module-ProjectInputModule-7bc042b933197b7304567adef0ab602d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectInputModule-7bc042b933197b7304567adef0ab602d"' :
                                            'id="xs-components-links-module-ProjectInputModule-7bc042b933197b7304567adef0ab602d"' }>
                                            <li class="link">
                                                <a href="components/ProjectInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectModalModule.html" data-type="entity-link">ProjectModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectModalModule-8dc0fe32331487f005ce9541e48bb778"' : 'data-target="#xs-components-links-module-ProjectModalModule-8dc0fe32331487f005ce9541e48bb778"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectModalModule-8dc0fe32331487f005ce9541e48bb778"' :
                                            'id="xs-components-links-module-ProjectModalModule-8dc0fe32331487f005ce9541e48bb778"' }>
                                            <li class="link">
                                                <a href="components/ProjectModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectSelectModule.html" data-type="entity-link">ProjectSelectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectSelectModule-2dbcc8de7288f6d8ad9d3eae18b4b1c2"' : 'data-target="#xs-components-links-module-ProjectSelectModule-2dbcc8de7288f6d8ad9d3eae18b4b1c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectSelectModule-2dbcc8de7288f6d8ad9d3eae18b4b1c2"' :
                                            'id="xs-components-links-module-ProjectSelectModule-2dbcc8de7288f6d8ad9d3eae18b4b1c2"' }>
                                            <li class="link">
                                                <a href="components/ProjectSelectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectSelectComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectsGridModalModule.html" data-type="entity-link">ProjectsGridModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectsGridModalModule-b565333229964af337a26a26985fa98d"' : 'data-target="#xs-components-links-module-ProjectsGridModalModule-b565333229964af337a26a26985fa98d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectsGridModalModule-b565333229964af337a26a26985fa98d"' :
                                            'id="xs-components-links-module-ProjectsGridModalModule-b565333229964af337a26a26985fa98d"' }>
                                            <li class="link">
                                                <a href="components/ProjectsGridModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectsGridModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectsGridModule.html" data-type="entity-link">ProjectsGridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectsGridModule-24ce5ccbf18f2346a499542013c94b90"' : 'data-target="#xs-components-links-module-ProjectsGridModule-24ce5ccbf18f2346a499542013c94b90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectsGridModule-24ce5ccbf18f2346a499542013c94b90"' :
                                            'id="xs-components-links-module-ProjectsGridModule-24ce5ccbf18f2346a499542013c94b90"' }>
                                            <li class="link">
                                                <a href="components/ProjectsGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectsGridComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectStatusesGridModule.html" data-type="entity-link">ProjectStatusesGridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectStatusesGridModule-303dbd012f6dadcedf916535d134c10c"' : 'data-target="#xs-components-links-module-ProjectStatusesGridModule-303dbd012f6dadcedf916535d134c10c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectStatusesGridModule-303dbd012f6dadcedf916535d134c10c"' :
                                            'id="xs-components-links-module-ProjectStatusesGridModule-303dbd012f6dadcedf916535d134c10c"' }>
                                            <li class="link">
                                                <a href="components/ProjectStatusesGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectStatusesGridComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectUserModalModule.html" data-type="entity-link">ProjectUserModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectUserModalModule-1268a5b9b58591eb57f6431589566013"' : 'data-target="#xs-components-links-module-ProjectUserModalModule-1268a5b9b58591eb57f6431589566013"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectUserModalModule-1268a5b9b58591eb57f6431589566013"' :
                                            'id="xs-components-links-module-ProjectUserModalModule-1268a5b9b58591eb57f6431589566013"' }>
                                            <li class="link">
                                                <a href="components/ProjectUserModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectUserModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectUsersGridModule.html" data-type="entity-link">ProjectUsersGridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectUsersGridModule-ad16d09f758d8941d40c15ef42ab0059"' : 'data-target="#xs-components-links-module-ProjectUsersGridModule-ad16d09f758d8941d40c15ef42ab0059"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectUsersGridModule-ad16d09f758d8941d40c15ef42ab0059"' :
                                            'id="xs-components-links-module-ProjectUsersGridModule-ad16d09f758d8941d40c15ef42ab0059"' }>
                                            <li class="link">
                                                <a href="components/ProjectUsersGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectUsersGridComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatusesGridModalModule.html" data-type="entity-link">StatusesGridModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StatusesGridModalModule-e273ca5120c0a889b08d6f894782756c"' : 'data-target="#xs-components-links-module-StatusesGridModalModule-e273ca5120c0a889b08d6f894782756c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StatusesGridModalModule-e273ca5120c0a889b08d6f894782756c"' :
                                            'id="xs-components-links-module-StatusesGridModalModule-e273ca5120c0a889b08d6f894782756c"' }>
                                            <li class="link">
                                                <a href="components/StatusesGridModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatusesGridModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatusesGridModule.html" data-type="entity-link">StatusesGridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StatusesGridModule-8d5923d886002ddf5bc68be6559d1c74"' : 'data-target="#xs-components-links-module-StatusesGridModule-8d5923d886002ddf5bc68be6559d1c74"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StatusesGridModule-8d5923d886002ddf5bc68be6559d1c74"' :
                                            'id="xs-components-links-module-StatusesGridModule-8d5923d886002ddf5bc68be6559d1c74"' }>
                                            <li class="link">
                                                <a href="components/StatusesGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatusesGridComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatusInputModule.html" data-type="entity-link">StatusInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StatusInputModule-05bd30eb1cb41c84efd8e31420dfc7c5"' : 'data-target="#xs-components-links-module-StatusInputModule-05bd30eb1cb41c84efd8e31420dfc7c5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StatusInputModule-05bd30eb1cb41c84efd8e31420dfc7c5"' :
                                            'id="xs-components-links-module-StatusInputModule-05bd30eb1cb41c84efd8e31420dfc7c5"' }>
                                            <li class="link">
                                                <a href="components/StatusInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatusInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatusModalModule.html" data-type="entity-link">StatusModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StatusModalModule-fe723c48591eba9959d9c8b67d2b9044"' : 'data-target="#xs-components-links-module-StatusModalModule-fe723c48591eba9959d9c8b67d2b9044"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StatusModalModule-fe723c48591eba9959d9c8b67d2b9044"' :
                                            'id="xs-components-links-module-StatusModalModule-fe723c48591eba9959d9c8b67d2b9044"' }>
                                            <li class="link">
                                                <a href="components/StatusModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatusModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatusSelectModule.html" data-type="entity-link">StatusSelectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StatusSelectModule-abf4ba1dd9dd20a4153b213324a41156"' : 'data-target="#xs-components-links-module-StatusSelectModule-abf4ba1dd9dd20a4153b213324a41156"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StatusSelectModule-abf4ba1dd9dd20a4153b213324a41156"' :
                                            'id="xs-components-links-module-StatusSelectModule-abf4ba1dd9dd20a4153b213324a41156"' }>
                                            <li class="link">
                                                <a href="components/StatusSelectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatusSelectComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskInputModule.html" data-type="entity-link">TaskInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TaskInputModule-97497c48c408bfbd5f0c3bbd7532dad3"' : 'data-target="#xs-components-links-module-TaskInputModule-97497c48c408bfbd5f0c3bbd7532dad3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TaskInputModule-97497c48c408bfbd5f0c3bbd7532dad3"' :
                                            'id="xs-components-links-module-TaskInputModule-97497c48c408bfbd5f0c3bbd7532dad3"' }>
                                            <li class="link">
                                                <a href="components/TaskInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModalModule.html" data-type="entity-link">TaskModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TaskModalModule-80f91c47b6e9dfaa3e275738146b4ef9"' : 'data-target="#xs-components-links-module-TaskModalModule-80f91c47b6e9dfaa3e275738146b4ef9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TaskModalModule-80f91c47b6e9dfaa3e275738146b4ef9"' :
                                            'id="xs-components-links-module-TaskModalModule-80f91c47b6e9dfaa3e275738146b4ef9"' }>
                                            <li class="link">
                                                <a href="components/TaskModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskSelectModule.html" data-type="entity-link">TaskSelectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TaskSelectModule-5981a52c6a3053eaaf6a13aeadac5c80"' : 'data-target="#xs-components-links-module-TaskSelectModule-5981a52c6a3053eaaf6a13aeadac5c80"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TaskSelectModule-5981a52c6a3053eaaf6a13aeadac5c80"' :
                                            'id="xs-components-links-module-TaskSelectModule-5981a52c6a3053eaaf6a13aeadac5c80"' }>
                                            <li class="link">
                                                <a href="components/TaskSelectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskSelectComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TasksGridModalModule.html" data-type="entity-link">TasksGridModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TasksGridModalModule-3612f9c161e9bd46efd94df569740414"' : 'data-target="#xs-components-links-module-TasksGridModalModule-3612f9c161e9bd46efd94df569740414"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TasksGridModalModule-3612f9c161e9bd46efd94df569740414"' :
                                            'id="xs-components-links-module-TasksGridModalModule-3612f9c161e9bd46efd94df569740414"' }>
                                            <li class="link">
                                                <a href="components/TasksGridModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TasksGridModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TasksGridModule.html" data-type="entity-link">TasksGridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TasksGridModule-f8a826c549751ad93e0f872ec263719b"' : 'data-target="#xs-components-links-module-TasksGridModule-f8a826c549751ad93e0f872ec263719b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TasksGridModule-f8a826c549751ad93e0f872ec263719b"' :
                                            'id="xs-components-links-module-TasksGridModule-f8a826c549751ad93e0f872ec263719b"' }>
                                            <li class="link">
                                                <a href="components/TasksGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TasksGridComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
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