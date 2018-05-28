let ops = []

const numObjects = 10e6
print(`Numbers of documents to insert: ${numObjects}`)

for (let i = 0; i < numObjects; i++) {
  ops.push({
    insertOne: {
      document: {
        userId: i,
      }
    },
  })
  if (i % 10000 === 0) {
    db.user.bulkWrite(ops)
    ops = []
    print(`${i}/${numObjects}`)
  }
}

db.user.bulkWrite(ops)

