import unusedFileChecker from 'unused-file-checker'

export default function () {
  console.log('App Ctrl')
  
  let AppCtrl = {}

  AppCtrl.report = {}

  AppCtrl.chooseFile = (files) => {
    AppCtrl.scanFile(files[0].path)
  }

  AppCtrl.scanFile = (filePath) => {
    return new Promise((resolve, reject) => {
      unusedFileChecker(filePath).scan().then(unusedFiles => {
        AppCtrl.report.unusedFiles = unusedFiles
        resolve()
      })
    })
  }

  return AppCtrl
}
