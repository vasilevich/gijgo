﻿/**
 * @widget Grid
 * @plugin Pagination
 */
gj.grid.plugins.pagination = {
    config: {
        base: {
            style: {
                pager: {
                    panel: '',
                    stateDisabled: '',
                    activeButton: ''
                }
            },

            paramNames: {
                /** The name of the parameter that is going to send the number of the page.
                 * The pager should be enabled in order this parameter to be in use.
                 * @alias paramNames.page
                 * @type string
                 * @default "page"
                 */
                page: 'page',

                /** The name of the parameter that is going to send the maximum number of records per page.
                 * The pager should be enabled in order this parameter to be in use.
                 * @alias paramNames.limit
                 * @type string
                 * @default "limit"
                 */
                limit: 'limit'
            },

            pager: {
                /** The maximum number of records that can be show by page.
                 * @alias pager.limit
                 * @type number
                 * @default 10
                 * @example local.data <!-- grid, dropdown -->
                 * <table id="grid"></table>
                 * <script>
                 *     let data, grid;
                 *     data = [
                 *         { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
                 *         { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
                 *         { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
                 *     ];
                 *     grid = ('#grid').grid({
                 *         dataSource: data,
                 *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         pager: { limit: 2, sizes: [2, 5, 10, 100] }
                 *     });
                 * </script>
                 * @example remote.data <!-- grid, dropdown -->
                 * <table id="grid"></table>
                 * <script>
                 *     let grid = ('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         pager: { limit: 2, sizes: [2, 5, 10, 100] }
                 *     });
                 * </script>
                 */
                limit: 10,

                /** Array that contains the possible page sizes of the grid.
                 * When this setting is set, then a drop down with the options for each page size is visualized in the pager.
                 * @alias pager.sizes
                 * @type array
                 * @default [5, 10, 20, 100]
                 * @example Bootstrap.3 <!-- bootstrap, grid, grid.pagination, dropdown  -->
                 * <table id="grid"></table>
                 * <script>
                 *     let grid = ('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         uiLibrary: 'bootstrap',
                 *         columns: [ { field: 'ID', width: 36 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
                 *     });
                 * </script>
                 * @example Bootstrap.4.FontAwesome <!-- bootstrap4, fontawesome, grid, dropdown  -->
                 * <table id="grid"></table>
                 * <script>
                 *     let grid = ('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         uiLibrary: 'bootstrap4',
                 *         iconsLibrary: 'fontawesome',
                 *         columns: [ { field: 'ID', width: 36 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
                 *     });
                 * </script>
                 * @example Bootstrap.4.Material.Icons <!-- bootstrap4, grid, dropdown  -->
                 * <table id="grid"></table>
                 * <script>
                 *     let grid = ('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         uiLibrary: 'bootstrap4',
                 *         columns: [ { field: 'ID', width: 36 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
                 *     });
                 * </script>
                 * @example Material.Design <!-- grid, grid.pagination, dropdown  -->
                 * <table id="grid"></table>
                 * <script>
                 *     let grid = ('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         uiLibrary: 'materialdesign',
                 *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
                 *     });
                 * </script>
                 */
                sizes: [5, 10, 20, 100],

                /** Array that contains a list with jquery objects that are going to be used on the left side of the pager.
                 * @alias pager.leftControls
                 * @type array
                 * @default array
                 * @example Font.Awesome <!-- fontawesome, grid  -->
                 * <style>
                 * .icon-disabled { color: #ccc; }
                 * table.gj-grid div[data-gj-role="display"] div.custom-item { display: table; margin-right: 5px; }
                 * </style>
                 * <table id="grid"></table>
                 * <script>
                 *     let grid = ('#grid').grid({
                 *         dataSource: '/Players/Get',
                 *         columns: [ { field: 'ID', width: 56 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
                 *         style: {
                 *             pager: {
                 *                 stateDisabled: 'icon-disabled'
                 *             }
                 *         },
                 *         pager: { 
                 *             limit: 2, 
                 *             sizes: [2, 5, 10, 20],
                 *             leftControls: [
                 *                 ('<div title="First" data-gj-role="page-first" class="custom-item"><i class="fa fa-fast-backward" aria-hidden="true" /></div>'),
                 *                 ('<div title="Previous" data-gj-role="page-previous" class="custom-item"><i class="fa fa-backward" aria-hidden="true" /></div>'),
                 *                 ('<div> Page </div>'),
                 *                 ('<div class="custom-item"></div>').appendChild(('<input type="text" data-gj-role="page-number" style="margin: 0 5px; width: 34px; height: 16px; text-align: right;" value="0">')),
                 *                 ('<div>of&nbsp;</div>'),
                 *                 ('<div data-gj-role="page-label-last" style="margin-right: 5px;">0</div>'),
                 *                 ('<div title="Next" data-gj-role="page-next" class="custom-item"><i class="fa fa-forward" aria-hidden="true" /></div>'),
                 *                 ('<div title="Last" data-gj-role="page-last" class="custom-item"><i class="fa fa-fast-forward" aria-hidden="true" /></div>'),
                 *                 ('<div title="Reload" data-gj-role="page-refresh" class="custom-item"><i class="fa fa-refresh" aria-hidden="true" /></div>'),
                 *                 ('<div class="custom-item"></div>').appendChild(('<select data-gj-role="page-size" style="margin: 0 5px; width: 50px;"></select>'))
                 *             ],
                 *             rightControls: [
                 *                 ('<div>Displaying records&nbsp;</div>'),
                 *                 ('<div data-gj-role="record-first">0</div>'),
                 *                 ('<div>&nbsp;-&nbsp;</div>'),
                 *                 ('<div data-gj-role="record-last">0</div>'),
                 *                 ('<div>&nbsp;of&nbsp;</div>'),
                 *                 ('<div data-gj-role="record-total">0</div>').css({ "margin-right": "5px" })
                 *             ]
                 *         }
                 *     });
                 * </script>
                 */
                leftControls: undefined,

                /** Array that contains a list with jquery objects that are going to be used on the right side of the pager.
                 * @alias pager.rightControls
                 * @type array
                 * @default array
                 */
                rightControls: undefined
            }
        },

        bootstrap: {
            style: {
                pager: {
                    panel: '',
                    stateDisabled: ''
                }
            }
        },

        bootstrap4: {
            style: {
                pager: {
                    panel: 'btn-toolbar',
                    stateDisabled: ''
                }
            }
        },

        glyphicons: {
            icons: {
                first: '<span class="glyphicon glyphicon-step-backward"></span>',
                previous: '<span class="glyphicon glyphicon-backward"></span>',
                next: '<span class="glyphicon glyphicon-forward"></span>',
                last: '<span class="glyphicon glyphicon-step-forward"></span>',
                refresh: '<span class="glyphicon glyphicon-refresh"></span>'
            }
        },

        materialicons: {
            icons: {
                first: '<i class="gj-icon first-page" />',
                previous: '<i class="gj-icon chevron-left" />',
                next: '<i class="gj-icon chevron-right" />',
                last: '<i class="gj-icon last-page" />',
                refresh: '<i class="gj-icon refresh" />'
            }
        },

        fontawesome: {
            icons: {
                first: '<i class="fa fa-fast-backward" aria-hidden="true"></i>',
                previous: '<i class="fa fa-backward" aria-hidden="true"></i>',
                next: '<i class="fa fa-forward" aria-hidden="true"></i>',
                last: '<i class="fa fa-fast-forward" aria-hidden="true"></i>',
                refresh: '<i class="fa fa-refresh" aria-hidden="true"></i>'
            }
        }
    },

    private: {
        init: function (grid) {
            let row, cell, data, controls, leftPanel, rightPanel, tfoot, leftControls, rightControls;

            data = grid.getConfig();

            if (data.pager) {
                if (!data.params[data.paramNames.page]) {
                    data.params[data.paramNames.page] = 1;
                }
                if (!data.params[data.paramNames.limit]) {
                    data.params[data.paramNames.limit] = data.pager.limit;
                }

                gj.grid.plugins.pagination.private.localization(data);

                row = document.createElement('tr');
                row.setAttribute('data-gj-role', 'pager');
                cell = document.createElement('th');
                row.appendChild(cell);

                leftPanel = document.createElement('div');
                leftPanel.setAttribute('data-gj-role', 'display');
                gj.core.addClasses(leftPanel, data.style.pager.panel);
                leftPanel.style.float = 'left';
                rightPanel = document.createElement('div');
                rightPanel.setAttribute('data-gj-role', 'display');
                gj.core.addClasses(rightPanel, data.style.pager.panel);
                rightPanel.style.float = 'right';

                cell.appendChild(leftPanel)
                cell.appendChild(rightPanel);

                tfoot = document.createElement('tfoot');
                tfoot.appendChild(row);
                grid.element.appendChild(tfoot);
                gj.grid.plugins.pagination.private.updatePagerColSpan(grid);

                leftControls = gj.grid.methods.clone(data.pager.leftControls); //clone array
                for (let i = 0; i < leftControls.length; i++) {
                    leftPanel.appendChild(leftControls[i]);
                };

                rightControls = gj.grid.methods.clone(data.pager.rightControls); //clone array
                for (let i = 0; i < rightControls.length; i++) {
                    rightPanel.appendChild(rightControls[i]);
                };

                controls = grid.element.querySelectorAll('tfoot [data-gj-role]');
                for (let i = 0; i < controls.length; i++) {
                    gj.grid.plugins.pagination.private.initPagerControl((controls[i]), grid);
                }
            }
        },

        localization: function (data) {
            if (data.uiLibrary === 'bootstrap') {
                gj.grid.plugins.pagination.private.localizationBootstrap(data);
            } else if (data.uiLibrary === 'bootstrap4') {
                gj.grid.plugins.pagination.private.localizationBootstrap4(data);
            } else if (data.uiLibrary === 'bootstrap5') {
                gj.grid.plugins.pagination.private.localizationBootstrap5(data);
            } else {
                gj.grid.plugins.pagination.private.localizationMaterialDesign(data);
            }
        },

        localizationBootstrap: function (data) {
            let msg = gj.grid.messages[data.locale],
            parser = new DOMParser(),
            pageFirst = document.createElement('button'),
            pagePrevious = document.createElement('button'),
            pageNext = document.createElement('button'),
            pageLast = document.createElement('button'),
            pageRefresh = document.createElement('button'),
            labelLast = document.createElement('div'),
            labelPage = document.createElement('div'),
            labelOf = document.createElement('div'),
            pageNumber = document.createElement('input'),
            pager = document.createElement('select');

            if (typeof (data.pager.leftControls) === 'undefined') {
                gj.core.addClasses(pageFirst, 'btn btn-default btn-sm');
                pageFirst.setAttribute('data-gj-role', 'page-first');
                pageFirst.setAttribute('type', 'button');
                pageFirst.setAttribute('title', msg.FirstPageTooltip);
                pageFirst.innerHTML = (data.icons.first || msg.First);
                
                gj.core.addClasses(pagePrevious, 'btn btn-default btn-sm');
                pagePrevious.setAttribute('data-gj-role', 'page-previous');
                pagePrevious.setAttribute('type', 'button');
                pagePrevious.setAttribute('title', msg.PreviousPageTooltip);
                pagePrevious.innerHTML = (data.icons.previous || msg.Previous);
                
                gj.core.addClasses(pageNext, 'btn btn-default btn-sm');
                pageNext.setAttribute('data-gj-role', 'page-next');
                pageNext.setAttribute('type', 'button');
                pageNext.setAttribute('title', msg.NextPageTooltip);
                pageNext.innerHTML = (data.icons.next || msg.Next);
                
                gj.core.addClasses(pageLast, 'btn btn-default btn-sm');
                pageLast.setAttribute('data-gj-role', 'page-last');
                pageLast.setAttribute('type', 'button');
                pageLast.setAttribute('title', msg.LastPageTooltip);
                pageLast.innerHTML = (data.icons.last || msg.Last);
                
                gj.core.addClasses(pageRefresh, 'btn btn-default btn-sm');
                pageRefresh.setAttribute('data-gj-role', 'page-refresh');
                pageRefresh.setAttribute('type', 'button');
                pageRefresh.setAttribute('title', msg.Refresh);
                pageRefresh.innerHTML = (data.icons.refresh || msg.Refresh);

                labelLast.setAttribute('data-gj-role', 'page-label-last');
                labelLast.innerHTML = '0';

                labelPage.innerHTML = msg.Page;

                labelOf.innerHTML = msg.Of;

                pageNumber.setAttribute('data-gj-role', 'page-number');
                pageNumber.setAttribute('type', 'text');
                pageNumber.setAttribute('value', '0');
                gj.core.addClasses(pageNumber, 'form-control input-sm');

                gj.core.addClasses(pager, 'form-control input-sm');
                pager.style.width = '3.75rem';
                pager.setAttribute('data-gj-role', 'page-size');

                data.pager.leftControls = [pageFirst, pagePrevious, labelPage, pageNumber, labelOf, labelLast, pageNext, pageLast, pageRefresh, pager];
            }
            if (typeof (data.pager.rightControls) === 'undefined') {
                data.pager.rightControls = [
                    parser.parseFromString('<div>' + msg.DisplayingRecords + '</div>', 'text/xml').firstChild,
                    parser.parseFromString('<div data-gj-role="record-first">0</div>', 'text/xml').firstChild,
                    parser.parseFromString('<div>-</div>', 'text/xml').firstChild,
                    parser.parseFromString('<div data-gj-role="record-last">0</div>', 'text/xml').firstChild,
                    parser.parseFromString('<div>' + msg.Of + '</div>', 'text/xml').firstChild,
                    parser.parseFromString('<div data-gj-role="record-total">0</div>', 'text/xml').firstChild
                ];
            }
        },

        localizationBootstrap4: function (data) {
            let msg = gj.grid.messages[data.locale],
                parser = new DOMParser(),
                pageFirst = document.createElement('button'),
                pagePrevious = document.createElement('button'),
                pageNext = document.createElement('button'),
                pageLast = document.createElement('button'),
                pageRefresh = document.createElement('button'),
                labelLast = document.createElement('div'),
                labelPage = document.createElement('div'),
                labelOf = document.createElement('div'),
                pageNumber = document.createElement('div'),
                input = document.createElement('input'),
                pager = document.createElement('select');
            if (typeof (data.pager.leftControls) === 'undefined') {
                gj.core.addClasses(pageFirst, 'btn btn-default btn-sm gj-cursor-pointer');
                pageFirst.setAttribute('data-gj-role', 'page-first');
                pageFirst.setAttribute('title', msg.FirstPageTooltip);
                pageFirst.innerHTML = (data.icons.first || msg.First);
                
                gj.core.addClasses(pagePrevious, 'btn btn-default btn-sm gj-cursor-pointer');
                pagePrevious.setAttribute('data-gj-role', 'page-previous');
                pagePrevious.setAttribute('title', msg.PreviousPageTooltip);
                pagePrevious.innerHTML = (data.icons.previous || msg.Previous);
                
                gj.core.addClasses(pageNext, 'btn btn-default btn-sm gj-cursor-pointer');
                pageNext.setAttribute('data-gj-role', 'page-next');
                pageNext.setAttribute('title', msg.NextPageTooltip);
                pageNext.innerHTML = (data.icons.next || msg.Next);
                
                gj.core.addClasses(pageLast, 'btn btn-default btn-sm gj-cursor-pointer');
                pageLast.setAttribute('data-gj-role', 'page-last');
                pageLast.setAttribute('title', msg.LastPageTooltip);
                pageLast.innerHTML = (data.icons.last || msg.Last);
                
                gj.core.addClasses(pageRefresh, 'btn btn-default btn-sm gj-cursor-pointer');
                pageRefresh.setAttribute('data-gj-role', 'page-refresh');
                pageRefresh.setAttribute('title', msg.Refresh);
                pageRefresh.innerHTML = (data.icons.refresh || msg.Refresh);

                labelLast.setAttribute('data-gj-role', 'page-label-last');
                labelLast.innerHTML = '0';

                labelPage.innerHTML = msg.Page;

                labelOf.innerHTML = msg.Of;

                pageNumber.classList.add('input-group');
                input.setAttribute('data-gj-role', 'page-number');
                input.setAttribute('type', 'text');
                input.setAttribute('value', '0');
                gj.core.addClasses(input, 'form-control form-control-sm');
                pageNumber.appendChild(input);

                gj.core.addClasses(pager, 'form-control input-sm');
                pager.style.width = '3.75rem';
                pager.setAttribute('data-gj-role', 'page-size');

                data.pager.leftControls = [pageFirst, pagePrevious, labelPage, pageNumber, labelOf, labelLast, pageNext, pageLast, pageRefresh, pager];
            }
            if (typeof (data.pager.rightControls) === 'undefined') {
                data.pager.rightControls = [
                    parser.parseFromString('<div>' + msg.DisplayingRecords + ' </div>', 'text/xml').firstChild,
                    parser.parseFromString('<div data-gj-role="record-first">0</div>', 'text/xml').firstChild,
                    parser.parseFromString('<div>-</div>', 'text/xml').firstChild,
                    parser.parseFromString('<div data-gj-role="record-last">0</div>', 'text/xml').firstChild,
                    parser.parseFromString('<div>' + msg.Of + '</div>', 'text/xml').firstChild,
                    parser.parseFromString('<div data-gj-role="record-total">0</div>', 'text/xml').firstChild
                ];
            }
        },

        localizationBootstrap5: function (data) {
            let msg = gj.grid.messages[data.locale],
                parser = new DOMParser(),
                pageFirst = document.createElement('button'),
                pagePrevious = document.createElement('button'),
                pageNext = document.createElement('button'),
                pageLast = document.createElement('button'),
                pageRefresh = document.createElement('button'),
                labelLast = document.createElement('div'),
                labelPage = document.createElement('div'),
                labelOf = document.createElement('div'),
                pageNumber = document.createElement('div'),
                input = document.createElement('input'),
                pager = document.createElement('select');

            if (typeof (data.pager.leftControls) === 'undefined') {
                gj.core.addClasses(pageFirst, 'btn btn-secondary btn-sm gj-cursor-pointer');
                pageFirst.setAttribute('data-gj-role', 'page-first');
                pageFirst.setAttribute('title', msg.FirstPageTooltip);
                pageFirst.innerHTML = (data.icons.first || msg.First);
                
                gj.core.addClasses(pagePrevious, 'btn btn-secondary btn-sm gj-cursor-pointer');
                pagePrevious.setAttribute('data-gj-role', 'page-previous');
                pagePrevious.setAttribute('title', msg.PreviousPageTooltip);
                pagePrevious.innerHTML = (data.icons.previous || msg.Previous);
                
                gj.core.addClasses(pageNext, 'btn btn-secondary btn-sm gj-cursor-pointer');
                pageNext.setAttribute('data-gj-role', 'page-next');
                pageNext.setAttribute('title', msg.NextPageTooltip);
                pageNext.innerHTML = (data.icons.next || msg.Next);
                
                gj.core.addClasses(pageLast, 'btn btn-secondary btn-sm gj-cursor-pointer');
                pageLast.setAttribute('data-gj-role', 'page-last');
                pageLast.setAttribute('title', msg.LastPageTooltip);
                pageLast.innerHTML = (data.icons.last || msg.Last);
                
                gj.core.addClasses(pageRefresh, 'btn btn-secondary btn-sm gj-cursor-pointer');
                pageRefresh.setAttribute('data-gj-role', 'page-refresh');
                pageRefresh.setAttribute('title', msg.Refresh);
                pageRefresh.innerHTML = (data.icons.refresh || msg.Refresh);

                labelLast.setAttribute('data-gj-role', 'page-label-last');
                labelLast.innerHTML = '0';

                labelPage.innerHTML = msg.Page;

                labelOf.innerHTML = msg.Of;

                pageNumber.classList.add('input-group');
                input.setAttribute('data-gj-role', 'page-number');
                input.setAttribute('type', 'text');
                input.setAttribute('value', '0');
                gj.core.addClasses(input, 'form-control form-control-sm');
                pageNumber.appendChild(input);

                gj.core.addClasses(pager, 'form-control input-sm');
                pager.style.width = '3.75rem';
                pager.setAttribute('data-gj-role', 'page-size');

                data.pager.leftControls = [pageFirst, pagePrevious, labelPage, pageNumber, labelOf, labelLast, pageNext, pageLast, pageRefresh, pager];
            }
            if (typeof (data.pager.rightControls) === 'undefined') {
                data.pager.rightControls = [
                    parser.parseFromString('<div>' + msg.DisplayingRecords + ' </div>', 'text/xml').firstChild,
                    parser.parseFromString('<div data-gj-role="record-first">0</div>', 'text/xml').firstChild,
                    parser.parseFromString('<div>-</div>', 'text/xml').firstChild,
                    parser.parseFromString('<div data-gj-role="record-last">0</div>', 'text/xml').firstChild,
                    parser.parseFromString('<div>' + msg.Of + '</div>', 'text/xml').firstChild,
                    parser.parseFromString('<div data-gj-role="record-total">0</div>', 'text/xml').firstChild
                ];
            }
        },

        localizationMaterialDesign: function (data) {
            let msg = gj.grid.messages[data.locale],
                parser = new DOMParser(),
                pager = document.createElement('select');
            if (typeof (data.pager.leftControls) === 'undefined') {
                data.pager.leftControls = [];
            }
            if (typeof (data.pager.rightControls) === 'undefined') {
                pager.classList.add('gj-grid-md-limit-select');
                pager.style.width = '3.25rem';
                pager.setAttribute('data-gj-role', 'page-size');
                data.pager.rightControls = [
                    parser.parseFromString('<span class="">' + msg.RowsPerPage + '</span>', 'text/xml').firstChild,
                    pager,
                    parser.parseFromString('<span class="gj-md-spacer-32"> </span>', 'text/xml').firstChild,
                    parser.parseFromString('<span data-gj-role="record-first" class="">0</span>', 'text/xml').firstChild,
                    parser.parseFromString('<span class="">-</span>', 'text/xml').firstChild,
                    parser.parseFromString('<span data-gj-role="record-last" class="">0</span>', 'text/xml').firstChild,
                    parser.parseFromString('<span class="gj-grid-mdl-pager-label">' + msg.Of + '</span>', 'text/xml').firstChild,
                    parser.parseFromString('<span data-gj-role="record-total" class="">0</span>', 'text/xml').firstChild,
                    parser.parseFromString('<span class="gj-md-spacer-32"> </span>', 'text/xml').firstChild,
                    parser.parseFromString('<button class="gj-button-md' + (data.icons.first ? ' gj-button-md-icon' : '') + '" title="' + msg.PreviousPageTooltip + '" data-gj-role="page-previous">' + (data.icons.previous || msg.Previous) + '</button>', 'text/xml').firstChild,
                    parser.parseFromString('<span class="gj-md-spacer-24"> </span>', 'text/xml').firstChild,
                    parser.parseFromString('<button class="gj-button-md' + (data.icons.next ? ' gj-button-md-icon' : '') + '" title="' + msg.NextPageTooltip + '" data-gj-role="page-next">' + (data.icons.next || msg.Next) + '</button>', 'text/xml').firstChild
                ];
            }
        },

        initPagerControl: function (control, grid) {
            let data = grid.getConfig();
            switch (control.getAttribute('data-gj-role')) {
                case 'page-size':
                    if (data.pager.sizes && 0 < data.pager.sizes.length) {
                        control.style.display = 'block';
                        for (let i = 0; i < data.pager.sizes.length; i++) {
                            let option = document.createElement('option'),
                                value = data.pager.sizes[i].toString();
                            option.setAttribute('value', value);
                            option.innerText = value
                            control.appendChild(option);
                        };
                        control.value = data.params[data.paramNames.limit];
                        if (gj.dropdown) {
                            new GijgoDropDown(control, {
                                uiLibrary: data.uiLibrary,
                                iconsLibrary: data.iconsLibrary,
                                fontSize: window.getComputedStyle(control, null).getPropertyValue('font-size'),
                                style: {
                                    presenter: 'btn btn-default btn-sm'
                                }
                            });
                        }
                        control.addEventListener('change', function () {
                            let newSize = parseInt(this.value, 10);
                            data.params[data.paramNames.limit] = newSize;
                            gj.grid.plugins.pagination.private.changePage(grid, 1);
                            gj.grid.plugins.pagination.events.pageSizeChange(grid.element, newSize);
                        });
                    } else {
                        control.style.display = 'none';
                    }
                    break;
                case 'page-refresh':
                    control.addEventListener('click', function () { grid.reload(); });
                    break;
            }

        },

        reloadPager: function (grid, totalRecords) {
            let page, limit, lastPage, firstRecord, lastRecord, data, controls, i;

            data = grid.getConfig();

            if (data.pager) {
                page = (0 === totalRecords) ? 0 : parseInt(data.params[data.paramNames.page], 10);
                limit = parseInt(data.params[data.paramNames.limit], 10);
                lastPage = Math.ceil(totalRecords / limit);
                firstRecord = (0 === page) ? 0 : (limit * (page - 1)) + 1;
                lastRecord = (firstRecord + limit) > totalRecords ? totalRecords : (firstRecord + limit) - 1;

                controls = grid.element.querySelectorAll('TFOOT [data-gj-role]');
                for (i = 0; i < controls.length; i++) {
                    gj.grid.plugins.pagination.private.reloadPagerControl((controls[i]), grid, page, lastPage, firstRecord, lastRecord, totalRecords);
                }

                gj.grid.plugins.pagination.private.updatePagerColSpan(grid);
            }
        },

        reloadPagerControl: function (control, grid, page, lastPage, firstRecord, lastRecord, totalRecords) {
            let newPage;
            switch (control.getAttribute('data-gj-role')) {
                case 'page-first':
                    gj.grid.plugins.pagination.private.assignPageHandler(grid, control, 1, page < 2);
                    break;
                case 'page-previous':
                    gj.grid.plugins.pagination.private.assignPageHandler(grid, control, page - 1, page < 2);
                    break;
                case 'page-number':
                    control.value = page;
                    //control.off('change').on('change', gj.grid.plugins.pagination.private.createChangePageHandler(grid, page));
                    break;
                case 'page-label-last':
                    control.innerHTML = lastPage;
                    break;
                case 'page-next':
                    gj.grid.plugins.pagination.private.assignPageHandler(grid, control, page + 1, lastPage === page);
                    break;
                case 'page-last':
                    gj.grid.plugins.pagination.private.assignPageHandler(grid, control, lastPage, lastPage === page);
                    break;
                case 'page-button-one':
                    newPage = (page === 1) ? 1 : ((page == lastPage) ? (page - 2) : (page - 1));
                    gj.grid.plugins.pagination.private.assignButtonHandler(grid, control, page, newPage, lastPage);
                    break;
                case 'page-button-two':
                    newPage = (page === 1) ? 2 : ((page == lastPage) ? lastPage - 1 : page);
                    gj.grid.plugins.pagination.private.assignButtonHandler(grid, control, page, newPage, lastPage);
                    break;
                case 'page-button-three':
                    newPage = (page === 1) ? page + 2 : ((page == lastPage) ? page : (page + 1));
                    gj.grid.plugins.pagination.private.assignButtonHandler(grid, control, page, newPage, lastPage);
                    break;
                case 'record-first':
                    control.innerHTML = firstRecord;
                    break;
                case 'record-last':
                    control.innerHTML = lastRecord;
                    break;
                case 'record-total':
                    control.innerHTML = totalRecords;
                    break;
            }
        },

        assignPageHandler: function (grid, control, newPage, disabled) {
            let style = grid.getConfig().style.pager;
            if (disabled) {
                gj.core.addClasses(control, style.stateDisabled);
                control.disabled = true;
                //control.off('click');
            } else {
                gj.core.removeClasses(control, style.stateDisabled);
                control.disabled = false;
                // control.off('click');
                control.addEventListener('click', function () {
                    gj.grid.plugins.pagination.private.changePage(grid, newPage);
                });
            }
        },

        assignButtonHandler: function (grid, control, page, newPage, lastPage) {
            let style = grid.getConfig().style.pager;
            if (newPage < 1 || newPage > lastPage) {
                control.style.display = 'none';
            } else {
                control.style.display = 'block';
                control.off('click').text(newPage);
                if (newPage === page) {
                    control.addClass(style.activeButton);
                } else {
                    control.removeClass(style.activeButton).on('click', function () {
                        gj.grid.plugins.pagination.private.changePage(grid, newPage);
                    });
                }
            }
        },

        createChangePageHandler: function (grid, currentPage) {
            return function () {
                let data = grid.getConfig(),
                    newPage = parseInt(this.value, 10);
                gj.grid.plugins.pagination.private.changePage(grid, newPage);
            };
        },

        changePage: function (grid, newPage) {
            let data = grid.getConfig(), pageNumber;
            if (gj.grid.plugins.pagination.events.pageChanging(grid.element, newPage) !== false && !isNaN(newPage)) {
                pageNumber = grid.element.querySelector('TFOOT [data-gj-role="page-number"]');
                if (pageNumber) {
                    pageNumber.innerText = newPage;
                }
                data.params[data.paramNames.page] = newPage;
            }
            grid.reload();
        },

        updatePagerColSpan: function (grid) {
            let cell = grid.element.querySelector('tfoot tr[data-gj-role="pager"] th');
            cell && cell.setAttribute('colspan', gj.grid.methods.countVisibleColumns(grid));
        },
        
        isLastRecordVisible: function (grid) {
            let result = true,
                data = grid.getConfig(),
                limit = parseInt(data.params[data.paramNames.limit], 10),
                page = parseInt(data.params[data.paramNames.page], 10),
                count = grid.count();
            if (limit && page) {
                result = ((page - 1) * limit) + count === data.totalRecords;
            }
            return result;
        }
    },

    public: {
        getAll: function (includeAllRecords) {
            let limit, page, start,
                data = this.getConfig(),
                records = this.getRecords();
            if (Array.isArray(data.dataSource)) {
                if (includeAllRecords) {
                    return data.dataSource;
                } else if (data.params[data.paramNames.limit] && data.params[data.paramNames.page]) {                    
                    limit = parseInt(data.params[data.paramNames.limit], 10);
                    page = parseInt(data.params[data.paramNames.page], 10);
                    start = (page - 1) * limit;
                    return records.slice(start, start + limit);
                } else {
                    return records;
                }
            } else {
                return this.getRecords();
            }
        }
    },

    events: {
        /**
         * Triggered when the page size is changed.
         *
         * @event pageSizeChange
         * @param {object} e - event data
         * @param {number} newSize - The new page size
         * @example sample <!-- bootstrap, grid, grid.pagination -->
         * <table id="grid"></table>
         * <script>
         *     let grid = ('#grid').grid({
         *         dataSource: '/Players/Get',
         *         uiLibrary: 'bootstrap',
         *         columns: [ { field: 'ID', width: 36 }, { field: 'Name' }, { field: 'PlaceOfBirth' } ],
         *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
         *     });
         *     grid.on('pageSizeChange', function (e, newSize) {
         *         alert('The new page size is ' + newSize + '.');
         *     });
         * </script>
         */
        pageSizeChange: function (el, newSize) {
            return el.dispatchEvent(new CustomEvent('pageSizeChange', { detail: { newSize: newSize } }));
        },

        /**
         * Triggered before the change of the page.
         *
         * @event pageChanging
         * @param {object} e - event data
         * @param {number} newPage - The new page
         * @example sample <!-- bootstrap4, fontawesome, dropdown, grid, grid.pagination -->
         * <table id="grid"></table>
         * <script>
         *     let grid = ('#grid').grid({
         *         dataSource: '/Players/Get',
         *         uiLibrary: 'bootstrap4',
         *         iconsLibrary: 'fontawesome',
         *         columns: [ { field: 'ID', width: 56 }, { field: 'Name', sortable: true }, { field: 'PlaceOfBirth' } ],
         *         pager: { limit: 2, sizes: [2, 5, 10, 20] }
         *     });
         *     grid.on('pageChanging', function (e, newPage) {
         *         if (isNaN(newPage)) {
         *             alert('Invalid page number');
         *             return false;
         *         } else {
         *             alert(newPage + ' is valid page number.');
         *         }
         *     });
         * </script>
         */
        pageChanging: function (el, newSize) {
            return el.dispatchEvent(new CustomEvent('pageChanging', { detail: { newSize: newSize } }));
        }
    },

    configure: function (grid, fullConfig, clientConfig) {
        grid.extend(grid, gj.grid.plugins.pagination.public);
        let data = grid.getConfig();
        if (clientConfig.pager) {
            gj.grid.methods.isLastRecordVisible = gj.grid.plugins.pagination.private.isLastRecordVisible;

            grid.on('initialized', function () {
                gj.grid.plugins.pagination.private.init(grid);
            });
            grid.on('dataBound', function (e) {
                gj.grid.plugins.pagination.private.reloadPager(grid, e.detail.totalRecords);
            });
            grid.on('columnShow', function () {
                gj.grid.plugins.pagination.private.updatePagerColSpan(grid);
            });
            grid.on('columnHide', function () {
                gj.grid.plugins.pagination.private.updatePagerColSpan(grid);
            });
        }
    }
};
