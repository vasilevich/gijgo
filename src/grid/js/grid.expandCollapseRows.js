﻿/** 
  * @widget Grid 
  * @plugin Expand Collapse Rows
  */
if (typeof (gj.grid.plugins) === 'undefined') {
    gj.grid.plugins = {};
}

gj.grid.plugins.expandCollapseRows = {
    config: {
        base: {
            /** Template for the content in the detail section of the row.
             * Automatically add expand collapse column as a first column in the grid during initialization.
             * @type string
             * @default undefined
             * @example <!-- grid.base, grid.expandCollapseRows -->
             * <table id="grid"></table>
             * <script>
             *     $('#grid').grid({
             *         dataSource: '/DataSources/GetPlayers',
             *         detailTemplate: '<div><b>Place Of Birth:</b> {PlaceOfBirth}</div>',
             *         columns: [ { field: 'ID' }, { field: 'Name' }, { field: 'DateOfBirth', type: 'date' } ]
             *     });
             * </script>
             */
            detailTemplate: undefined,

            style: {
                expandIcon: '',
                collapseIcon: ''
            }
        },
        jqueryui: {
            style: {
                expandIcon: 'ui-icon ui-icon-plus',
                collapseIcon: 'ui-icon ui-icon-minus'
            }
        },
        bootstrap: {
            style: {
                expandIcon: 'glyphicon glyphicon-plus',
                collapseIcon: 'glyphicon glyphicon-minus'
            }
        }
    },

    'private': {
        detailExpand: function ($grid, $cell) {
            var $contentRow = $cell.closest('tr'),
                $detailsRow = $('<tr data-role="details"></tr>'),
                $detailsCell = $('<td colspan="' + gj.grid.methods.countVisibleColumns($grid) + '"></td>');

            $detailsRow.append($detailsCell.append($contentRow.data('details')));
            $detailsRow.insertAfter($contentRow);
            $cell.find('span').attr('class', $grid.data().style.collapseIcon); //TODO: move to the plugin
            $cell.off('click').on('click', function () {
                gj.grid.plugins.expandCollapseRows.private.detailCollapse($grid, $(this));
            });
            $grid.updateDetails($contentRow);
            gj.grid.plugins.expandCollapseRows.events.detailExpand($grid, $detailWrapper, record);
        },

        detailCollapse: function ($grid, $cell) {
            var $contentRow = $cell.closest('tr'),
                $detailsRow = $contentRow.next('tr[data-role="details"]'),
                $detailWrapper = $detailsRow.find('td>div');
            $detailsRow.remove();
            $cell.find('span').attr('class', $grid.data().style.expandIcon); //TODO: move to the plugin
            $cell.off('click').on('click', function () {
                gj.grid.plugins.expandCollapseRows.private.detailExpand($grid, $(this));
            });
            gj.grid.plugins.expandCollapseRows.events.detailCollapse($grid, $detailWrapper, $grid.get($contentRow.data('position')));
        },

        updateDetailsColSpan: function ($grid) {
            var $cells = $grid.find('tbody > tr[data-role="details"] > td');
            if ($cells && $cells.length) {
                $cells.attr('colspan', gj.grid.methods.countVisibleColumns($grid));
            }
        }
    },

    'public': {
        //TODO: add documentation
        collapseAll: function () {
            var $grid = this;
            $grid.find('tbody tr[data-role="row"]').each(function () {
                gj.grid.plugins.expandCollapseRows.private.detailCollapse($grid, $(this).find('td').first());
            });
        },

        //TODO: add documentation
        expandAll: function () {
            var $grid = this;
            $grid.find('tbody tr[data-role="row"]').each(function () {
                gj.grid.plugins.expandCollapseRows.private.detailExpand($grid, $(this).find('td').first());
            });
        },

        //TODO: add documentation
        updateDetails: function ($contentRow) {
            var $grid = this,
                $detailWrapper = $contentRow.data('details'),
                content = $detailWrapper.html(),
                record = $grid.get($contentRow.data('position'));

            $detailWrapper.html().replace(/\{(.+?)\}/g, function ($0, $1) {
                var column = gj.grid.methods.getColumnInfo($grid, $1);
                content = content.replace($0, gj.grid.methods.formatText(record[$1], column));
            });
            $detailWrapper.html(content);
        }
    },

    'events': {
        /**
         * Event fires when detail row is showing
         *
         * @event detailExpand
         * @param {object} e - event data
         * @param {object} detailWrapper - the detail wrapper as jQuery object 
         * @param {object} record - the data of the row record 
         * @example <!-- grid.base, grid.expandCollapseRows -->
         * <table id="grid"></table>
         * <script>
         *     var grid = $('#grid').grid({
         *         dataSource: '/DataSources/GetPlayers',
         *         detailTemplate: '<div/>',
         *         columns: [ 
         *             { field: 'ID' }, 
         *             { field: 'Name' },
         *             { field: 'PlaceOfBirth' }
         *         ]
         *     });
         *     grid.on('detailExpand', function (e, $detailWrapper, record) {
         *         $detailWrapper.empty().append('Place of Birth: ' + record.PlaceOfBirth);
         *     });
         * </script>
         */
        detailExpand: function ($grid, $detailWrapper, record) {
            $grid.trigger('detailExpand', [$detailWrapper, record]);
        },

        /**
         * Event fires when detail row is hiding
         *
         * @event detailCollapse
         * @param {object} e - event data
         * @param {object} detailWrapper - the detail wrapper as jQuery object 
         * @param {object} record - the data of the row record 
         * @example <!-- grid.base, grid.expandCollapseRows -->
         * <table id="grid"></table>
         * <script>
         *     var grid = $('#grid').grid({
         *         dataSource: '/DataSources/GetPlayers',
         *         detailTemplate: '<div/>',
         *         columns: [ 
         *             { field: 'ID' }, 
         *             { field: 'Name' },
         *             { field: 'PlaceOfBirth' }
         *         ]
         *     });
         *     grid.on('detailExpand', function (e, $detailWrapper, record) {
         *         $detailWrapper.append('Place of Birth: ' + record.PlaceOfBirth);
         *     });
         *     grid.on('detailCollapse', function (e, $detailWrapper, record) {
         *         $detailWrapper.empty();
         *         alert('detailCollapse is fired.');
         *     });
         * </script>
         */
        detailCollapse: function ($grid, $detailWrapper, record) {
            $grid.trigger('detailCollapse', [$detailWrapper, record]);
        }
    },

    'configure': function ($grid) {
        var data = $grid.data();

        $.extend(true, $grid, gj.grid.plugins.expandCollapseRows.public);

        if (data.uiLibrary === 'jqueryui') {
            $.extend(true, data, gj.grid.plugins.expandCollapseRows.config.jqueryui);
        } else if (data.uiLibrary === 'bootstrap') {
            $.extend(true, data, gj.grid.plugins.expandCollapseRows.config.bootstrap);
        }

        if (typeof (data.detailTemplate) !== 'undefined') {
            data.columns = [{
                title: '',
                field: data.dataKey,
                width: (data.uiLibrary === 'jqueryui' ? 24 : 30),
                align: 'center',
                type: 'icon',
                icon: data.style.expandIcon,
                events: {
                    'click': function () {
                        gj.grid.plugins.expandCollapseRows.private.detailExpand($grid, $(this));
                    }
                }
            }].concat(data.columns);

            $grid.on('rowDataBound', function (e, $row, id, record) {
                $row.data('details', $(data.detailTemplate));
            });
            $grid.on('columnShow', function (e, column) {
                gj.grid.plugins.expandCollapseRows.private.updateDetailsColSpan($grid);
            });
            $grid.on('columnHide', function (e, column) {
                gj.grid.plugins.expandCollapseRows.private.updateDetailsColSpan($grid);
            });
            $grid.on('rowRemoving', function (e, $row, id, record) {
                gj.grid.plugins.expandCollapseRows.private.detailCollapse($grid, $row.children('td').first());
            });
            $grid.on('pageChanging', function () {
                $grid.collapseAll();
            });
        }
    }
};

$.extend(true, gj.grid.config, gj.grid.plugins.expandCollapseRows.config.base);