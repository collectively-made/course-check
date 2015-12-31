export default function () {
  let scanner = {
    template:
      `
      <div layout="column">
        <div flex class="drop-box" ngf-drop="chooseFile($files)">
        </div>
      </div>
      `
  }

  return scanner
}
