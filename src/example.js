import SGSClient from "./sgs.js"

async function example() {
  const client = new SGSClient()
  const STUDENT_ID = 'xxxxx'            // REPLACE WITH STUDENT ID
  const CITIZEN_ID = "xxxxxxxxxxxx"     // REPLACE WITH STUDENT CITIZEN ID

  try {
    await client.login(STUDENT_ID, CITIZEN_ID)
    // infomation
    const info = await client.getUserInfo("TblStudents/Email-TblStudents.aspx")
    client.saveFile(`info.html`, info)

    // grade
    const allGrades = await client.getAllGrades()
    for (const [semester, gradeData] of Object.entries(allGrades)) {
      if (gradeData) client.saveFile(`grades-${semester}.html`, gradeData)
      else console.log(`[WARN] no grade data for semester ${semester}`)
    }

    // [NOTE] you may use
    // await client.getGrades(SEMESTER-ID-HERE)
    // this will each HTML too

    await client.logout()
    console.log('\nAll done!')
  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

example()