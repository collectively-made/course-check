import unusedFileChecker from 'unused-file-checker'

export default function ($state) {
  let AppCtrl = {}

  AppCtrl.$state = $state
  AppCtrl.report = {}

  AppCtrl.chooseFile = (files) => {
    console.log('File Chosen')
    AppCtrl.scanFile(files[0].path)
  }

  AppCtrl.scanFile = (filePath) => {
    return new Promise((resolve, reject) => {
      unusedFileChecker(filePath).scan().then(unusedFiles => {
        AppCtrl.report.unusedFiles = unusedFiles
        $state.go('app.reporter')
        resolve()
      })
    })
  }

  return AppCtrl
}
