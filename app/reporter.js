export default function () {
  let reporter = {
    template:
      `
      <div layout="column">
        <md-list>
          <md-list-item class="md-2-line" ng-repeat="file in app.report.unusedFiles">
            <div class="md-list-item-text">
              <h3>{{file.name}}</h3>
              <p class="text-ellipsis">{{file.entryName}}</p>
            </div>
            <md-divider inset></md-divider>
          </md-list-item>
        </md-list>
      </div>
      `
  }

  return reporter
}
