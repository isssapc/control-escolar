angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/views/alumnos_generales.html","<h3>Datos Generales</h3>\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Escuela</th>\n                                <th>Curp</th>\n                                <th>Nombre</th>\n                                <th>Número de Control</th>\n\n\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr ng-repeat=\"x in ctrl.alumnos\">\n                                <td>{{x.escuela}}</td>\n                                <td>{{x.curp}}</td>\n                                <td>{{x.nombre}}</td>\n                                <td>{{x.num_control}}</td>\n\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("app/views/app.html","<!-- top navbar-->\n<header ng-include=\"\'app/views/partials/top-navbar.html\'\" class=\"topnavbar-wrapper\"></header>\n<!-- sidebar-->\n<aside ng-include=\"\'app/views/partials/sidebar.html\'\" ng-controller=\"SidebarController\" class=\"aside\"></aside>\n<!-- offsidebar-->\n<aside ng-include=\"\'app/views/partials/offsidebar.html\'\" class=\"offsidebar\"></aside>\n<!-- Main section-->\n<section>\n   <!-- Page content-->\n   <div ui-view=\"\" autoscroll=\"false\" ng-class=\"app.viewAnimation\" class=\"content-wrapper\"></div>\n</section>\n<!-- Page footer-->\n<footer ng-include=\"\'app/views/partials/footer.html\'\"></footer>");
$templateCache.put("app/views/cotizar.html","<h3>Cotizar\n    <small>Arquitectónico</small>\n</h3>\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Medidas</div>\n            <div class=\"panel-body\">\n                <label>Rollo</label>\n                <select class=\"form-control\" ng-model=\"ctrl.rollo\">\n                    <option value=\"\">Seleccionar...</option>\n                    <option value=\"1.52\">1.52</option>\n                    <option value=\"1.82\">1.82</option>\n                </select>\n                <div class=\"table-responsive\">\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Cantidad</th>\n                                <th>Largo(m)</th>\n                                <th>Ancho(m)</th>\n                                <th style=\"width: 61px;\"></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr ng-repeat=\"pieza in ctrl.piezas\">\n                                <td><input type=\"number\" class=\"form-control\" ng-model=\"pieza.cantidad\" min=\"1\"></td>                       \n                                <td><input type=\"number\" class=\"form-control\" ng-model=\"pieza.largo\"></td>                       \n                                <td><input type=\"number\" class=\"form-control\" ng-model=\"pieza.ancho\"></td>                        \n                                <td><button class=\"btn btn-default\" ng-click=\"ctrl.delPieza(pieza)\"><span class=\"fa fa-remove\"></span></button></td>\n                            </tr>                       \n                        </tbody>\n                    </table>\n                </div>\n                <div>\n                    <button class=\"btn btn-default\" ng-click=\"ctrl.addPieza()\">Agregar</button>\n                    <!--<button class=\"btn btn-default\" ng-click=\"ctrl.analisis()\">Analizar</button>-->\n                </div>\n<!--                <div>{{ctrl.piezas|json}}</div>\n                <div>{{ctrl.rollo|json}}</div>-->\n            </div>\n            <div class=\"panel-footer\">\n                <button class=\"btn btn-primary\" ng-click=\"ctrl.analisis()\">Analizar</button>\n            </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Análisis</div>\n            <div class=\"panel-body\">           \n                <div class=\"table-responsive\">\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Cantidad</th>\n                                <th>Largo(m)</th>\n                                <th>Ancho(m)</th>\n                                <th>m<sup>2</sup> Efectivos</th>\n                                <th>m<sup>2</sup> Merma</th>\n                                <th style=\"width: 61px;\"></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr ng-repeat=\"pieza in ctrl.procesadas\">\n                                <!--                            <td><input type=\"number\" class=\"form-control\" ng-model=\"pieza.cantidad\" min=\"1\"></td>                       \n                                                            <td><input type=\"number\" class=\"form-control\" ng-model=\"pieza.largo\"></td>                       \n                                                            <td><input type=\"number\" class=\"form-control\" ng-model=\"pieza.ancho\"></td>\n                                                            <td><input type=\"number\" class=\"form-control\" ng-model=\"pieza.efectivo\"></td>  \n                                                            <td><input type=\"number\" class=\"form-control\" ng-model=\"pieza.merma\"></td>  \n                                                            <td><button class=\"btn btn-default\" ng-click=\"ctrl.delPieza(pieza)\"><span class=\"fa fa-remove\"></span></button></td>-->\n                                <td>{{pieza.cantidad}}</td>                       \n                                <td>{{pieza.largo}}</td>                       \n                                <td>{{pieza.ancho}}</td>\n                                <td>{{pieza.efectivo}}</td>  \n                                <td>{{pieza.merma}}</td>  \n                                <td><button class=\"btn btn-default\" ng-click=\"ctrl.draw(pieza)\"><span class=\"fa fa-th-large\"></span></button></td>\n                            </tr>                       \n                        </tbody>\n                        <tfoot>\n                            <tr>\n                                <td></td>                       \n                                <td></td>                       \n                                <td></td>\n                                <th>{{ctrl.sum_efectivo(ctrl.procesadas)}}</th>  \n                                <th>{{ctrl.sum_merma(ctrl.procesadas)}}</th>  \n                                <td></td>\n                            </tr>\n                        </tfoot>\n                    </table>\n                </div>\n<!--                <div id=\"dibujo\" class=\"rollo\" style=\"height: 320px;\"></div>-->\n                <uib-tabset>\n                    <uib-tab heading=\"Patrón 1\">\n                        <div id=\"cociente\" class=\"rollo\" style=\"height: 320px;\">\n                            \n                        </div>\n                    </uib-tab>\n                    <uib-tab heading=\"Patrón 2\" ng-show=\"ctrl.show_resto\">\n                        <div id=\"resto\" class=\"rollo\" style=\"height: 320px;\"></div>\n                    </uib-tab>                \n                </uib-tabset>\n                <hr>\n                <div>{{ctrl.procesadas|json}}</div>\n\n            </div>\n            <div class=\"panel-footer\">\n                <button class=\"btn btn-primary\">Guardar</button>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("app/views/escuelas.html","<h3>Escuelas</h3>\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Escuela</th>\n                                <th>Nombre</th>\n                                \n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr ng-repeat=\"e in ctrl.escuelas\">\n                                <td>{{e.escuela}}</td>\n                                <td>{{e.nombre_escuela}}</td>\n                                \n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("app/views/gextra_catalogo.html","<h3>\n   <!-- START Language list-->\n   <div class=\"pull-right\">\n      <div uib-dropdown=\"\" is-open=\"language.listIsOpen\" class=\"btn-group\">\n         <button type=\"button\" uib-dropdown-toggle=\"\" class=\"btn btn-default\">{{language.selected}}\n            <span class=\"caret\"></span>\n         </button>\n         <ul role=\"menu\" class=\"dropdown-menu dropdown-menu-right animated fadeInUpShort\">\n            <li ng-repeat=\"(localeId, langName) in language.available\"><a ng-click=\"language.set(localeId, $event)\">{{langName}}</a>\n            </li>\n         </ul>\n      </div>\n   </div>\n   <!-- END Language list-->\n   Single View\n   <small>{{ \'dashboard.WELCOME\' | translate:{ appName: app.name } }} !</small>\n</h3>\n<div class=\"row\">\n   <div class=\"col-xs-12 text-center\">\n      <h2 class=\"text-thin\">Single view content</h2>\n      <p>This project is an application skeleton. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.\n         <br/>The seed app doesn\'t do much and has most of the feature removed so you can add theme as per your needs just following the demo app examples.</p>\n   </div>\n</div>");
$templateCache.put("app/views/gextra_nuevo.html","<h3>\n   <!-- START Language list-->\n   <div class=\"pull-right\">\n      <div uib-dropdown=\"\" is-open=\"language.listIsOpen\" class=\"btn-group\">\n         <button type=\"button\" uib-dropdown-toggle=\"\" class=\"btn btn-default\">{{language.selected}}\n            <span class=\"caret\"></span>\n         </button>\n         <ul role=\"menu\" class=\"dropdown-menu dropdown-menu-right animated fadeInUpShort\">\n            <li ng-repeat=\"(localeId, langName) in language.available\"><a ng-click=\"language.set(localeId, $event)\">{{langName}}</a>\n            </li>\n         </ul>\n      </div>\n   </div>\n   <!-- END Language list-->\n   Single View\n   <small>{{ \'dashboard.WELCOME\' | translate:{ appName: app.name } }} !</small>\n</h3>\n<div class=\"row\">\n   <div class=\"col-xs-12 text-center\">\n      <h2 class=\"text-thin\">Single view content</h2>\n      <p>This project is an application skeleton. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.\n         <br/>The seed app doesn\'t do much and has most of the feature removed so you can add theme as per your needs just following the demo app examples.</p>\n   </div>\n</div>");
$templateCache.put("app/views/producto_catalogo.html","<h3>\n   <!-- START Language list-->\n   <div class=\"pull-right\">\n      <div uib-dropdown=\"\" is-open=\"language.listIsOpen\" class=\"btn-group\">\n         <button type=\"button\" uib-dropdown-toggle=\"\" class=\"btn btn-default\">{{language.selected}}\n            <span class=\"caret\"></span>\n         </button>\n         <ul role=\"menu\" class=\"dropdown-menu dropdown-menu-right animated fadeInUpShort\">\n            <li ng-repeat=\"(localeId, langName) in language.available\"><a ng-click=\"language.set(localeId, $event)\">{{langName}}</a>\n            </li>\n         </ul>\n      </div>\n   </div>\n   <!-- END Language list-->\n   Single View\n   <small>{{ \'dashboard.WELCOME\' | translate:{ appName: app.name } }} !</small>\n</h3>\n<div class=\"row\">\n   <div class=\"col-xs-12 text-center\">\n      <h2 class=\"text-thin\">Single view content</h2>\n      <p>This project is an application skeleton. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.\n         <br/>The seed app doesn\'t do much and has most of the feature removed so you can add theme as per your needs just following the demo app examples.</p>\n   </div>\n</div>");
$templateCache.put("app/views/producto_nuevo.html","<h3>\n   <!-- START Language list-->\n   <div class=\"pull-right\">\n      <div uib-dropdown=\"\" is-open=\"language.listIsOpen\" class=\"btn-group\">\n         <button type=\"button\" uib-dropdown-toggle=\"\" class=\"btn btn-default\">{{language.selected}}\n            <span class=\"caret\"></span>\n         </button>\n         <ul role=\"menu\" class=\"dropdown-menu dropdown-menu-right animated fadeInUpShort\">\n            <li ng-repeat=\"(localeId, langName) in language.available\"><a ng-click=\"language.set(localeId, $event)\">{{langName}}</a>\n            </li>\n         </ul>\n      </div>\n   </div>\n   <!-- END Language list-->\n   Single View\n   <small>{{ \'dashboard.WELCOME\' | translate:{ appName: app.name } }} !</small>\n</h3>\n<div class=\"row\">\n   <div class=\"col-xs-12 text-center\">\n      <h2 class=\"text-thin\">Single view content</h2>\n      <p>This project is an application skeleton. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.\n         <br/>The seed app doesn\'t do much and has most of the feature removed so you can add theme as per your needs just following the demo app examples.</p>\n   </div>\n</div>");
$templateCache.put("app/views/singleview.html","<h3>\n   <!-- START Language list-->\n   <div class=\"pull-right\">\n      <div uib-dropdown=\"\" is-open=\"language.listIsOpen\" class=\"btn-group\">\n         <button type=\"button\" uib-dropdown-toggle=\"\" class=\"btn btn-default\">{{language.selected}}\n            <span class=\"caret\"></span>\n         </button>\n         <ul role=\"menu\" class=\"dropdown-menu dropdown-menu-right animated fadeInUpShort\">\n            <li ng-repeat=\"(localeId, langName) in language.available\"><a ng-click=\"language.set(localeId, $event)\">{{langName}}</a>\n            </li>\n         </ul>\n      </div>\n   </div>\n   <!-- END Language list-->\n   Single View\n   <small>{{ \'dashboard.WELCOME\' | translate:{ appName: app.name } }} !</small>\n</h3>\n<div class=\"row\">\n   <div class=\"col-xs-12 text-center\">\n      <h2 class=\"text-thin\">Single view content</h2>\n      <p>This project is an application skeleton. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.\n         <br/>The seed app doesn\'t do much and has most of the feature removed so you can add theme as per your needs just following the demo app examples.</p>\n   </div>\n</div>");
$templateCache.put("app/views/submenu.html","<h3>Sub Menu\n   <small>Subtitle</small>\n</h3>\n<div class=\"row\">\n   <div class=\"col-lg-12\">\n      <p>A row with content</p>\n   </div>\n</div>");
$templateCache.put("app/views/usuario_catalogo.html","<h3>\n   <!-- START Language list-->\n   <div class=\"pull-right\">\n      <div uib-dropdown=\"\" is-open=\"language.listIsOpen\" class=\"btn-group\">\n         <button type=\"button\" uib-dropdown-toggle=\"\" class=\"btn btn-default\">{{language.selected}}\n            <span class=\"caret\"></span>\n         </button>\n         <ul role=\"menu\" class=\"dropdown-menu dropdown-menu-right animated fadeInUpShort\">\n            <li ng-repeat=\"(localeId, langName) in language.available\"><a ng-click=\"language.set(localeId, $event)\">{{langName}}</a>\n            </li>\n         </ul>\n      </div>\n   </div>\n   <!-- END Language list-->\n   Single View\n   <small>{{ \'dashboard.WELCOME\' | translate:{ appName: app.name } }} !</small>\n</h3>\n<div class=\"row\">\n   <div class=\"col-xs-12 text-center\">\n      <h2 class=\"text-thin\">Single view content</h2>\n      <p>This project is an application skeleton. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.\n         <br/>The seed app doesn\'t do much and has most of the feature removed so you can add theme as per your needs just following the demo app examples.</p>\n   </div>\n</div>");
$templateCache.put("app/views/usuario_nuevo.html","<h3>\n   <!-- START Language list-->\n   <div class=\"pull-right\">\n      <div uib-dropdown=\"\" is-open=\"language.listIsOpen\" class=\"btn-group\">\n         <button type=\"button\" uib-dropdown-toggle=\"\" class=\"btn btn-default\">{{language.selected}}\n            <span class=\"caret\"></span>\n         </button>\n         <ul role=\"menu\" class=\"dropdown-menu dropdown-menu-right animated fadeInUpShort\">\n            <li ng-repeat=\"(localeId, langName) in language.available\"><a ng-click=\"language.set(localeId, $event)\">{{langName}}</a>\n            </li>\n         </ul>\n      </div>\n   </div>\n   <!-- END Language list-->\n   Single View\n   <small>{{ \'dashboard.WELCOME\' | translate:{ appName: app.name } }} !</small>\n</h3>\n<div class=\"row\">\n   <div class=\"col-xs-12 text-center\">\n      <h2 class=\"text-thin\">Single view content</h2>\n      <p>This project is an application skeleton. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.\n         <br/>The seed app doesn\'t do much and has most of the feature removed so you can add theme as per your needs just following the demo app examples.</p>\n   </div>\n</div>");
$templateCache.put("app/views/partials/footer.html","<span>&copy; {{app.year}} - {{ app.name }}</span>");
$templateCache.put("app/views/partials/offsidebar-tab1.html","<h3 class=\"text-center text-thin\">Tab 1 Uno</h3>");
$templateCache.put("app/views/partials/offsidebar-tab2.html","<h3 class=\"text-center text-thin\">Tab 2 Dos</h3>");
$templateCache.put("app/views/partials/offsidebar.html","<!-- START Off Sidebar (right)-->\n<nav>\n   <uib-tabset justified=\"true\">\n      <uib-tab>\n         <uib-tab-heading>\n            <em class=\"icon-equalizer fa-lg\"></em>\n         </uib-tab-heading>\n         <div ng-include=\"\'app/views/partials/offsidebar-tab1.html\'\"></div>\n      </uib-tab>\n      <uib-tab>\n         <uib-tab-heading>\n            <em class=\"icon-user fa-lg\"></em>\n         </uib-tab-heading>\n         <div>\n            <div ng-include=\"\'app/views/partials/offsidebar-tab2.html\'\"></div>\n         </div>\n      </uib-tab>\n   </uib-tabset>\n</nav>\n<!-- END Off Sidebar (right)-->");
$templateCache.put("app/views/partials/sidebar.html","<!-- Inline template with sidebar items markup and ng-directives-->\n<script type=\"text/ng-template\" id=\"sidebar-renderer.html\">\n    <span ng-if=\"item.heading\">{{(item.translate | translate) || item.text}}</span>\n    <a ng-if=\"!item.heading\" ng-href=\"{{$state.href(item.sref, item.params)}}\" title=\"{{item.text}}\">\n        <div ng-if=\"item.alert\" ng-class=\"item.label || \'label label-success\'\" class=\"pull-right\">{{item.alert}}</div>\n        <em ng-if=\"item.icon\" class=\"{{item.icon}}\"></em>\n        <span>{{(item.translate | translate) || item.text}}</span>\n    </a>\n    <ul ng-if=\"item.submenu\" uib-collapse=\"isCollapse(pIndex)\" ng-init=\"addCollapse(pIndex, item)\" class=\"nav sidebar-subnav\">\n        <li class=\"sidebar-subnav-header\">{{(item.translate | translate) || item.text}}</li>\n        <li ng-repeat=\"item in item.submenu\" ng-include=\"\'sidebar-renderer.html\'\" ng-class=\"getMenuItemPropClasses(item)\" ng-init=\"pIndex=(pIndex+\'-\'+$index); inSubmenu = true\" ng-click=\"toggleCollapse(pIndex)\"></li>\n    </ul>\n</script>\n<!-- START Sidebar (left)-->\n<div class=\"aside-inner\">\n    <nav sidebar=\"\" sidebar-anyclick-close=\"\" ng-class=\"{\'show-scrollbar\': app.layout.asideScrollbar}\" class=\"sidebar\">\n        <!-- START sidebar nav-->\n        <ul class=\"nav\">\n            <!-- Iterates over all sidebar items-->\n            <li ng-class=\"getMenuItemPropClasses(item)\" ng-repeat=\"item in menuItems\" ng-init=\"pIndex = $index\" ng-include=\"\'sidebar-renderer.html\'\" ng-click=\"toggleCollapse(pIndex, true)\"></li>\n        </ul>\n        <!-- END sidebar nav-->\n    </nav>\n</div>\n<!-- END Sidebar (left)-->");
$templateCache.put("app/views/partials/top-navbar.html","<!-- START Top Navbar-->\n<nav role=\"navigation\" class=\"navbar topnavbar\">\n   <!-- START navbar header-->\n   <div class=\"navbar-header\">\n      <a href=\"#/\" class=\"navbar-brand\">\n         <div class=\"brand-logo\">\n             <img src=\"app/img/logo.svg\" alt=\"App Logo\" class=\"img-responsive\" />              \n         </div>\n         <div class=\"brand-logo-collapsed\">\n            <img src=\"app/img/logo-single.svg\" alt=\"App Logo\" class=\"img-responsive\" />            \n         </div>\n      </a>\n   </div>\n   <!-- END navbar header-->\n   <!-- START Nav wrapper-->\n   <div class=\"nav-wrapper\">\n      <!-- START Left navbar-->\n      <ul class=\"nav navbar-nav\">\n         <li>\n            <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\n            <a href=\"\" trigger-resize=\"\" ng-click=\"app.layout.isCollapsed = !app.layout.isCollapsed\" ng-if=\"!app.layout.isCollapsedText\" class=\"hidden-xs\">\n               <em class=\"fa fa-navicon\"></em>\n            </a>\n            <!-- Button to show/hide the sidebar on mobile. Visible on mobile only.-->\n            <a href=\"\" ng-click=\"app.asideToggled = !app.asideToggled\" class=\"visible-xs sidebar-toggle\">\n               <em class=\"fa fa-navicon\"></em>\n            </a>\n         </li>\n      </ul>\n      <!-- END Left navbar-->\n      <!-- START Right Navbar-->\n      <ul class=\"nav navbar-nav navbar-right\">\n         <!-- Search icon-->\n         <li>\n            <a search-open=\"\">\n               <em class=\"icon-magnifier\"></em>\n            </a>\n         </li>\n         <!-- START Offsidebar button-->\n         <li>\n            <a href=\"\" ng-click=\"app.offsidebarOpen = !app.offsidebarOpen\">\n               <em class=\"icon-notebook\"></em>\n            </a>\n         </li>\n         <!-- END Offsidebar menu-->\n      </ul>\n      <!-- END Right Navbar-->\n   </div>\n   <!-- END Nav wrapper-->\n   <!-- START Search form-->\n   <form role=\"search\" action=\"search.html\" class=\"navbar-form\">\n      <div class=\"form-group has-feedback\">\n         <input type=\"text\" placeholder=\"{{ \'topbar.search.PLACEHOLDER\' | translate }}\" class=\"form-control\" />\n         <div search-dismiss=\"search-dismiss\" class=\"fa fa-times form-control-feedback\"></div>\n      </div>\n      <button type=\"submit\" class=\"hidden btn btn-default\">Submit</button>\n   </form>\n   <!-- END Search form-->\n</nav>\n<!-- END Top Navbar-->");
$templateCache.put("app/views/alumnos/expediente/datos_generales.html","<h3>Datos_generales</h3>\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Escuela</th>\n                                <th>Curp</th>\n                                <th>Nombre</th>\n                                <th>Número de Control</th>\n                                <th>Sexo</th>\n                                <th>Fecha de Nacimiento</th>\n                                <th>Tipo de Sangre</th>\n                                <th>Enfermedades</th>\n                                <th>Escuela Definitiva</th>\n                                <th>Estatus</th>\n                             </tr>\n                        </thead>\n                        <tbody>\n                            <tr ng-repeat=\"x in ctrl.datos_generales\">\n                                <td>{{x.escuela}}</td>\n                                <td>{{x.curp}}</td>\n                                <td>{{x.nombre}}</td>\n                                <td>{{x.num_control}}</td>\n                                <td>{{x.sexo}}</td>\n                                <td>{{x.fecha_nac}}</td>\n                                <td>{{x.tipo_sangre}}</td>\n                                <td>{{x.enfermedad}}</td>\n                                <td>{{x.escuela_def}}</td>\n                                <td>{{x.estatus}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("app/views/alumnos/expediente/datos_personales.html","<h3>Datos personales</h3>\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Curp</th>\n                                <th>Domicilio</th>\n                                <th>Colonia</th>\n                                <th>Ciudad</th>\n                                <th>Tutor</th>\n                                <th>Trabajo del Tutor</th>\n                                <th>Celular del Tutor</th>\n                                <th>Teléfono Trabajo</th>\n                                <th>Teléfono Casa</th>\n                                <th>Correo Tutor</th>\n                             </tr>\n                        </thead>\n                        <tbody>\n                            <tr ng-repeat=\"x in ctrl.datos_personales\">\n                                <td>{{x.curp}}</td>\n                                <td>{{x.domicilio}}</td>\n                                <td>{{x.colonia}}</td>\n                                <td>{{x.ciudad}}</td>\n                                <td>{{x.tutor}}</td>\n                                <td>{{x.trabajo_tutor}}</td>\n                                <td>{{x.celular_tutor}}</td>\n                                <td>{{x.telefono_trabajo}}</td>\n                                <td>{{x.telefono_casa}}</td>\n                                <td>{{x.correo_tutor}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("app/views/alumnos/expediente/estatus_escolar.html","<h3>Estatus Escolar</h3>\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Escuela</th>\n                                <th>Curp</th>\n                                <th>Revalidación</th>\n                                <th>Ciudad</th>\n                                <th>Fecha Revalidación</th>\n                                <th>Procedencia</th>\n                                <th>Fecha de Ingreso</th>\n                                <th>Carrera</th>\n                                <th>Turno</th>\n                                <th>Semestre</th>\n                                <th>Grupo</th>\n                                <th>Regular</th>\n                                <th>Semestre Ingreso</th>\n                                <th>Periodo Ingreso</th>\n                                <th>Ingreso Subsistema</th>\n                                <th>Periodo Egreso</th>\n                                <th>Promedio</th>\n                                <th>Folio Generación</th>\n                                <th>Semestre Baja</th>\n                                <th>Fecha Baja</th>\n                             </tr>\n                        </thead>\n                        <tbody>\n                            <tr ng-repeat=\"x in ctrl.estatus_escolar\">\n                                <td>{{x.escuela}}</td>\n                                <td>{{x.curp}}</td>\n                                <td>{{x.revalidacion}}</td>\n                                <td>{{x.fecha_rev}}</td>\n                                <td>{{x.procedencia}}</td>\n                                <td>{{x.fecha_ingreso}}</td>\n                                <td>{{x.carrera}}</td>\n                                <td>{{x.turno}}</td>\n                                <td>{{x.semestre}}</td>\n                                <td>{{x.grupo}}</td>\n                                <td>{{x.regular}}</td>\n                                <td>{{x.semestre_ingreso}}</td>\n                                <td>{{x.periodo_ingreso}}</td>\n                                <td>{{x.ingreso_subsistema}}</td>\n                                <td>{{x.periodo_egreso}}</td>\n                                <td>{{x.promedio}}</td>\n                                <td>{{x.folio_generacion}}</td>\n                                <td>{{x.semestre_baja}}</td>\n                                <td>{{x.fecha_baja}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");}]);