<div class="box m-book-box primary-text clickable" ng-click="path('/books/'+book.id)">
    <div class="m-book-cover" background-image="{{book.cover}}"></div>
    <div class="m-book-text-box" layout="column" layout-align="start">
        <div class="m-book-title">{{book.name}}</div>
        <div class="m-book-author">by {{book.author.name}}</div>
        <div class="m-book-info-box secondary-text" layout="row">
            <div flex="50" layout="row" layout-align="start end">
                <span ng-click="$event.stopPropagation();" class="transition-all secondary-clickable fa fa-heart-o"></span> {{book.likes}}
            </div>
            <div flex="50" layout="row" layout-align="end end">{{book.published | date:'yyyy-MM-dd HH:mm:ss'}}</div>
        </div>
    </div>
</div>
