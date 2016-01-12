<div id="m-details" layout="column" flex>
    <div class="box-header m-details-header light-text" flex="50" layout="row" layout-align="center center">
        <div>
            <div class="md-display-3">
                {{book.name}}
            </div>
            <div class="md-display-1">
                by {{book.author.name}}
            </div>
            <div class="md-headline">
                {{book.description}}
            </div>

            <div class="box-margin box-align" layout="column">
                <div>Categories:</div>
                <div class="md-regular">
                    {{book.genre.category}}, {{book.genre.name}}
                </div>
                <div class="box-padding" layout="column" layout-align="center center">
                    <div>
                        <span class="fa fa-heart-o"></span> {{book.likes}}
                    </div>
                    <div flex="20" layout="row" layout-align="end end">{{book.getPublishedDate()}}</div>
                </div>
            </div>
        </div>
    </div>
    <div layout="row" layout-align="center">
        <div layout="column" flex="30" flex-sm="90" flex-xs="90">
            <div class="md-subhead secondary-text m-details-introduction-title">
                Introduction
            </div>
            <div class="md-display-1">
                {{book.name}}
            </div>
            <div class="md-regular m-details-content" ng-repeat="text in book.introduction">
                {{text.content}}
            </div>
            <md-divider></md-divider>
            <div class="box-padding" layout="row" layout-align="center" >
                <div layout="column" layout-align="center center">
                    <div class="box-margin m-details-profile-box" background-image="{{book.author.avatar}}"></div>
                    <span>Written by {{book.author.name}}</span>
                </div>
            </div>
            <md-divider></md-divider>
        </div>
    </div>
    <div class="m-details-recommendations" layout="row" layout-align="center" ng-show="books.length">
        <div layout="column" flex="50" flex-sm="90" flex-xs="90">
            <h3 class="md-display-1">
                Similar Reading
            </h3>
            <div class="md-regular">
                If you liked this book, we recommend you check out these emerging titles.
            </div>
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
</div>
