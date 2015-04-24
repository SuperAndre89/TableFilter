import {Dom} from '../dom';
import {Types} from '../types';
import {Helpers} from '../helpers';
import {Event} from '../event';

export class GridLayout{

    /**
     * Grid layout, table with fixed headers
     * @param {Object} tf TableFilter instance
     */
    constructor(tf) {
        var f = tf.config();

        //defines grid width
        this.gridWidth = f.grid_width || null;
        //defines grid height
        this.gridHeight = f.grid_height || null;
        //defines css class for main container
        this.gridMainContCssClass = f.grid_cont_css_class || 'grd_Cont';
        //defines css class for div containing table
        this.gridContCssClass = f.grid_tbl_cont_css_class || 'grd_tblCont';
        //defines css class for div containing headers' table
        this.gridHeadContCssClass = f.grid_tblHead_cont_css_class ||
            'grd_headTblCont';
        //defines css class for div containing rows counter, paging etc.
        this.gridInfDivCssClass = f.grid_inf_grid_css_class || 'grd_inf';
        //defines which row contains column headers
        this.gridHeadRowIndex = f.grid_headers_row_index || 0;
        //array of headers row indexes to be placed in header table
        this.gridHeadRows = f.grid_headers_rows || [0];
        //generate filters in table headers
        this.gridEnableFilters = f.grid_enable_default_filters!==undefined ?
            f.grid_enable_default_filters : true;
        //default col width
        this.gridDefaultColWidth = f.grid_default_col_width || '100px';
        //enables/disables columns resizer
        this.gridEnableColResizer = f.grid_enable_cols_resizer!==undefined ?
            f.grid_enable_cols_resizer : false;
        //defines col resizer script path
        this.gridColResizerPath = f.grid_cont_col_resizer_path ||
            this.basePath+'TFExt_ColsResizer/TFExt_ColsResizer.js';

        this.gridColElms = [];

        //div containing grid elements if grid_layout true
        this.prfxMainTblCont = 'gridCont_';
        //div containing table if grid_layout true
        this.prfxTblCont = 'tblCont_';
        //div containing headers table if grid_layout true
        this.prfxHeadTblCont = 'tblHeadCont_';
        //headers' table if grid_layout true
        this.prfxHeadTbl = 'tblHead_';
        //id of td containing the filter if grid_layout true
        this.prfxGridFltTd = '_td_';
        //id of th containing column header if grid_layout true
        this.prfxGridTh = 'tblHeadTh_';

        this.tf = tf;
    }

