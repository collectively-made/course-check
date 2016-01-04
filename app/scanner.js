export default function () {
  let scanner = {
    template:
      `
      <div layout="column" layout-fill class="padding">
        <div flex class="drop-box" ngf-drop="app.chooseFile($files)" ngf-drag-over-class="'drop-box-hovered'">
          <span>Drag and drop a zip file here</span>
        </div>
      </div>
      `
  }

  return scanner
}
