import csv
import json
import glob

esfile = open('../src/data/Words.js', 'w')
esfile.write('/* eslint-disable */\n')
esfile.write('export default [')

for path in glob.glob("../data/*"):
  csvfile = open(path, 'r')

  fields = ("id", "langId", "categoryId", "word", "meaning", "ruby", "posId")
  reader = csv.DictReader(csvfile, fields, "rest")

  reader.next() # skip the header
  for row in reader:
    if "rest" in row:
      del row["rest"]
    row["id"] = int(row["id"])
    row["langId"] = int(row["langId"])
    row["categoryId"] = int(row["categoryId"])
    row["posId"] = int(row["posId"])
    json.dump(row, esfile, ensure_ascii=False)
    esfile.write(',')

esfile.write(']')