    /**
     * Generates a grid with fixed headers
     */
    init(){
        var tf = this.tf;
        var f = tf.config();
        var tbl = tf.tbl;

        if(!tf.gridLayout){
            return;
        }

        tf.isExternalFlt = true;

        // default width of 100px if column widths not set
        if(!tf.hasColWidth){
            tf.colWidth = [];
            for(var k=0; k<tf.nbCells; k++){
                var colW,
                    cell = tbl.rows[this.gridHeadRowIndex].cells[k];
                if(cell.width !== ''){
                    colW = cell.width;
                } else if(cell.style.width !== ''){
                    colW = parseInt(cell.style.width, 10);
                } else {
                    colW = this.gridDefaultColWidth;
                }
                tf.colWidth[k] = colW;
            }
            tf.hasColWidth = true;
        }
        tf.setColWidths(this.gridHeadRowIndex);

        var tblW;//initial table width
        if(tbl.width !== ''){
            tblW = tbl.width;
        }
        else if(tbl.style.width !== ''){
            tblW = parseInt(tbl.style.width, 10);
        } else {
            tblW = tbl.clientWidth;
        }

        //Main container: it will contain all the elements
        this.tblMainCont = Dom.create('div',
            ['id', this.prfxMainTblCont + tf.id]);
        this.tblMainCont.className = this.gridMainContCssClass;
        if(this.gridWidth){
            this.tblMainCont.style.width = this.gridWidth;
        }
        tbl.parentNode.insertBefore(this.tblMainCont, tbl);

        //Table container: div wrapping content table
        this.tblCont = Dom.create('div',['id', this.prfxTblCont + tf.id]);
        this.tblCont.className = this.gridContCssClass;
        if(this.gridWidth){
            this.tblCont.style.width = this.gridWidth;
        }
        if(this.gridHeight){
            this.tblCont.style.height = this.gridHeight;
        }
        tbl.parentNode.insertBefore(this.tblCont, tbl);
        var t = tbl.parentNode.removeChild(tbl);
        this.tblCont.appendChild(t);

        //In case table width is expressed in %
        if(tbl.style.width === ''){
            tbl.style.width = (tf._containsStr('%', tblW) ?
                tbl.clientWidth : tblW) + 'px';
        }

        var d = this.tblCont.parentNode.removeChild(this.tblCont);
        this.tblMainCont.appendChild(d);

        //Headers table container: div wrapping headers table
        this.headTblCont = Dom.create(
            'div',['id', this.prfxHeadTblCont + tf.id]);
        this.headTblCont.className = this.gridHeadContCssClass;
        if(this.gridWidth){
            this.headTblCont.style.width = this.gridWidth;
        }

        //Headers table
        this.headTbl = Dom.create('table', ['id', this.prfxHeadTbl + tf.id]);
        var tH = Dom.create('tHead'); //IE<7 needs it

        //1st row should be headers row, ids are added if not set
        //Those ids are used by the sort feature
        var hRow = tbl.rows[this.gridHeadRowIndex];
        var sortTriggers = [];
        for(var n=0; n<tf.nbCells; n++){
            var c = hRow.cells[n];
            var thId = c.getAttribute('id');
            if(!thId || thId===''){
                thId = this.prfxGridTh+n+'_'+tf.id;
                c.setAttribute('id', thId);
            }
            sortTriggers.push(thId);
        }

        //Filters row is created
        var filtersRow = Dom.create('tr');
        if(this.gridEnableFilters && tf.fltGrid){
            tf.externalFltTgtIds = [];
            for(var j=0; j<tf.nbCells; j++){
                var fltTdId = tf.prfxFlt+j+ this.prfxGridFltTd +tf.id;
                var cl = Dom.create(tf.fltCellTag, ['id', fltTdId]);
                filtersRow.appendChild(cl);
                tf.externalFltTgtIds[j] = fltTdId;
            }
        }
        //Headers row are moved from content table to headers table
        for(var i=0; i<this.gridHeadRows.length; i++){
            var headRow = tbl.rows[this.gridHeadRows[0]];
            tH.appendChild(headRow);
        }
        this.headTbl.appendChild(tH);
        if(tf.filtersRowIndex === 0){
            tH.insertBefore(filtersRow,hRow);
        } else {
            tH.appendChild(filtersRow);
        }

        this.headTblCont.appendChild(this.headTbl);
        this.tblCont.parentNode.insertBefore(this.headTblCont, this.tblCont);

        //THead needs to be removed in content table for sort feature
        var thead = Dom.tag(tbl, 'thead');
        if(thead.length>0){
            tbl.removeChild(thead[0]);
        }

        //Headers table style
        this.headTbl.style.tableLayout = 'fixed';
        tbl.style.tableLayout = 'fixed';
        this.headTbl.cellPadding = tbl.cellPadding;
        this.headTbl.cellSpacing = tbl.cellSpacing;
        // this.headTbl.style.width = tbl.style.width;

        //content table without headers needs col widths to be reset
        tf.setColWidths();

        //Headers container width
        this.headTblCont.style.width = this.tblCont.clientWidth+'px';

        tbl.style.width = '';
        //
        this.headTbl.style.width = tbl.clientWidth + 'px';
        //

        //scroll synchronisation
        Event.add(this.tblCont, 'scroll', (evt)=> {
            var elm = Event.target(evt);
            var scrollLeft = elm.scrollLeft;
            this.headTblCont.scrollLeft = scrollLeft;
            //New pointerX calc taking into account scrollLeft
            // if(!o.isPointerXOverwritten){
            //     try{
            //         o.Evt.pointerX = function(evt){
            //             var e = evt || global.event;
            //             var bdScrollLeft = tf_StandardBody().scrollLeft +
            //                 scrollLeft;
            //             return (e.pageX + scrollLeft) ||
            //                 (e.clientX + bdScrollLeft);
            //         };
            //         o.isPointerXOverwritten = true;
            //     } catch(err) {
            //         o.isPointerXOverwritten = false;
            //     }
            // }
        });

        //Sort is enabled if not specified in config object
        if(f.sort !== false){
            tf.sort = true;
            tf.sortConfig.asyncSort = true;
            tf.sortConfig.triggerIds = sortTriggers;
        }

        if(this.gridEnableColResizer){
            if(!tf.hasExtensions){
                tf.extensions = {
                    name:['ColumnsResizer_'+tf.id],
                    src:[this.gridColResizerPath],
                    description:['Columns Resizing'],
                    initialize:[function(o){
                        o.SetColsResizer('ColumnsResizer_'+o.id);}]
                };
                tf.hasExtensions = true;
            } else {
                if(!tf._containsStr(
                    'colsresizer',
                    Str.lower(tf.extensions.src.toString())) ){
                    tf.extensions.name.push('ColumnsResizer_'+tf.id);
                    tf.extensions.src.push(tf.gridColResizerPath);
                    tf.extensions.description.push('Columns Resizing');
                    tf.extensions.initialize.push(function(o){
                        o.SetColsResizer('ColumnsResizer_'+o.id);});
                }
            }
        }

        //Default columns resizer properties for grid layout
        f.col_resizer_cols_headers_table = this.headTbl.getAttribute('id');
        f.col_resizer_cols_headers_index = this.gridHeadRowIndex;
        f.col_resizer_width_adjustment = 0;
        f.col_enable_text_ellipsis = false;

        //Cols generation for all browsers excepted IE<=7
        this.tblHasColTag = Dom.tag(tbl, 'col').length > 0 ? true : false;

        //Col elements are enough to keep column widths after sorting and
        //filtering
        var createColTags = function(o){
            if(!o){
                return;
            }
            for(var k=(tf.nbCells-1); k>=0; k--){
                var col = Dom.create('col', ['id', tf.id+'_col_'+k]);
                tbl.firstChild.parentNode.insertBefore(col, tbl.firstChild);
                col.style.width = tf.colWidth[k];
                o.gridColElms[k] = col;
            }
            o.tblHasColTag = true;
        };
        if(!this.tblHasColTag){
            createColTags(this);
        } else {
            var cols = Dom.tag(tbl, 'col');
            for(var ii=0; ii<tf.nbCells; ii++){
                cols[ii].setAttribute('id', tf.id+'_col_'+ii);
                cols[ii].style.width = tf.colWidth[ii];
                o.gridColElms.push(cols[ii]);
            }
        }

        var afterColResizedFn = Types.isFn(f.on_after_col_resized) ?
            f.on_after_col_resized : null;
        f.on_after_col_resized = function(o, colIndex){
            if(!colIndex){
                return;
            }
            var w = o.crWColsRow.cells[colIndex].style.width;
            var col = o.gridColElms[colIndex];
            col.style.width = w;

            var thCW = o.crWColsRow.cells[colIndex].clientWidth;
            var tdCW = o.crWRowDataTbl.cells[colIndex].clientWidth;

            if(thCW != tdCW /*&& !Helpers.isIE()*/){
                o.headTbl.style.width = tbl.clientWidth+'px';
            }

            if(afterColResizedFn){
                afterColResizedFn.call(null,o,colIndex);
            }
        };

        if(tbl.clientWidth !== this.headTbl.clientWidth){
            tbl.style.width = this.headTbl.clientWidth+'px';
        }

        // Re-adjust reference row
        //tf.refRow = Helpers.isIE() ? (tf.refRow+1) : 0;
    }

    /**
     * Removes the grid layout
     */
    destroy(){
        var tf = this.tf;
        var tbl = tf.tbl;

        if(!tf.gridLayout){
            return;
        }
        var t = tbl.parentNode.removeChild(tbl);
        this.tblMainCont.parentNode.insertBefore(t, this.tblMainCont);
        this.tblMainCont.parentNode.removeChild(this.tblMainCont);

        this.tblMainCont = null;
        this.headTblCont = null;
        this.headTbl = null;
        this.tblCont = null;

        tbl.outerHTML = tf.sourceTblHtml;
        //needed to keep reference of table element
        tbl = Dom.id(tf.id);
    }
}