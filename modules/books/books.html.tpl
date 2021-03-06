<div id="m-books" layout="column">
        <div layout="row" layout-align="center center" class="box-header m-books-header">
            <div flex-sm="100" flex-xs="100" flex-md="100" flex-gt-md="50">
                <div class="box box-padding box-margin m-books-filter-box">
                    <div layout="row" layout-sm="column" layout-xs="column" layout-align="center">
                        <div class="md-headline" layout="row" layout-align="center center">Find me the best</div>
                        <md-input-container>
                            <md-select class="md-headline" ng-model="filters.category" ng-change="clear()">
                                <label>Category</label>
                                <md-option ng-repeat="(category,types) in availableFilters" placeholder="category" value="{{category}}">{{category}}</md-option>
                            </md-select>
                        </md-input-container>
                        <div class="md-headline" layout="row" layout-align="center center">books about</div>
                        <md-input-container>
                            <md-select class="md-headline" ng-model="filters.type" ng-change="clear()">
                                <label>Type</label>
                                <md-option ng-repeat="type in availableFilters[filters.category]" placeholder="type" value="{{type}}">{{type}}</md-option>
                            </md-select>
                        </md-input-container>
                    </div>
                    <div class="md-subhead" layout="row" layout-align="center center">
                        Or
                    </div>
                    <div class="md-title search-box" flex>
                        <md-input-container class="md-block">
                            <label><span class="fa fa-search"></span> Search for a book</label>
                            <input flex ng-model="filters.search">
                        </md-input-container>
                    </div>
                </div>
            </div>
        </div>
        <div layout="row" layout-align="center">
            <div flex="100" flex-gt-lg="65">
                <div class="box box-margin box-padding message-box" ng-show="!books.length">
                    Ops, we did not find results.
                </div>
                <div ng-show="books.length">
                    <md-grid-list
                    md-cols-xs="1" md-cols-sm="2" md-cols-md="4" md-cols-lg="4" md-cols-gt-lg="4"
                    md-row-height-xs="1:1.5" md-row-height="1:1.8" md-row-height-md="1:1.8"  md-row-height-gt-md="1:2" md-row-height="1:1"
                    md-gutter="12px" md-gutter-gt-sm="8px"
                    md-gutter="4px">
                        <md-grid-tile ng-repeat="book in books">
                            <book></book>
                        </md-grid-tile>
                    </md-grid-list>
                    <div class="box box-padding box-margin clickable" flex ng-click="getMoreBooks()" layout="row" ng-show="hasMore" layout-align="center">
                        Load more
                    </div>
                </div>
            </div>
        </div>
</div>
