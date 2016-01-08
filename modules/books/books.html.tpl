<div id="m-books" layout="row" layout-align="center">
    <div flex-sm="100" flex-xs="100" flex-md="100" flex-gt-md="50">
        <md-grid-list
        md-cols-xs="1" md-cols-sm="2" md-cols-md="3" md-cols-gt-md="3"
        md-row-height-xs="1:1.5" md-row-height="1:1.8" md-row-height-md="1:1.8"  md-row-height-gt-md="1:2" md-row-height="1:1"
        md-gutter="12px" md-gutter-gt-sm="8px"
        md-gutter="4px">
            <md-grid-tile ng-repeat="book in books">
                <book></book>
            </md-grid-tile>
        </md-grid-list>
    </div>
</div>
