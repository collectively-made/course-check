import { assert } from 'chai'
import AppCtrl from './controller.js'

let controller

describe('One or more unused files are found.', () => {
  beforeEach(() => controller = AppCtrl())

  it('Should return an array of unused files.', function () {
    this.timeout(8000)
    controller.scanFile('./test-course.zip').then(result => {
      let hasUnusedFiles = (Array.isArray(controller.report.unusedFiles) && controller.report.unusedFiles.length > 0)
      assert.equal(hasUnusedFiles, true)
    })
  })
})
